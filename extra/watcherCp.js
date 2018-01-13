
const	fs = require('fs');
fs.watch('Hello.txt', function(){
	console.log("The file has been changed");
});
console.log("I'm watching for change");
