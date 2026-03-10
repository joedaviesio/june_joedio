// ============================================================
// JOEDAVIES.IO — APP
// ============================================================

(function () {
  'use strict';

  // --- Routing ---
  const CHANNELS = ['council', 'tech', 'political', 'memes'];
  const CHANNEL_META = {
    council:   { label: 'Council',   icon: '&#9678;', tagline: 'Statements & screenshots from the table.' },
    tech:      { label: 'Tech',      icon: '&#9632;', tagline: 'Builds, ships, and systems.' },
    political: { label: 'Political', icon: '&#9650;', tagline: 'Thoughts on power, place, and policy.' },
    memes:     { label: 'Memes',     icon: '&#9786;', tagline: 'Shitposting with intent.' }
  };

  function getChannel() {
    const hash = window.location.hash.replace('#', '');
    return CHANNELS.includes(hash) ? hash : null;
  }

  // --- Render Navigation ---
  function renderNav(active) {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let html = '<a href="#" class="nav-brand">jd.io</a>';
    html += '<button class="nav-toggle" id="navToggle" aria-label="Menu">&#9776;</button>';
    html += '<div class="nav-links" id="navLinks">';
    CHANNELS.forEach(ch => {
      const cls = ch === active ? 'nav-link active' : 'nav-link';
      const meta = CHANNEL_META[ch];
      html += `<a href="#${ch}" class="${cls}"><span class="nav-icon">${meta.icon}</span>${meta.label}</a>`;
    });
    html += '</div>';
    nav.innerHTML = html;

    // Mobile toggle
    document.getElementById('navToggle').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
  }

  // --- Render Landing ---
  function renderLanding() {
    const main = document.getElementById('main');

    let html = '<div class="landing">';
    html += '<div class="landing-header">';
    html += '<h1 class="landing-title">joe<span class="accent">davies</span>.io</h1>';
    html += '<p class="landing-sub">Regional Councillor and Founder</p>';
    html += '</div>';

    html += '<div class="channel-grid">';
    CHANNELS.forEach(ch => {
      const meta = CHANNEL_META[ch];
      const posts = POSTS[ch] || [];
      const latest = posts[0];

      html += `<a href="#${ch}" class="channel-card channel-${ch}">`;
      html += `<div class="channel-card-icon">${meta.icon}</div>`;
      html += `<h2 class="channel-card-title">${meta.label}</h2>`;
      html += `<p class="channel-card-tagline">${meta.tagline}</p>`;
      if (latest) {
        html += `<div class="channel-card-latest">`;
        html += `<span class="latest-date">${latest.date}</span>`;
        html += `<span class="latest-title">${latest.title}</span>`;
        html += `</div>`;
      }
      html += `<span class="channel-card-count">${posts.length} post${posts.length !== 1 ? 's' : ''}</span>`;
      html += '</a>';
    });
    html += '</div>';

    // Socials bar
    html += '<div class="socials-bar">';
    html += '<a href="https://www.youtube.com/channel/UCIOaxt6IOHVMJ5b88PIw3KQ" target="_blank" rel="noopener">YouTube</a>';
    html += '<a href="https://www.inaturalist.org/people/7621498" target="_blank" rel="noopener">iNaturalist</a>';
    html += '<a href="https://www.instagram.com/pasadena.blanca/" target="_blank" rel="noopener">Instagram</a>';
    html += '<a href="https://www.tiktok.com/@joedaviesio" target="_blank" rel="noopener">TikTok</a>';
    html += '<a href="https://www.facebook.com/councillorjoedavies" target="_blank" rel="noopener">Facebook</a>';
    html += '</div>';

    html += '<div class="landing-contact">';
    html += '<a href="mailto:joedaviesio@protonmail.com">joedaviesio@protonmail.com</a>';
    html += '</div>';

    html += '</div>';

    main.innerHTML = html;
  }

  // --- Render Feed ---
  function renderFeed(channel) {
    const main = document.getElementById('main');
    const meta = CHANNEL_META[channel];
    const posts = POSTS[channel] || [];

    let html = `<div class="feed feed-${channel}">`;

    // Feed header
    html += '<div class="feed-header">';
    html += `<div class="feed-icon">${meta.icon}</div>`;
    html += `<div class="feed-header-text">`;
    html += `<h1 class="feed-title">${meta.label}</h1>`;
    html += `<p class="feed-tagline">${meta.tagline}</p>`;
    html += '</div>';
    html += '</div>';

    // Posts
    if (posts.length === 0) {
      html += '<div class="post-card empty">Nothing here yet.</div>';
    } else {
      posts.forEach((post, i) => {
        html += `<article class="post-card" style="animation-delay: ${i * 0.06}s">`;
        html += `<div class="post-date">${post.date}</div>`;
        if (post.title) {
          html += `<h2 class="post-title">${post.title}</h2>`;
        }
        if (post.body) {
          html += `<div class="post-body">${post.body}</div>`;
        }

        // Images
        if (post.images && post.images.length > 0) {
          html += '<div class="post-images">';
          post.images.forEach(src => {
            html += `<img class="post-img" src="${src}" alt="" loading="lazy">`;
          });
          html += '</div>';
        }

        // Link
        if (post.link) {
          html += `<a class="post-link" href="${post.link.url}" target="_blank" rel="noopener">${post.link.label} &rarr;</a>`;
        }

        html += '</article>';
      });
    }

    html += '</div>';
    main.innerHTML = html;

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // --- Router ---
  function route() {
    const channel = getChannel();
    renderNav(channel);
    if (channel) {
      renderFeed(channel);
    } else {
      renderLanding();
    }
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);

})();
