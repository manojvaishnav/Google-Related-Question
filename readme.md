<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Questions Backend App</title>
</head>

<body>

    <h1>Google Questions Backend App</h1>

    <p>Welcome to the Google Questions Backend App! This Node.js app allows you to retrieve and manage the most asked
        questions on Google about a specific tag.</p>

    <h2>Getting Started</h2>

    <h3>Step 1: Clone the Repository</h3>

    <pre>
        <code>
            git clone https://github.com/your-username/your-repo.git
            cd your-repo
        </code>
    </pre>

    <h3>Step 2: Install Dependencies</h3>

    <pre>
        <code>
            npm install
        </code>
    </pre>

    <h3>Step 3: Create a .env File</h3>

    <p>Create a <code>.env</code> file in the root directory and add the following variables:</p>

    <pre>
        <code>
            PORT=your_port_number
            DB_HOST=your_database_host
            DB_USER=your_database_user
            DB_PASSWORD=your_database_password
            DB_DATABASE=your_database_name
            DB_PORT=your_database_port
            API_KEY=your_serpapi_key
        </code>
    </pre>

    <h3>Step 4: Run the Application</h3>

    <pre>
        <code>
            npm start
        </code>
    </pre>

    <p>The app will start running on the specified port.</p>

    <h2>API Endpoints</h2>

    <h3>1. POST /api/v1/question</h3>

    <ul>
        <li><strong>Description:</strong> Save most asked questions about a tag on Google into the MySQL database.</li>
        <li><strong>Request:</strong>
            <pre>
                <code>
                    {
                        "query": "sachin tendulkar"
                    }
                </code>
            </pre>
        </li>
        <li><strong>Response:</strong>
            <pre>
                <code>
                    {
                        "message": "Search completed successfully."
                    }
                </code>
            </pre>
        </li>
    </ul>

    <h3>2. GET /api/v1/question</h3>

    <ul>
        <li><strong>Description:</strong> Retrieve all questions available in the database.</li>
        <li><strong>Response:</strong>
            <pre>
                <code>
                    [
                        {
                            "id": 1,
                            "question": "Sample question 1",
                            "answer": "Sample answer 1",
                            "search_query": "sachin tendulkar"
                        },
                        {
                            "id": 3,
                            "question": "Sample question 3",
                            "answer": "Sample answer 3",
                            "search_query": "sundar pichai"
                        }
                    ]
                </code>
            </pre>
        </li>
    </ul>

    <h3>3. DELETE /api/v1/question</h3>

    <ul>
        <li><strong>Description:</strong> Delete all data for a given tag from the database.</li>
        <li><strong>Request:</strong>
            <pre>
                <code>
                    {
                        "query": "sachin tendulkar"
                    }
                </code>
            </pre>
        </li>
        <li><strong>Response:</strong>
            <pre>
                <code>
                    {
                        "message": "Data deleted successfully!"
                    }
                </code>
            </pre>
        </li>
    </ul>

    <h3>4. GET /api/v1/tagquestion</h3>

    <ul>
        <li><strong>Description:</strong> Retrieve all available questions about a specific tag.</li>
        <li><strong>Request:</strong>
            <pre>
                <code>
                    {
                        "query": "sachin tendulkar"
                    }
                </code>
            </pre>
        </li>
        <li><strong>Response:</strong>
            <pre>
                <code>
                    [
                        {
                            "id": 1,
                            "question": "Sample question 1",
                            "answer": "Sample answer 1",
                            "search_query": "sachin tendulkar"
                        },
                        {
                            "id": 3,
                            "question": "Sample question 3",
                            "answer": "Sample answer 3",
                            "search_query": "sachin tendulkar"
                        }
                    ]
                </code>
            </pre>
        </li>
    </ul>

    <h2>Contributing</h2>

    <p>Feel free to contribute to the project by opening issues or submitting pull requests.</p>


</body>

</html>
