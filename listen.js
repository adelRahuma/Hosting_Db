const { app } = require("./app.js");
const PORT = process.env.PORT || 9090;
//console.log(app.listen());
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
