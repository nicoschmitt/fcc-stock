## Stock app

Use https://www.quandl.com/docs/api to get stock data.  
Use mongodb to store data.  

##### Heroku Settings or Environment Variables  
|  Name                |  Description              
|----------------------|-------------------------------------------------------
| MONGO_URI            |  Mongodb connection string (including user/pass if needed)  
| QUANDL_API_KEY       |  API Key from Quandl. Register to get one (it's free)

##### Install to run

npm i   
node server.js  

##### Install for dev

First install node, bower (global) and gulp-cli (global).  
Then:  
npm i && bower i && gulp

Demo here : https://nico-stock.herokuapp.com
