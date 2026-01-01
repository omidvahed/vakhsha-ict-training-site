// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Simple mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const mobileNav = document.getElementById("mobileNav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// Blog posts
// Posts are loaded from isolated files under /blog (e.g. blog/blog-01.js).
// Those files push objects into window.BLOG_POSTS.
window.BLOG_POSTS = window.BLOG_POSTS || [];

const FALLBACK_POSTS = [
  {
    title: "Welcome: How I structure Azure networking labs",
    date: "2025-12-25",
    summary:
      "A quick overview of how I design hands-on labs so teams can apply the skills in production.",
    coverImage: "assets/homepage1.jpg",
    coverAlt: "Azure networking lab overview",
    youtubeUrl: "https://www.youtube.com/@omidvahedv"
  }
];

const BLOG_POSTS = window.BLOG_POSTS.length ? window.BLOG_POSTS : FALLBACK_POSTS;

function formatBlogDate(isoDate) {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return String(isoDate);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function renderBlogPosts() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  const posts = [...BLOG_POSTS].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  grid.innerHTML = "";

  for (const post of posts) {
    const primaryUrl = post.youtubeUrl || post.articleUrl || post.url;
    if (!primaryUrl) continue;

    const primaryLabel = post.youtubeUrl ? "Watch" : "Learn more";

    const article = document.createElement("article");
    article.className = "blog-card";

    const mediaLink = document.createElement("a");
    mediaLink.href = primaryUrl;
    mediaLink.target = "_blank";
    mediaLink.rel = "noopener noreferrer";
    mediaLink.setAttribute("aria-label", `Open link: ${post.title}`);

    const media = document.createElement("div");
    media.className = "blog-card__media";

    const img = document.createElement("img");
    img.src = post.coverImage;
    img.alt = post.coverAlt || post.title;
    media.appendChild(img);
    mediaLink.appendChild(media);

    const body = document.createElement("div");
    body.className = "blog-card__body";

    const meta = document.createElement("div");
    meta.className = "blog-card__meta";
    meta.textContent = formatBlogDate(post.date);

    const title = document.createElement("h3");
    title.textContent = post.title;

    const summary = document.createElement("p");
    summary.textContent = post.summary;

    const actions = document.createElement("div");
    actions.className = "blog-card__actions";

    const action = document.createElement("a");
    action.className = "link";
    action.href = primaryUrl;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
    action.textContent = primaryLabel;

    actions.appendChild(action);
    body.appendChild(meta);
    body.appendChild(title);
    body.appendChild(summary);
    body.appendChild(actions);

    article.appendChild(mediaLink);
    article.appendChild(body);
    grid.appendChild(article);
  }
}

renderBlogPosts();
