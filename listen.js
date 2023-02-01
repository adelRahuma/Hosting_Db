const { app } = require("./app.js");
const { PORT = 9090 } = process.env;
//console.log('Time: %d', Date.now())
app.listen(PORT, () => console.log("Server listening on PORT", PORT));
