// Extract US zip codes or Canadian Postal Codes from a string

// The RegExp for US zip codes and Canadian Postal codes
var usZip = new RegExp(/\b\d{4,5}(-\d{4,5})?\b/);
var canZip = new RegExp(/\b[A-Z]{1}\d{1}[A-Z]{1}\s+\d{1}[A-Z]{1}\d{1}\b/);

// Once we've set the variables, we can access them from any string:
var str = "123 Fake St. Chicago 60601";

// We can delete it from a string:
var strWithoutZip = str.replace(usZip, "");

// Or we can extract only it from a string:
var strWithJustZip = str.match(usZip)[0];
