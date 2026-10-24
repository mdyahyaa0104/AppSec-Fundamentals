require('dotenv').config();

const express = require('express');
const path = require('path');
const open = require('open').default;

const app = express();
const PORT = process.env.PORT
const HOST = process.env.HOST


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Exercise route
app.get('/', express.static(
    path.join(__dirname, '../../public/pages'),
    { index: 'sql-injection.html' }
));


// App Listener, This Segment listens if the app has started and then automatically opens the tab in your default browser
app.listen(PORT, HOST, async () => {
    const url = `http://${HOST}:${PORT}`;

    console.log(`\nApplication lab running at ${url}`);
    console.log('Press Ctrl+C to stop the app.\n');

    try {
        await open(url);
    } catch (error) {
        console.warn('Could not open browser automatically.');
        console.log(`Open the app at ${url} manually.\n`);
        console.log(error);
    }
});