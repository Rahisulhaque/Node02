/******************************************************************************************/
/*                                                                                        */
/*                   Rahisul Haque <rahisul@icloud.com>                                   */
/*                                                                                        */
/******************************************************************************************/


const fs = require ('fs');

fs.watch('target.txt', function(){
    console.log("File 'target.txt' just chhanged!");
});

console.log("Now watching target.txt for changes...");
