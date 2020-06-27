
var ls = {
	ls: function() {

	},
};

var echo = {
	run: function(args){
		args.splice(0, 1);
		if(args.length != 0)
		{
			print(args.join(' ')+jsendl);
		}
	},
	help: "echo a command"
}

var help = {
	run: function(args){
		cmd_list.forEach(element => {
			print(element + ": " + commands[element].help + jsendl);
		});
	},
	help: "display this output"
};

register_command("echo", echo);
register_command("help", help);


