const express = require('express');
const app = express();


app.get('/', (req,res) => res.send("hello world"));

app.get('/api/v1/ppap', (req,res) => {
    const ppap = [
        {object: 'pen', order:1 },
        {object: 'pinapple', order:2 },
        {object: 'apple', order:3 },
        {object: 'pen', order: 4}
    ];
    res.json(ppap);
})

app.listen(3000, () => console.log('Listening on port 3000'));

