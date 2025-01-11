// Content for each role
const roleContent = {
    student: `
        <section>
            <h2>Recent Projects</h2>
            <div>Project 1: Science Research</div>
            <div>Project 2: Mathematics Exercises</div>
        </section>
        <section>
            <h2>Upcoming Assignments</h2>
            <div>Assignment 1: Complete History Report</div>
            <div>Assignment 2: Math Homework Due Tomorrow</div>
        </section>
    `,
    teacher: `
        <section>
            <h2>Upcoming Classes</h2>
            <div>Class 1: History - 10:00 AM</div>
            <div>Class 2: Mathematics - 1:00 PM</div>
        </section>
        <section>
            <h2>Assigned Homework</h2>
            <div>Homework 1: Review Class Notes</div>
            <div>Homework 2: Prepare for Test</div>
        </section>
    `,
    creator: `
        <section>
            <h2>Uploaded Content</h2>
            <div>Video 1: Understanding Algebra</div>
            <div>Video 2: History of Ancient Greece</div>
        </section>
        <section>
            <h2>Content Analytics</h2>
            <div>Total Views: 1200</div>
            <div>Total Earnings: $150</div>
        </section>
    `,
    seller: `
        <section>
            <h2>Products Available</h2>
            <div>Product 1: Stationery Kit</div>
            <div>Product 2: Graphing Calculator</div>
        </section>
        <section>
            <h2>Sales & Orders</h2>
            <div>Order 1: 10 Notebooks</div>
            <div>Order 2: 5 Calculators</div>
        </section>
    `
};

// Switch Role Function
function switchRole(role) {
    const content = roleContent[role];
    if (content) {
        document.getElementById('role-content').innerHTML = content;
    } else {
        document.getElementById('role-content').innerHTML = '<p>Invalid role selected.</p>';
    }
}

// Set default role on page load
window.onload = () => {
    switchRole('student');
};
