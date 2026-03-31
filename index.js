fetch ("https://newsapi.org/v2/everything?q=technology OR startup&sortBy=publishedAt&language=en&apiKey=256f241d6c6240b3b07c2cb87acf088f").then((x)=>{
    return x.json()
}).then((data)=>{
    console.log(data);
    let maincrad = document.getElementById('main')
    
    data.articles.forEach(element => {
    let card = document.createElement("div");
    card.innerHTML = `
      <div style="width:320px; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow:0 2px 12px rgba(0,0,0,0.08); font-family:sans-serif; margin:16px; background:#fff;">
        <img src="${element.urlToImage}" style="width:100%; height:180px; object-fit:cover; display:block;">
        <div style="padding:14px 16px;">
          <p style="font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#888; margin:0 0 6px;">${element.source.name}</p>
          <h3 style="font-size:15px; font-weight:600; color:#111; line-height:1.4; margin:0 0 8px;">${element.title}</h3>
          <p style="font-size:13px; color:#555; line-height:1.6; margin:0 0 12px;">${element.description}</p>
          <a href="${element.url}" target="_blank" style="font-size:12px; color:#0077cc; text-decoration:none; font-weight:500;">Read more →</a>
        </div>
      </div>
    `;
    maincrad.appendChild(card);
});
    // card.innerHTML = `
    //   <div style="width:320px; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow:0 2px 12px rgba(0,0,0,0.08); font-family:sans-serif; margin:16px; background:#fff;">
    //     <img src="${data["articles"][0]["urlToImage"]}" style="width:100%; height:180px; object-fit:cover; display:block;">
    //     <div style="padding:14px 16px;">
    //       <p style="font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#888; margin:0 0 6px;">${data["articles"][0]["source"]["name"]}</p>
    //       <h3 style="font-size:15px; font-weight:600; color:#111; line-height:1.4; margin:0 0 8px;">${data["articles"][0]["title"]}</h3>
    //       <p style="font-size:13px; color:#555; line-height:1.6; margin:0 0 12px;">${data["articles"][0]["description"]}</p>
    //       <a href="${data["articles"][0]["url"]}" target="_blank" style="font-size:12px; color:#0077cc; text-decoration:none; font-weight:500;">Read more →</a>
    //     </div>
    //   </div>
    // `
    maincrad.appendChild(card);
    
})



// api key = 256f241d6c6240b3b07c2cb87acf088f