const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')
const port = 3001;


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'testpassword',
    database: 'posts'
});

app.get('/get', (req, res) => {
    db.query('SELECT * FROM post', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/post', (req, res)=>{
    const data = req.body;
    db.query('INSERT INTO post(title, content, src, alt, article) VALUES (?, ?, ?, ?, ?)', [data.title, data.content, data.src, data.alt, data.article], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    db.query('DELETE FROM post WHERE id = ?', [id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.put('/put', (req, res)=>{
    const data = req.body;
    db.query('UPDATE post SET title = ?, content = ?, src = ?, alt = ?, article = ? WHERE id = ?', [
        data.title, data.content, data.src, data.alt, data.article, data.id
    ], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})
