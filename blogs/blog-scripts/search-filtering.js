
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

  const match = blogData.find(post =>
    post.title.toLowerCase().includes(input) ||
    post.excerpt.toLowerCase().includes(input)
  );

  if (match) {
    window.location.href = match.url;
  } else {
    showToast("No blog post found for that search.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hide after 3 seconds
}

