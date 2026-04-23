const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Azure!" });
});

app.listen(process.env.PORT || 3000);
