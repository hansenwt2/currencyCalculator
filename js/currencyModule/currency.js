/**
 * currencyObjectFactory containing currency name and 
 * currency value
 */

function currencyObjectFactory(name, value) {
	currencyObj = new Object();
	currencyObj.name = name;
	currencyObj.value = value;
	return currencyObj;
}
