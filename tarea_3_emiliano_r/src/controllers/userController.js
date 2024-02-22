const User = require('../models/model'); 

const get_users = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(400).send("Error-users");
    }
};

const get_user_id = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const create_user = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
        });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const update_user = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const delete_user = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send("Deleted user: " + user);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    get_users,
    get_user_id,
    create_user,
    update_user,
    delete_user
};
