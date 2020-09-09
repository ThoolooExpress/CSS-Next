var current_file_obj = fs;

var ls = {
	run: function(args){
		for(var key in current_file_obj){
			console.log(key);
			print(key + "\t");
		}
		print(jsendl)
	}
}

var pwd = {
	run: function(args){
		print(cur_dir + jsendl)
	}
}

var cd = {
	run: function(args){
		
	}
}

register_command("cd", cd);
register_command("pwd", pwd);
register_command("ls", ls);