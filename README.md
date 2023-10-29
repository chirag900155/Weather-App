# Weather App Documentation

This is a simple weather application built using Node.js and Express.js. It allows users to get the current temperature and weather description for a specific city.

Prerequisites
Before running the Weather App, ensure you have the following installed:

Node.js (version 12 or above)
Express.js
Installation
Clone the repository:
git clone https://github.com/chirag900155/your-repository.git
Navigate to the project directory:
cd your-repository
Install the dependencies: 
npm install
Usage
Obtain an API key from OpenWeatherMap. You will need to sign up for an account and generate an API key.

Replace 'YOUR_API_KEY' in the app.js file with your actual OpenWeatherMap API key.

Run the application:
node app.js
Open your web browser and go to http://localhost:5000.

Enter the name of a city in the provided input field.

Click the "Go" button or press Enter.

The app will fetch the current temperature and weather description from the OpenWeatherMap API.

The temperature and weather description will be displayed on the page.

Technologies Used
Node.js: A JavaScript runtime environment.
Express.js: A web application framework for Node.js.
Directory Structure
├── app.js
├── index.html
└── README.md
app.js: Contains the server-side code responsible for handling requests and calling the OpenWeatherMap API.
index.html: The HTML file for the weather app's user interface.
README.md: Documentation file providing information about the project.
License
This project is licensed under the MIT License.

Feel free to modify and use this project according to your needs.
