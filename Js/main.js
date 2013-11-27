ws=io.connect('http://192.168.0.12:3100');
document.addEventListener('DOMContentLoaded', function(){
	ws.emit('start', function(a){//this is some that the people not know!!!  callbacks with socket.io
		a.forEach(function(val,key){
			$('#info>tbody').append(val)
		});
	});
});
