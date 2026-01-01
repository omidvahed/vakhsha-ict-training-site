# vakhsha-ict-training-site

Personal website

## Blog

The site is a single page. The Blog section is generated from standalone post files in the `blog/` folder.

To add a new weekly post:

1) Add a cover image under `assets/blog/`
2) Copy `blog/blog-template.js` to a new file (example: `blog/blog-02.js`) and fill in the fields
3) Add one new script tag in `index.html` above `script.js`:
	- `<script src="blog/blog-02.js"></script>`

Each post supports either:
- `youtubeUrl` (watch link)
- `articleUrl` (external article link)


git diff -- "index.html" 
git diff -- "styles.css"     



git add .
git commit -m "Update website content"   
git pull --rebase origin main    
git push 