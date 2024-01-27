const server = require("./src/app")
const {conn} = require("./src/db")
const {fetchInfo} = require("./src/utils")

const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
      fetchInfo();
    });
  })
  .catch((error) => console.error(error));