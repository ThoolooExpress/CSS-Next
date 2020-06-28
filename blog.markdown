---
layout: page
title: Blog
permalink: /Blog/
---

<ul class="post-list">
{%- for post in site.posts-%}
{%- if post.categories contains "blog" -%}
	<li>
		{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
		<span class="post-meta">{{ post.date | date: date_format }}</span>
		<h3>
			<a class="post-link" href="{{ post.url | relative_url }}">
			
			{{ post.title | escape }}{%- if post.event_date -%}: {{post.event_date | date: date_format}}{%- endif -%}
			</a>
			{%- if post.gcal_link -%}
			<a target="_blank" href="{{post.gcal_link}}" class="gcal-link"><img border="0"
			src="/assets/img/google-calendar.png" style="height:30px;"> Google Calendar</a>
			{%- endif -%}
		</h3>
		{%- if site.show_excerpts -%}
		{{ post.excerpt }}
		{%- endif -%}
	</li>

{%- endif -%}
{%- endfor -%}
</ul>