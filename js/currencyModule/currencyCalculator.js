/**
 * currencyObjectCollection array storing parsed values
 * from http://coinabul.com/api.php api
 */
var currencyObjectCollection = [];

/**
 * convertMoney method that takes userInput value,
 * converts the input value to value in desired
 * currency
 */

var convertMoney = function(value) {
	// loops loops and more loops
};

/**
 * requestData object that requests the 
 * http://coinabul.com/api.php api
 */

var requestData = new XMLHttpRequest();
requestData.open('GET', 'http://coinabul.com/api.php');

requestData.onreadystatechange = function() {
	if((requestData.status == 200) && (requestData.readyState == 4)) {
		var reso = JSON.parse(requestData.responseText);
		for(key in reso){
			
			var currency = currencyObjectFactory(key, reso[key].USD);
			console.log(currency);
		}
	}

};

requestData.send();

/**
 * display method that logs converted values to
 * the screen
 */
var display = function (convertedValues) {

};
