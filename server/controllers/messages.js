const express = require('express');
const mongoose = require('mongoose');

import Messages from '../models/user.js';

export const getMessages = (req, res) => {
    try {
        const messagedata = await Messages.find()
        console.log(messagedata)
    } catch (error) {
        console.log(error.message);
    }
}

export const createMessage = (req, res) => {
    const newMessage = new Messages(req.body);
    try {
        await newMessage.save()
        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error)
    }
}