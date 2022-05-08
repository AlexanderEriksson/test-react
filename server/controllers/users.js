import Users from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const userdata = await Users.find()
        res.send(userdata)
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async (req, res) => {
    const newUser = new Users(req.body);
    console.log(newUser)
    try {
        await newUser.save()
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
}