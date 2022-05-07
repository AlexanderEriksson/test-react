const express = require('express');
const mongoose = require('mongoose');

import Users from '../models/user.js';

export const getUsers = (req, res) => {
    try {
        const userdata = await Users.find()
        console.log(userdata)
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (req, res) => {
    const newUser = new Users(req.body);
    try {
        await newUser.save()
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
}