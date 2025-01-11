document.getElementById("search-btn").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value.trim();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // Add functionality to process the search term (e.g., API call)
    } else {
        alert("Please enter a search term.");
    }
});
// Handle Enter key for search input
document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("search-btn").click();
    }
});
const switchAccount = document.getElementById("switch-account");
switchAccount.addEventListener("click", () => {
    alert("Switch Account functionality coming soon!");
    // Add logic to switch accounts dynamically
});
// Example of a modal or redirect instead of alert
const switchAccount = document.getElementById("switch-account");
switchAccount.addEventListener("click", () => {
    // Redirect to login page or show a modal
    window.location.href = "login.html";  // or you can use a modal here for switching accounts
});
