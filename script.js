document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const role = document.getElementById("role").value; // Selected role

    // Basic validation
    if (!email || !password || !role) {
        alert("Please fill in all fields.");
        return; // Exit the function if any field is missing
    }

    // Simulated authentication (Replace with actual backend API logic)
    const isAuthenticated = true; // Temporary authentication for demo

    if (isAuthenticated) {
        // Redirect based on the selected role
        switch (role) {
            case "Student":
                window.location.href = "student.html"; // Redirect to student dashboard
                break;
            case "Teacher":
                window.location.href = "teacher.html"; // Redirect to teacher dashboard
                break;
            case "Content Creator":
                window.location.href = "creator.html"; // Redirect to content creator dashboard
                break;
            case "Seller":
                window.location.href = "seller.html"; // Redirect to seller dashboard
                break;
            default:
                alert("Invalid role selected.");
                break; // Handle invalid role
        }
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
