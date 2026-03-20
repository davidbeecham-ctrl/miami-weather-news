const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Weather API endpoint
app.get('/api/weather', (req, res) => {
    exec('curl -s "wttr.in/Miami?format=%l:+%c+%t+%h+%w+%P"', (error, stdout, stderr) => {
        if (error) {
            console.error('Weather API error:', error);
            return res.status(500).text('Weather data unavailable');
        }
        
        res.type('text/plain');
        res.send(stdout.trim());
    });
});

// News API endpoint (sample data for now)
app.get('/api/news', (req, res) => {
    // In a real implementation, you'd fetch from Miami news RSS feeds or APIs
    const sampleNews = [
        {
            title: "Miami Beach Hosts International Art Fair",
            description: "The annual art fair brings thousands of visitors to South Beach with contemporary exhibitions from around the world.",
            time: "2 hours ago"
        },
        {
            title: "New High-Rise Development Approved in Downtown",
            description: "City council approves plans for mixed-use tower featuring residential and commercial spaces in the urban core.",
            time: "4 hours ago"
        },
        {
            title: "Miami Heat Announces Community Outreach Program", 
            description: "The NBA franchise launches new initiative to support local youth basketball programs across Miami-Dade County.",
            time: "6 hours ago"
        },
        {
            title: "Port of Miami Welcomes Record Cruise Ship",
            description: "The largest passenger vessel ever to dock at PortMiami brings over 6,000 visitors to the city.",
            time: "8 hours ago"
        },
        {
            title: "University of Miami Medical Research Breakthrough",
            description: "Researchers announce promising results in new treatment approach for tropical diseases common in South Florida.",
            time: "12 hours ago"
        }
    ];
    
    res.json(sampleNews);
});

// Login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Default route (redirect to login first)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Main app route (after login)
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Miami Weather & News app running on port ${PORT}`);
    console.log(`Access at: http://localhost:${PORT}`);
});

module.exports = app;