#  Tech News 

A simple news aggregator web app built as a college project. It fetches real-time technology and startup news using the NewsAPI and displays them as clean, responsive cards.

---

##Features

- **Live News Feed** — Fetches latest tech and startup news using NewsAPI
- **Category Filters** — Filter news by AI, Crypto, Gadgets, or view All
- **Search** — Instantly search through loaded articles by title or description
- **Read More** — Click any article link to open the full story in a new tab
- **Image Fallback** — Broken images are replaced with a placeholder automatically
- **Responsive Layout** — Cards wrap cleanly on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML | Page structure |
| CSS | Styling and layout |
| JavaScript | Logic, DOM manipulation, API calls |
| NewsAPI | Public news data source |

---

## 📁 Project Structure

```
Tech-News/
├── index.html      # Main HTML file
├── index.css       # Stylesheet
├── index.js        # JavaScript logic
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

1. On page load, `fetch()` calls the NewsAPI with the query `technology OR startup`
2. The response JSON is stored in `allArticles` array
3. `forEach` loop creates a card for each article and appends it to `#main`
4. Filter buttons update the displayed cards by filtering `allArticles` using `.filter()`
5. Search input filters articles in real time by matching title and description

---

## 🔑 API Used

**NewsAPI** — [https://newsapi.org](https://newsapi.org)

- Endpoint: `GET /v2/everything`
- Parameters used: `q`, `sortBy`, `language`, `apiKey`

> Note: The free tier of NewsAPI only works on localhost for development. For production deployment, a paid plan is required.

---

##  How to Run

1. Clone or download this repository
2. Open `index.html` directly in your browser, or use a local server like VS Code Live Server
3. News will load automatically on page open

---

## Concepts Used

- `fetch()` and Promises (`.then()`)
- `forEach` loop for DOM rendering
- `filter()` for category and search filtering
- `createElement` and `innerHTML` for dynamic card creation
- `localStorage` (for upcoming Night Mode feature)
- CSS Flexbox for card layout
- `onerror` attribute for image fallback


