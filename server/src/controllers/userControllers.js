const {User} = require("../db");
const bcrypt = require('bcrypt');

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

const loginUser = async(username, password) =>{
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error('User not found');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    
    if(!passwordValid){
        throw new Error('Invalid password');
    }

    return user;

}


module.exports={
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    getUserByUsername
}