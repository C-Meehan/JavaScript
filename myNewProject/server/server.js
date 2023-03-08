const express = require("express");
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');
require('./routes/person.routes')(app);

// The other version of the above require routes line
// const personRoutes = require('./routes/person.routes');
// personRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));