const {User} = require("../db");

const createUser = async(name, email, username, password, image) =>{
    const newUser = await User.create({name, email, username, password, image});

    return newUser;
}

const getAllUsers = async() =>{
    const users = await User.findAll();
    return users;
}

const getUserByEmail = async(email) =>{
    const user = await User.findOne({where: {email: email}});
    return user;
}

const getUserByUsername = async(username) =>{
    const user = await User.findOne({where: {username: username}});
    return user;
}

const getUserById = async(id) =>{
    const user = await User.findOne({where: {id: id}});
    return user;
}


module.exports={
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    getUserByUsername
}