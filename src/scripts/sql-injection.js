// Consts and Declarations
require('dotenv').config();

const express = require('express');
const path = require('path');
const open = require('open').default;
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const exerciseRoutes = require('../routes/sql-inj-routes.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router Declaration
app.use('/', exerciseRoutes);

// Page Connections
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../public/pages/sql-inj.html')
    );
});


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