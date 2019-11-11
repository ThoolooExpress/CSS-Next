---
layout: post
title:  "New Blog Post" # This is the title that is displayed to users
# The date you put here will override the filename
# Remember to set this the same as the filename to avoid confusion
date:   2019-11-11 10:43:09 -0500
categories: blog # Don't mess with categories unless you know how Jekyll works
author: Richard Morrill
# Uncomment to attach downloads
# downloads:
#     - file_url: /assets/downloads/example_file.pdf
#       name: Example File
---

<!--
    If using as template, delete everything below this line and add your own content.
-->

<!-- 
    You can add custom html / css as you see fit, but do be careful, it gets
    really annoying to maintain stylesheets when you have 100 authors each
    doing stuff their own way.  Anything that can be done in markdown without
    custom html / css should be done in markdown.  Also, if you need too many
    custom classes, consider adding them to the global stylesheets.
 -->
<style>
    .red-text {
        color: red;
    }
</style>


This is an example of how you can create a new post.  I suggest reviewing both the rendered version of this page and the markdown source code for the full experience.

# Basics #

This site is made by rendering markdown, scss, and html files into a static
set of plain html and css files.  If you want to know how this actually
works, [see the repo](https://fordham-css.github.com/CSS-Next).
This means that your browser's "view source" is actually showing you auto-generated
html code, and if you want to see the real source code, you need to look in `_posts`.

# Front Matter #

If you view the source of this post, you'll see the following block at the beginning of the document:
{%- highlight markdown -%}
---
layout: post
title:  "New Blog Post" # This is the title that is displayed to users
# The date you put here will override the filename
# Remember to set this the same as the filename to avoid confusion
date:   2019-11-11 10:43:09 -0500
categories: blog # Don't mess with categories unless you know how Jekyll works
author: Richard Morrill
# Uncomment to attach downloads
# downloads:
#     - file_url: /assets/downloads/example_file.pdf
#       name: Example File
---
{%- endhighlight -%}

This is called the _front matter_, and can be thought of as metadata for the post / page.
[See the repo](https://fordham-css.github.com/CSS-Next) for further instructions on how to
configure this information, and how to save your post markdown files.

# Regular Text #

If you want to write normal text, simply write it.  Note that markdown will ignore single endlines
so that the code looks pretty when viewed in a non-wrapping text editor, so if you want to start a
new paragraph, skip a line.

Text on
multiple lines
will be rendered
as one,

but not if you skip a line.

{%- highlight markdown -%}
Text on
multiple lines
will be rendered
as one,

but not if you skip a line.
{%- endhighlight -%}

You can make text **bold**, _italic_, and **_bold italic_** easily:

{%- highlight markdown -%}
**bold text**

_italic text_

**_bold italic text_**
{%- endhighlight -%}
# Headers #

Markdown allows you to make headers easily:
{%- highlight markdown -%}
# Header Text #
{%- endhighlight -%}
Note the space between the # and the first character of the header text.

The number of # preceeding the hearder text tells markdown which html 
header tag to use.  If you're confused, stick to h1 if you only have one
level of sections in your post, or h1 and h2 if you have sub-sections

# h1 #
## h2 ##
## h3 ##
### h4 ###
#### h5 ####
##### h5 #####
###### h6 ######
{%- highlight html -%}
# h1 #
## h2 ##
## h3 ##
### h4 ###
#### h5 ####
##### h5 #####
###### h6 ######
{%- endhighlight -%}

## Images ##


Here's an image:

![Fordham Banner](/assets/post_content_img/fordham-banner-2019-11-11.jpg){: .img-fill-width}

Note the blank lines before and after the image.  This causes markdown to put it in its own `<p>` tags, which makes the global stylesheet work much better.

The image was added as follows:
{%- highlight markdown -%}
Preceeding paragraph...

![Fordham Banner](/assets/post_content_img/fordham-banner-2019-11-11.jpg){: .img-fill-width}

Following paragraph...
{%- endhighlight -%}


## Custom HTML / CSS ##


If you need more flexibility than markdown offers, just write html and
in the markdown file, it won't be escaped, and so will render instead of
being shown as code.

If you'd like to modify the attributes of tags that markdown generates,
use the following syntax:

{%- highlight markdown -%}
{: .custom-class }
#Header#


![Some Image](/some/image.jpg){: custom-attribute="something"}

{%- endhighlight -%}

Note that custom attributes go before headings and paragraphs, but after
everything else.  Also, they can be rather glitchy if you're embedding
liquid tags.

{: .red-text}
Here's an example of how you can add your own styles to your posts.

In the source code for this post, you'll see that I defined the following style at the beginning of the
post:
~~~html
<style>
    .red-text {
        color: red;
    }
</style>
~~~

Then, above the post that was colored, I added the following: `{: .red-text}`.  This tells
markdown to add a custom class to the paragraph below.  If you end up needing the same classes
more than a single time, add them to the global stylesheet for easier maintnence.

# Code Blocks #

Of course, because this is a blog for a Computer Science Club,
it supports great syntax highlighting.  There are a few different ways to make
blocks of code.

## Fenced Blocks ##

These offer full code highlighting (coloring) for supported languages.  This is powered
by [rouge](http://rouge.jneen.net/).  If the language you want to use is supported, simply
surround the code by the proper markdown tags:
```
~~~c++
int main(int argc, char** argv) {
    cout << "Hello World!" << endl;
}
~~~
```

Produces:

~~~c++
int main(int argc, char** argv) {
    cout << "Hello World!" << endl;
}
~~~

Note that you can also use liquid tags: {% raw %}```{%- highlight yourlang -%}``` and ```{%- endhighlight -%}``` {% endraw %}.
This is done in some places because the author totally forgot that there's a much easier way to do it and was
too lazy to change everything he'd already written to the easier `~` syntax.  Don't be like Richard, use the
easy syntax.

Also, you can add a code block by indenting by 4 spaces.  This is irritating and confusing
and you shouldn't do it.

## Inline Code ##

You can make inline code like this:

~~~markdown
This is a sentence with `code` in it.
~~~

This is a sentence with `code` in it.

Generally, code blocks are more readable than excessive inline code,
try to use them instead of inline code if you need more than 1 statement.

# Lists #

- Markdown supports lists
- They are pretty easy to use
- Use them like this:

~~~markdown
- Markdown supports lists
- They are pretty easy to use
- Use them like this:
~~~

1. If you use numbers, it'll make an ordered list
67. The actual number doesn't matter, your browser will
    generate the actual numbers.
99. Like this:

~~~markdown
1. If you use numbers, it'll make an ordered list
67. The actual number doesn't matter, your browser will
    generate the actual numbers.
99. Like this:
~~~

# All Done #
Okay, you know what you're doing, go write some great posts.