const {createUser, getUserByEmail, getUserById, getAllUsers, getUserByUsername} = require("../controllers/userControllers");

const createUserHandler = async (req, res) =>{
    const {name, email, username, password, image} = req.body;
    try {
        const response = await createUser(name, email, username, password, image);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getUserHandler = async (req, res) =>{
    const {email, username, id} = req.body;
    
    if (email){
        try {
            const response = await getUserByEmail(email);
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    else if(id){
        try {
            const response = await getUserById(id);
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    else if(username){
        try{
            const response = await getUserByUsername(username)
            res.status(200).json(response);
        } catch(error){
            res.status(400).json({error: error.message});
        }
    }

    else{
        try {
            const response = await getAllUsers();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
  
}

module.exports = {
    createUserHandler,
    getUserHandler
}