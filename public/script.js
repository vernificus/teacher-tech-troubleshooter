document.addEventListener('DOMContentLoaded', () => {
    const issuesList = document.getElementById('issues-list');
    const issueDetailsContent = document.getElementById('issue-details-content');

    // Function to display issues
    function displayIssues(issues) {
        issuesList.innerHTML = ''; // Clear current list
        if (issues.length === 0) {
            issuesList.innerHTML = '<li>No issues found.</li>';
            return;
        }
        issues.forEach(issue => {
            const listItem = document.createElement('li');
            listItem.textContent = issue.title;
            listItem.style.cursor = 'pointer'; // Make it look clickable
            listItem.addEventListener('click', () => {
                displayIssueDetails(issue);
            });
            issuesList.appendChild(listItem);
        });
    }

    // Function to display issue details
    function displayIssueDetails(issue) {
        issueDetailsContent.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.description}</p>
        `;
    }

    // Fetch issues from the API
    async function fetchIssues() {
        try {
            const response = await fetch('/api/issues');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const issues = await response.json();
            return issues;
        } catch (error) {
            console.error("Could not fetch issues:", error);
            issuesList.innerHTML = '<li>Error loading issues. Please try again later.</li>';
            return []; // Return empty array on error
        }
    }

    // Initial load
    let allIssues = [];
    fetchIssues().then(issues => {
        allIssues = issues; // Store all fetched issues
        displayIssues(allIssues);
    });

    // Search functionality (will be expanded in the next step)
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredIssues = allIssues.filter(issue => 
            issue.title.toLowerCase().includes(searchTerm) || 
            issue.description.toLowerCase().includes(searchTerm)
        );
        displayIssues(filteredIssues);
        // Clear details if search results change
        if (searchTerm) {
             issueDetailsContent.innerHTML = '<p>Select an issue from the list or search to see details here.</p>';
        } else if (allIssues.length > 0) {
            // Optionally, clear or show details for the first item if search is cleared
             issueDetailsContent.innerHTML = '<p>Select an issue from the list or search to see details here.</p>';
        }

    });
});
