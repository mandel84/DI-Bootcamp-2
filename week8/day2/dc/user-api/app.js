const express = require('express');
const app = express();
const userRoutes = require('./server/routes/users');
const sequelize = require('./server/config/database');
const User = require('./server/models/user');
const HashPwd = require('./server/models/hashpwd');

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err)
});


app.use(express.json())

app.use('/api', userRoutes)

app.use((req, res, next) => {
    res.status(404).send('Route not found')
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
