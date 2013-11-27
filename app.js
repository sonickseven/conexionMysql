var io=require('socket.io'), mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dianas1120',
  database	:'prueba'
});
connection.connect();
/*
var consulta="INSERT INTO empleados VALUES(?,?,?,?)";
connection.query(consulta, ['','Sonick', 'Seven', '125478'], function(err, rows, fields){
	if (err){
		console.log("Error: " + err.message);
	}else{
		console.log('ok');
	}
});*/

function Selects(cb){
	//show only a name
	var consulta="SELECT * FROM empleados order by id desc";
	connection.query(consulta, function(err, rows, fields){
		if (err){
			console.log("Error: " + err.message);
		}else{
			cb(rows);
		}
	});
}
var ws=io.listen(3100);
ws.disable('log');//this option is by not show message for the shell or terminal!!
ws.on('connection', function(socket){
	socket.on('start', function(cb){
		var full=[];
		Selects(function(a){
			a.forEach(function(val, key){
				full.push(htmlTable(val));
				if(full.length===a.length)
					cb(full);
			});
		});
	});
});
function htmlTable(all){
	return '<tr><td>'+all.id+'</td><td>'+all.name+'</td><td>'+all.lastname+'</td><td>'+all.mobile+'</td></tr>'; //this can do with jade or handlebars
}

//ok this is all for today i wait that like ous!!!!!  :D
