const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Placeholder list of common tech issues
const issues = [
    { id: 1, title: "Projector not turning on", description: "The projector does not power on when the button is pressed." },
    { id: 2, title: "Cannot connect to Wi-Fi", description: "Wireless network is not visible or connection fails." },
    { id: 3, title: "Audio not working from computer", description: "No sound is coming from the computer's speakers or connected audio devices." },
    { id: 4, title: "Smartboard not responsive", description: "The smartboard touch input is not working or is inaccurate." },
    { id: 5, title: "Forgotten password for educational app", description: "Unable to log in to a specific educational application due to a forgotten password." }
];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get the list of issues
app.get('/api/issues', (req, res) => {
    res.json(issues);
});

// Basic route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
