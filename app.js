const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

//opening the database
let db = new sqlite3.Database('engines.db', sqlite3.OPEN_READWRITE, (err) => {
//if an error occurs
 if (err) {
    return console.error(err.message);
    }
console.log('Connected to engines database.')
});

//middleware
app.use(express.json());
app.use(cors());

//access via html file
app.use(express.static('public'));


//GET all engines
app.get('/engines', (req, res) => {
    db.all('SELECT id, name, manufactureDate FROM engines', (err, rows) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(rows);
        
    });
});

//PUT for date updated by id
app.put('/engines/:id', (req, res) => {
    const newEngineId = req.params.id;
    const updatedManufactureDate = req.body.manufactureDate;
    
    db.run('UPDATE engines SET manufactureDate = ? WHERE id = ?', [updatedManufactureDate, newEngineId], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Check rows after update
        if (this.changes === 0) {
            return res.status(404).json({ message: 'Not found' });
        }

        res.json({ message: "Update successful" });
    });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//close the database
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
    }
    console.log('Closed database.');
    process.exit(0);
  });
});