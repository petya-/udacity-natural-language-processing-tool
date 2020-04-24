const app = require("./server.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server is running on http://127.0.0.1:${port}`);
});
