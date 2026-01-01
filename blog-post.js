(function () {
  "use strict";

  function formatBlogDate(isoDate) {
    const d = new Date(isoDate);
    if (Number.isNaN(d.getTime())) return String(isoDate);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  }

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  function deriveFallbackId(post) {
    const datePart = post?.date ? String(post.date) : "post";
    const titlePart = post?.title ? slugify(post.title) : "untitled";
    return `${datePart}-${titlePart}`;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("post") || params.get("id") || "";

  const posts = (window.BLOG_POSTS || []).slice();
  const getId = post => post?.id || deriveFallbackId(post);

  const post = posts.find(p => getId(p) === requestedId);

  const titleEl = document.getElementById("post-title");
  const dateEl = document.getElementById("post-date");
  const imgEl = document.getElementById("post-image");
  const mediaLinkEl = document.getElementById("post-media-link");
  const summaryEl = document.getElementById("post-summary");
  const actionsEl = document.getElementById("post-actions");

  if (!titleEl || !dateEl || !imgEl || !summaryEl || !actionsEl) return;

  if (!requestedId || !post) {
    document.title = "Blog post not found | Vakhsha ICT Training";
    titleEl.textContent = "Post not found";
    dateEl.textContent = "";
    imgEl.remove();
    summaryEl.textContent = "This blog link is invalid or the post was removed.";

    const back = document.createElement("a");
    back.className = "btn btn--primary";
    back.href = "index.html#blog";
    back.textContent = "Back to Blog";
    actionsEl.appendChild(back);
    return;
  }

  document.title = `${post.title} | Vakhsha ICT Training`;

  titleEl.textContent = post.title;
  dateEl.textContent = formatBlogDate(post.date);

  imgEl.src = post.coverImage;
  imgEl.alt = post.coverAlt || post.title;

  summaryEl.textContent = post.summary || "";

  const primaryUrl = post.youtubeUrl || post.articleUrl || post.url;
  if (mediaLinkEl) {
    if (primaryUrl) {
      mediaLinkEl.href = primaryUrl;
      mediaLinkEl.target = "_blank";
      mediaLinkEl.rel = "noopener noreferrer";
      mediaLinkEl.setAttribute("aria-label", post.youtubeUrl ? "Watch on YouTube" : "Learn more");
    } else {
      mediaLinkEl.removeAttribute("href");
      mediaLinkEl.removeAttribute("target");
      mediaLinkEl.removeAttribute("rel");
      mediaLinkEl.style.pointerEvents = "none";
    }
  }
  if (primaryUrl) {
    const primary = document.createElement("a");
    primary.className = "btn btn--primary";
    primary.href = primaryUrl;
    primary.target = "_blank";
    primary.rel = "noopener noreferrer";
    primary.textContent = post.youtubeUrl ? "Watch on YouTube" : "Learn more";
    actionsEl.appendChild(primary);
  }
})();
