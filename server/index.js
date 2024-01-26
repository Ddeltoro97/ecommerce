const server = require("./src/app")
const {conn} = require("./src/db")


const PORT = 3001;

server.listen(PORT, ()=>{
    conn.sync({force: true});
    console.log(`Server listening on port ${PORT}`)
});