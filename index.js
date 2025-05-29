const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Placeholder list of common tech issues
const issues = [
    {
        id: 1,
        title: "Promethean ActivPanel not connecting to Screenbeam",
        description: "The ActivPanel V9 isn't detecting the Screenbeam wireless display adapter, or the connection is unstable."
    },
    {
        id: 2,
        title: "Lenovo laptop audio not playing through ActivPanel",
        description: "Teacher's Lenovo Windows 11 laptop is connected to the ActivPanel, but sound is coming from the laptop instead of the panel speakers."
    },
    {
        id: 3,
        title: "Student Chromebook can't log in to Google Workspace",
        description: "An Acer Chromebook is showing errors when a student tries to log in to their Google Workspace account (Gmail, Drive, etc.)."
    },
    {
        id: 4,
        title: "Schoology assignment not loading for students",
        description: "Students are reporting that an assignment link or embedded content in Schoology is not loading on their Chromebooks."
    },
    {
        id: 5,
        title: "Outlook email attachments blocked or won't download",
        description: "Teacher is unable to download or open email attachments in Outlook on their Lenovo laptop, possibly due to security settings."
    },
    {
        id: 6,
        title: "Nearpod lesson stuck or unresponsive on ActivPanel",
        description: "A Nearpod lesson being presented on the Promethean ActivPanel becomes unresponsive or frozen for the teacher or students."
    },
    {
        id: 7,
        title: "Cannot share Google Doc/Slide with 'View Only' permissions",
        description: "Teacher is trying to share a Google Workspace file (Doc, Slide) with students or colleagues but is having trouble setting the correct 'View Only' permissions."
    }
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
