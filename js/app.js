// ============================================================
// JOEDAVIES.IO — APP
// ============================================================

(function () {
  'use strict';

  // --- Routing ---
  const CHANNELS = ['council', 'tech', 'political', 'memes'];
  const CHANNEL_META = {
    council:   { label: 'Council',   icon: '&#9632;', tagline: 'Statements & screenshots from Tuam Street.' },
    tech:      { label: 'Tech',      icon: '&#9678;', tagline: 'Builds, ships, and systems.' },
    political: { label: 'Political', icon: '&#9650;', tagline: 'Thoughts on power, place, and policy.' },
    memes:     { label: 'Memes',     icon: '&#9786;', tagline: 'Posting with intent.' }
  };

  let POSTS = {};

  function getChannel() {
    const hash = window.location.hash.replace('#', '');
    return CHANNELS.includes(hash) ? hash : null;
  }

  // --- Render Navigation ---
  function renderNav(active) {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let html = '<div class="nav-brand-wrap">';
    html += '<button class="nav-brand" id="navBrand"><img src="img/main/portrait2.jpg" alt="jd.io" class="nav-logo"></button>';
    html += '<div class="nav-modal" id="navModal">';
    html += '<a href="#" class="nav-modal-link">Home</a>';
    html += '<div class="nav-modal-socials">';
    html += '<a href="https://www.facebook.com/councillorjoedavies" target="_blank" rel="noopener">Facebook</a>';
    html += '<a href="https://www.instagram.com/pasadena.blanca/" target="_blank" rel="noopener">Instagram</a>';
    html += '<a href="https://www.tiktok.com/@joedaviesio" target="_blank" rel="noopener">TikTok</a>';
    html += '<a href="https://www.youtube.com/channel/UCIOaxt6IOHVMJ5b88PIw3KQ" target="_blank" rel="noopener">YouTube</a>';
    html += '<a href="https://www.inaturalist.org/people/7621498" target="_blank" rel="noopener">iNaturalist</a>';
    html += '<a href="mailto:joedaviesio@protonmail.com">Email</a>';
    html += '</div>';
    html += '<div class="nav-modal-bio">';
    const sparkleHand = '<svg class="sparkle-hand" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.09 3.26L16 6l-2.91.74L12 10l-1.09-3.26L8 6l2.91-.74L12 2z"/><path d="M5 9l.55 1.64L7 11.18l-1.45.37L5 13.18l-.55-1.63L3 11.18l1.45-.37L5 9z"/><path d="M19 9l.55 1.64L21 11.18l-1.45.37L19 13.18l-.55-1.63L17 11.18l1.45-.37L19 9z"/><path d="M12 15c-2.5 0-4 1.5-4 3v2h8v-2c0-1.5-1.5-3-4-3z"/><path d="M9 13.5s1-1 3-1 3 1 3 1"/></svg> ';
    html += '<a href="https://www.ecan.govt.nz" target="_blank" rel="noopener" class="bio-line">' + sparkleHand + 'Canterbury Regional Councillor</a>';
    html += '<a href="https://canterburymaps.govt.nz/" target="_blank" rel="noopener" class="bio-line">' + sparkleHand + 'Orei East Christchurch</a>';
    html += '<a href="https://www.metroinfo.co.nz/" target="_blank" rel="noopener" class="bio-line">' + sparkleHand + 'Public Transport Core Service Lead</a>';
    html += '<a href="https://bowenpublic.com" target="_blank" rel="noopener" class="bio-line">' + sparkleHand + 'Chair Canterbury Regional Council Artificial Intelligence Working Group</a>';
    html += '<a href="https://bowenpublic.com" target="_blank" rel="noopener" class="bio-line">' + sparkleHand + 'bowenpublic.com founder</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<button class="nav-toggle" id="navToggle" aria-label="Menu">&#9776;</button>';
    html += '<div class="nav-links" id="navLinks">';
    CHANNELS.forEach(ch => {
      const cls = ch === active ? 'nav-link active' : 'nav-link';
      const meta = CHANNEL_META[ch];
      const navExternalLinks = { council: 'https://ecan.govt.nz', tech: 'https://bowenpublic.com', memes: 'https://x.com/pasadenablanca' };
      const navHref = navExternalLinks[ch] || `#${ch}`;
      const navTarget = navExternalLinks[ch] ? ' target="_blank" rel="noopener"' : '';
      html += `<a href="${navHref}"${navTarget} class="${cls}"><span class="nav-icon">${meta.icon}</span>${meta.label}</a>`;
    });
    html += '</div>';
    nav.innerHTML = html;

    // Logo modal toggle
    const brand = document.getElementById('navBrand');
    const modal = document.getElementById('navModal');
    brand.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => e.stopPropagation());

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
    html += '</div>';

    html += '<div class="channel-grid">';
    CHANNELS.forEach(ch => {
      const meta = CHANNEL_META[ch];
      const posts = POSTS[ch] || [];
      const latest = posts[0];

      const externalLinks = { council: 'https://ecan.govt.nz', tech: 'https://bowenpublic.com', memes: 'https://x.com/pasadenablanca' };
      const cardHref = externalLinks[ch] || `#${ch}`;
      const cardTarget = externalLinks[ch] ? ' target="_blank" rel="noopener"' : '';
      html += `<a href="${cardHref}"${cardTarget} class="channel-card channel-${ch}">`;
      html += `<div class="channel-card-icon">${meta.icon}</div>`;
      html += `<h2 class="channel-card-title">${meta.label}</h2>`;
      html += `<p class="channel-card-tagline">${meta.tagline}</p>`;
      if (latest) {
        html += `<div class="channel-card-latest">`;
        html += `<span class="latest-date">${latest.date}</span>`;
        html += `<span class="latest-title">${latest.title}</span>`;
        html += `</div>`;
      }
      if (posts.length > 0) {
        html += `<span class="channel-card-count">${posts.length} post${posts.length !== 1 ? 's' : ''}</span>`;
      }
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

        // Video embed
        if (post.video) {
          html += '<div class="post-video">';
          html += `<iframe src="${post.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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

  // --- Init: fetch posts then route ---
  function init() {
    fetch('posts.json')
      .then(r => r.json())
      .then(data => {
        POSTS = data;
        route();
        window.addEventListener('hashchange', route);
      })
      .catch(() => {
        POSTS = {};
        route();
        window.addEventListener('hashchange', route);
      });
  }

  window.addEventListener('DOMContentLoaded', init);

})();
