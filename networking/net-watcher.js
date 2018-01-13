/******************************************************************************************/
/*                                                                                        */
/*                   Rahisul Haque <rahisul@icloud.com>                                   */
/*                                                                                        */
/******************************************************************************************/

"use strict"

const 
	fs = require('fs'),
	net= require('net'),


	filename = process.argv[2],
	server = net.createServer(function(connection){
	//reporting
	console.log('Subsriber connected');
	connection.write('Now watching' + filename + ' for change.\n');

	//watch setup
	let watcher =  fs.watch(filename, function(){
		connection.write("File named '" + filename + "' changed : " + Date.now() + ".\n");
	});


	//clean up
	connection.on('close', function(){
		console.log('Subscriber has been disconnected');
		watcher.close();
	 });
	});
if (!filename){
	throw Error('No target file has been found!');
}

server.listen(5432, function(){
	console.log('Listening for Subscriber....\n');
});


