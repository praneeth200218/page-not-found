localStorage.setItem("roles", JSON.stringify(["student", "teacher", "seller"]));
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const roles = JSON.parse(localStorage.getItem("roles"));

    if (!email || !password || !roles) {
        alert("Please fill in all fields and ensure roles are assigned.");
        return;
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
        redirectToDashboard(roles[0]);
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});
const roles = JSON.parse(localStorage.getItem("roles"));
if (!roles || roles.length === 0) {
    alert("No roles assigned. Please sign up and assign roles.");
    return;
}
function redirectToDashboard(role) {
    switch (role) {
        case "student":
            window.location.href = "student.html";
            break;
        case "teacher":
            window.location.href = "teacher.html";
            break;
        case "content-creator":
            window.location.href = "creator.html";
            break;
        case "seller":
            window.location.href = "seller.html";
            break;
        default:
            alert("Invalid role selected.");
    }
}
function switchAccount() {
    const roles = JSON.parse(localStorage.getItem("roles"));
    if (!roles || roles.length === 0) {
        alert("No roles found to switch.");
        return;
    }

    const roleListHTML = roles
        .map((role) => `<li><button onclick="redirectToDashboard('${role}')">${capitalize(role)}</button></li>`)
        .join("");

    const modalHTML = `
        <div id="role-modal" class="modal">
            <div class="modal-content">
                <h2>Switch Account</h2>
                <ul>${roleListHTML}</ul>
                <button onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
