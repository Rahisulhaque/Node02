/******************************************************************************/
/*                                                                            */
/*                  NodeJS file watcher with command line argument            */
/*                    By Rahisul                                              */
/*                  rahisul@icloud.com                                        */
/*                                                                            */
/******************************************************************************/






const 
	fs = require('fs'),
	filename = process.argv[2];
if (!filename){
	throw Error("This program hasn't found any matching file name.\n");} 

fs.watch(filename, () => {
	console.log("The file has been changed!");
	});
console.log("filewatcher-argv is wokring. It is watching for change of " + filename);



console.log("fs is watching file... ...\n");
