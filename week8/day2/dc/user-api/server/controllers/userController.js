const bcrypt = require('bcrypt');
const User = require('../models/user');
const HashPwd = require('../models/hashpwd');
const sequelize = require('../config/database');

exports.registerUser = async (req, res) => {
    const { email, username, first_name, last_name, password } = req.body;

    const transaction = await sequelize.transaction();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email, username, first_name, last_name,
        }, { transaction })

        await HashPwd.create({
            username,
            password: hashedPassword,
        }, { transaction })

        await transaction.commit()

        res.status(201).json(newUser)
    } catch (error) {
        await transaction.rollback()
        res.status(500).json({ error: 'Failed to register user' })
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const hashPwd = await HashPwd.findOne({ where: { username } })

        if (!hashPwd) {
            return res.status(404).json({ error: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, hashPwd.password)

        if (isMatch) {
            res.status(200).json({ message: 'Login successful' })
        } else {
            res.status(401).json({ error: 'Invalid password' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' })
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' })
    }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId)

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' })
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id
    const { email, first_name, last_name } = req.body

    try {
        const [updated] = await User.update({
            email, first_name, last_name,
        }, {
            where: { id: userId },
        });

        if (updated) {
            const updatedUser = await User.findByPk(userId)
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' })
    }
};
