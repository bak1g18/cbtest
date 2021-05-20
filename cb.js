const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());

const port = 5000;

//Defining the CORS settings for all requesting domains.
app.options("*", cors());

//This is just a blank page. Can be ignored. 
app.get('/', (req, res) => {
    res.send('<head> <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="besandbox-test" ></script> </head> <body> <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="BE1" data-cb-plan-quantity="1" >subscribe</a> </body>');
})



//Code to start the app running.
app.listen(process.env.PORT || port, () => {
    console.log(`App listening`);
})