const app = require("./server.js");

app.listen(port, () => {
  console.info(`Server is running on http://127.0.0.1:${port}`);
});
