document.getElementById('console').innerHTML = '<div id= "console_output">\n<p id = "out"></p>\n</div>\n<div id="input-div"><span id="prompt"></span><input type="text" autocomplete="off" id="term_input"></div>';

const node = document.getElementById("term_input");

var jsout = document.getElementById('out');
var jsin = document.getElementById('term_input');
var jsendl = "<br/>";

var commands = {}
var cmd_list = []
var hist = []
var hist_ix = 0;

var prompt_text = "bash";
document.getElementById('prompt').innerHTML = '['+ prompt_text + ']$&nbsp;';

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
	cmd_list.push(String(name));
};

node.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
		handle_command(jsin.value);
		hist.splice(0,0,jsin.value);
		hist_ix = 0;
	}
	else if (event.key === 'ArrowUp'){
		console.log('hi')
		jsin.value = hist[hist_ix];
		hist_ix++;
	}
	else if (event.key === 'ArrowDown'){
		jsin.value = hist[hist_ix];
		hist_ix--;
	}
});

function handle_command(command){
	jsout.innerHTML += "["+ prompt_text + "]$ <span class='old_input'>" + command + "</span><br/>";
	
	args = command.split(' ');

	if(args[0] in commands){
		commands[args[0]].run(args);
	}
	else if(args[0] != ""){
		print("bash: " + args[0] + ": command not found<br/>");
	}

	document.getElementById('prompt').innerHTML = "[" + prompt_text + ']$&nbsp;';
	jsin.value = "";
	document.getElementsByTagName('main')[0].scrollTo(0, document.getElementsByTagName('main')[0].scrollHeight);
};


document.getElementById('term_input').focus();
document.getElementById('term_input').select();