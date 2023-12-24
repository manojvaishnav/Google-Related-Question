const { getJson } = require("serpapi");
const mysql = require('mysql2/promise');
const apiKey = process.env.API_KEY;
var tokenArray = [];
const conn = require('../database/conn')

const saveToDatabase = async (question, answer, query) => {
    try {
        const [rows] = await conn.query(
            'INSERT INTO QA_Table (question, answer, search_query) VALUES (?, ?, ?)',
            [question, answer, query]
        );
        console.log('Inserted ID:', rows.insertId);
    } catch (error) {
        console.error('Error saving to the database:', error.message);
    }
};

// Post all question and answer
module.exports.postQuestion = async (req, res) => {
    const { query } = req.body;
    const round=15;
    try {
        const firstData = async () => {
            return new Promise((resolve) => {
                getJson({
                    engine: 'google',
                    q: query,
                    api_key: apiKey,
                }, (json) => {
                    if (json["related_questions"] && json["related_questions"].length > 0) {
                        json["related_questions"].forEach((relatedQuestion, index) => {
                            const answerSnippet = relatedQuestion.snippet;
                            const question = relatedQuestion.question;
                            const token = relatedQuestion.next_page_token;
                            if (answerSnippet && token) {
                                tokenArray.push(relatedQuestion.next_page_token);
                                saveToDatabase(question, answerSnippet, query);
                            }
                        });
                    } else {
                        return res.status(200).json({ message: "No related question found" })
                    }

                    resolve();
                });
            });
        };

        await firstData();

        for (let i = 0; i < round; i++) {
            try {
                await getJson({
                    engine: 'google_related_questions',
                    next_page_token: tokenArray[i],
                    api_key: apiKey,
                }, (json) => {
                    if (json["related_questions"] && json["related_questions"].length > 0) {

                        json["related_questions"].forEach((relatedQuestion, index) => {
                            const token = relatedQuestion.next_page_token;
                            const question = relatedQuestion.question;
                            const answerSnippet = relatedQuestion.snippet;
                            if (answerSnippet && token) {
                                saveToDatabase(question, answerSnippet, query);
                                tokenArray.push(token);
                            }
                        });
                    } else {
                        console.log('No related questions found.');
                    }
                });
            } catch (error) {
                return res.status(404).json({ message: error.message });
            }
        }

        return res.status(200).json({ message: 'Search completed successfully.' });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

// Get all question and answer
module.exports.getQuestion = async (req, res) => {
    try {
        const [rows] = await conn.query('SELECT * FROM QA_Table');
        return res.status(200).json({ searchResults: rows });
    } catch (error) {
        console.error('Error retrieving data from the database:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Delete question and answer via tag
module.exports.deleteQuestion = async (req, res) => {
    const { query } = req.body
    try {
        const [rows] = await conn.query('SELECT * FROM QA_Table WHERE SEARCH_QUERY = ?', [query]);
        if (rows.length == 0) {
            return res.status(400).json({ message: "No Data Found" });
        }
        await conn.query(`DELETE FROM QA_Table WHERE SEARCH_QUERY = ?`, [query]);
        return res.status(200).json({ message: "Data Deleted Successfully" });
    } catch (error) {
        console.error('Error retrieving data from the database:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Get question and answer via tag
module.exports.getTagQuestion = async (req, res) => {
    const { query } = req.body
    try {
        const [rows] = await conn.query('SELECT * FROM QA_Table WHERE SEARCH_QUERY = ?', [query]);
        if (rows.length == 0) {
            return res.status(400).json({ message: "No Data Found" });
        }
        return res.status(200).json({ searchResults: rows });
    } catch (error) {
        console.error('Error retrieving data from the database:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
