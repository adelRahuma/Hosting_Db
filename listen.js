const { app } = require("./app.js");
const PORT = process.env.PORT || 9090;
//console.log(app.listen());
app.listen(PORT);
console.log(`Listening on ${PORT}...`);
