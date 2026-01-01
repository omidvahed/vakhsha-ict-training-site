# Blog posts

This site loads blog posts from individual files in this folder.

## How it works
- Each post is a standalone JS file (e.g. `blog-01.js`).
- The file pushes a post object into `window.BLOG_POSTS`.
- `index.html` includes the post files, then `script.js` renders the Blog section.

## Add a new post (weekly)
1) Copy `blog-template.js` to a new file, e.g. `blog-02.js`
2) Update the fields: `title`, `date`, `summary`, `coverImage`, and one link (`youtubeUrl` or `articleUrl`)
3) Add one new `<script src="blog/blog-02.js"></script>` line in `index.html` above `script.js`

Notes:
- Keeping posts in separate files isolates content from the main code.
- Browsers cannot automatically list local folders, so `index.html` must reference each new post file.
