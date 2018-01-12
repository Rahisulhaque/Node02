const fs = require('fs');

fs.watch('Sample.txt', () => {
	console.log("The file has been changed!");
	});

console.log("fs is watching file... ...\n");
