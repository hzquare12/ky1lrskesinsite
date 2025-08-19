document.addEventListener("DOMContentLoaded", () => {
  const latestBlogsContainer = document.getElementById("latestBlogs");
  
  if (latestBlogsContainer) {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => {
        let latest = data.slice(-3).reverse(); // son 3 blog
        latest.forEach(blog => {
          let card = document.createElement("div");
          card.classList.add("blog-card");
          card.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.desc}</p>
          `;
          latestBlogsContainer.appendChild(card);
        });
      });
  }
});
