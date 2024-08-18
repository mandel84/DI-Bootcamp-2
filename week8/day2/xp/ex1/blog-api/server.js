const express = require('express');
const sequelize = require('./server/config/database');
const app = express();
const port = 3000;

app.use(express.json())

const postRoutes = require('./server/routes/posts')
app.use('/posts', postRoutes);

app.use((req, res, next) => {
    res.status(404).send('Route not found')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
})

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}).catch(err => {
    console.error('Unable to connect to the database:', err)
})
