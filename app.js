const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res)=>{
    const query = req.body.cityName
    const apiKey = '1b8f10a0f31282e58b5bb6be01681950'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

    https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
    data += chunk;
    });

    response.on('end', () => {
        const weatherData = JSON.parse(data);
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

    res.write("<h1> Temprature in the "+ query + " is "  + temperature + "</h1>")
    res.write("<p> description is " + description + " </p>")
  });
});
})

app.listen(5000, () => console.log("Your server is running on http://localhost:5000"));