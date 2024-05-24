const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send('Welcome to the server');
});

require('./connection');

const TaskRoute = require('./routes/TaskRoute');
app.use('/', TaskRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
