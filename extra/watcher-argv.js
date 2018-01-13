/******************************************************************************************/
/*                                                                                        */
/*                   Rahisul Haque <rahisul@icloud.com>                                   */
/*                                                                                        */
/******************************************************************************************/

const 
    fs = require('fs'),
    file_name = process.argv[2];

if (!file_name){
    throw Error(" A file to watch must be specified!");
}

fs.watch(file_name, function(){
    console.log("The file name" + file_name + " has been changed");
});

console.log(" Now watching " +file_name + "for changes... ...");


