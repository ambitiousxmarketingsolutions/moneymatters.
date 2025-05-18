
let blogData = [];

window.onload = function () {
  fetch('blog-data.json')
    .then(response => response.json())
    .then(data => {
      blogData = data;
    });
};

function searchAndRedirect() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!input) return;

  // Find first matching blog
  const match = blogData.find(post =>
    post.title.toLowerCase().includes(input) ||
    post.excerpt.toLowerCase().includes(input)
  );

  if (match) {
    window.location.href = match.url;
  } else {
    alert("No blog post found for that search.");
  }
}


