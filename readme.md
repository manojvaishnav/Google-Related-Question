Google Questions Backend App
============================

Welcome to the Google Questions Backend App! This Node.js app allows you to retrieve and manage the most asked questions on Google about a specific tag.

Getting Started
---------------

### Step 1: Clone the Repository

        `git clone https://github.com/manojvaishnav/Google-Related-Question


        cd your-repo`
        
    

### Step 2: Install Dependencies

        `npm install`
        
    

### Step 3: Create a .env File

Create a `.env` file in the root directory and add the following variables:

        `PORT=your_port_number       
        
          DB_HOST=your_database_host 
              
          DB_USER=your_database_user   
                          
        DB_PASSWORD=your_database_password     
                                    
        DB_DATABASE=your_database_name    
                                            
         DB_PORT=your_database_port   
                                                     
           API_KEY=your_serpapi_key`


        
    

### Step 4: Run the Application

        `npm start`
        
    

The app will start running on the specified port.

API Endpoints
-------------

### 1\. POST /api/v1/question

*   **Description:** Save most asked questions about a tag on Google into the MySQL database.
*   **Request:**
    
                    `{                         
                        

                        "query": "sachin tendulkar" 

                        
                    }`
                    
                
    
*   **Response:**
    
                    `{                         
                        

                        "message": "Search completed successfully."                     
                        
                        
                    }`
                    
                
    

### 2\. GET /api/v1/question

*   **Description:** Retrieve all questions available in the database.
*   **Response:**
    
                    `[                         
                        
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
                                
                    ]`
                    
                
    

### 3\. DELETE /api/v1/question

*   **Description:** Delete all data for a given tag from the database.
*   **Request:**
    
                    `{                         "query": "sachin tendulkar"                     }`
                    
                
    
*   **Response:**
    
                    `{                         "message": "Data deleted successfully!"                     }`
                    
                
    

### 4\. GET /api/v1/tagquestion

*   **Description:** Retrieve all available questions about a specific tag.
*   **Request:**
    
                    `{                         "query": "sachin tendulkar"                     }`
                    
                
    
*   **Response:**
    
                    `[                         {                             "id": 1,                             "question": "Sample question 1",                             "answer": "Sample answer 1",                             "search_query": "sachin tendulkar"                         },                         {                             "id": 3,                             "question": "Sample question 3",                             "answer": "Sample answer 3",                             "search_query": "sachin tendulkar"                         }                     ]`
                    
                
    

Contributing
------------

Feel free to contribute to the project by opening issues or submitting pull requests.