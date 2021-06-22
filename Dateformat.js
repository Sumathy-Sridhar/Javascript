var dateFormat = require('dateformat');
var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
console.log(day);
const event = new Date('21 June 2021 21:52 UTC');
var day1=dateFormat(event, "yyyy-mm-dd h:MM:ss");
console.log(day1.toString());

