---
layout: page
permalink: /terminal
---
<div id="console"></div>

<script src="/assets/terminal/terminal.js"></script>
<script src="/assets/terminal/programs.js"></script>

<style>
	body{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute!important;
	top: 0;
	left: 0;
	}

	main {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
</style>

<script>
	var fs = {};
</script>

<div id='content_loader' style='display: none;'>

{%- for page in site.pages-%}

<script>
	var title = "{{page.permalink}}";
	if(title != "")
	{
		fs[title] = {
			title: "{{page.title}}",
			type: 'd',
			children: {}
		}
	}
</script>
{%- endfor -%}

</div>

<script src="/assets/terminal/fs.js"></script>

<script>
	document.getElementById('content_loader').innerHTML = "";
</script>