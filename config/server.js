const express = require('express');
const app = express();
const port = 3000;
const bookingRoute = require('../app/routes/bookingRoutes');
const seatRoute = require('../app/routes/seatRoutes');
const seminarRoute = require('../app/routes/seminarRoutes');
const userRoute = require('../app/routes/userRoutes');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Tugas 2 MCI'));

app.use('/booking', bookingRoute);
app.use('/seat', seatRoute);
app.use('/seminar', seminarRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));