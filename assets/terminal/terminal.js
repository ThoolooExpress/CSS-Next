document.getElementById('console').innerHTML = '<div id= "console_output">\n<p id = "out"></p>\n</div>\n<div id="input-div"><span id="prompt"></span><input type="text" autocomplete="off" id="term_input"></div>';

const node = document.getElementById("term_input");

var jsout = document.getElementById('out');
var jsin = document.getElementById('term_input');
var jsendl = "<br/>";

var commands = {}

var prompt_text = "bash";
document.getElementById('prompt').innerHTML = '['+ prompt_text + ']$ '

function escape_html(str){
	str.replace('<', '&lt;').replace('>','&gt;');
	return str;
};

function print(str){
	jsout.innerHTML += escape_html(str);
};

function register_command(name, func)
{
	commands[name] = func;
};

node.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
		handle_command(jsin.value);
    }
});

function handle_command(command){
	jsout.innerHTML += "["+ prompt_text + "]$ <span class='old_input'>" + command + "</span><br/>";
	
	args = command.split(' ');

	if(args[0] in commands){
		commands[args[0]](args);
	}
	else if(args[0] != ""){
		print("bash: " + args[0] + ": command not found<br/>");
	}

	document.getElementById('prompt').innerHTML = "[" + prompt_text + ']$ ';
	jsin.value = "";
	document.getElementsByTagName('main')[0].scrollTo(0, document.getElementsByTagName('main')[0].scrollHeight);
};


document.getElementById('term_input').focus();
document.getElementById('term_input').select();