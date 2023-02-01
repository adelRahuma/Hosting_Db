const { app } = require("./app.js");
const PORT = process.env.PORT || 3000;
//console.log('Time: %d', Date.now())
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
