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

<!-- You can add custom html / css as you see fit, but do be careful, it gets
     really annoying to maintain stylesheets when you have 100 authors each
     doing stuff their own way.  Anything that can be done in markdown without
     custom html should be done in markdown.
 -->
<style>
    .red-text {
        color: red;
    }
</style>
This is an example of how you can create a new post.  Here's the correct way to add an image:

![Fordham Banner](/assets/post_content_img/fordham-banner-2019-11-11.jpg)

Note the blank lines before and after the image.  This causes markdown to put it in its own
`<p>` tags, which makes the global stylesheet work much better.

{: .red-text}
Here's an example of how you can add your own styles to your posts.

In the source code for this post, you'll see that I defined the following style at the beginning of the
post:

    <style>
        .red-text {
            color: red;
        }
    </style>

Then, above the post that was colored, I added the following: `{: .red-text}`.  This tells
markdown to add a custom class to the paragraph below.