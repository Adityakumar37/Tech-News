const API_KEY = '256f241d6c6240b3b07c2cb87acf088f';

const QUERIES = {
  all:     'technology OR startup OR AI OR gadgets',
  ai:      'artificial intelligence OR ChatGPT OR LLM',
  crypto:  'bitcoin OR ethereum OR crypto OR blockchain',
  gadgets: 'smartphone OR laptop OR apple OR samsung'
};

function fetchNews(category = 'all') {
  const q = encodeURIComponent(QUERIES[category]);
  const url = `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

  fetch(url)
    .then(x => x.json())
    .then(data => {
      const main = document.getElementById('main');
      main.innerHTML = '';

      data.articles.forEach(article => {
        const card = document.createElement('div');
        card.innerHTML = `
          <div style="width:320px; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow:0 2px 12px rgba(0,0,0,0.08); font-family:sans-serif; margin:16px; background:#fff;">
            <img
              src="${article.urlToImage || 'https://placehold.co/320x180?text=No+Image'}"
              onerror="this.src='https://placehold.co/320x180?text=No+Image'"
              style="width:100%; height:180px; object-fit:cover; display:block;"
            >
            <div style="padding:14px 16px;">
              <p style="font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#888; margin:0 0 6px;">${article.source.name}</p>
              <h3 style="font-size:15px; font-weight:600; color:#111; line-height:1.4; margin:0 0 8px;">${article.title}</h3>
              <p style="font-size:13px; color:#555; line-height:1.6; margin:0 0 12px;">${article.description || 'No description available.'}</p>
              <a href="${article.url}" target="_blank" style="font-size:12px; color:#0077cc; text-decoration:none; font-weight:500;">Read more →</a>
            </div>
          </div>
        `;
        main.appendChild(card);
      });
    });
}

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    fetchNews(btn.dataset.cat);
  });
});

document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.trim();
  if (q.length > 2) {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
    fetch(url)
      .then(x => x.json())
      .then(data => {
        const main = document.getElementById('main');
        main.innerHTML = '';
        data.articles.forEach(article => {
          const card = document.createElement('div');
          card.innerHTML = `
            <div style="width:320px; ...">...</div>
          `;
          main.appendChild(card);
        });
      });
  } else if (q.length === 0) {
    fetchNews();
  }
});

fetchNews();