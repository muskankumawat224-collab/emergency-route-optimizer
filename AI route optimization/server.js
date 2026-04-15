const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post("/optimize", (req, res) => {
  const { distance, traffic } = req.body;

  let delay = traffic * 3;
  let optimized = distance + delay - 10;

  res.json({
    optimizedTime: optimized,
    message: "Route optimized successfully"
  });
});

app.listen(5000, () => console.log("Server running"));