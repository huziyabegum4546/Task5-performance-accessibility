const searchInput = document.getElementById("searchInput");
const blogPosts = document.querySelectorAll(".blog-card");
const noResults = document.getElementById("noResults");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        let visiblePosts = 0;

        blogPosts.forEach(function (post) {
            const title = post.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchValue)) {
                post.style.display = "block";
                visiblePosts++;
            } else {
                post.style.display = "none";
            }
        });

        if (visiblePosts === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }
    });
}