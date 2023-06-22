const app = require('./holamundo');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`La aplicacion esta corriendo en http://localhost:${port}`));

