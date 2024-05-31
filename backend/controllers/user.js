const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.register = async (req, res) => {
  const { email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const newUser = await User.create({ email, password: hashedPassword })
    res.status(201).json({
      email: newUser.email,
      createdAt: newUser.createdAt,
      id: newUser._id,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error: ', error })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        email: user.email,
        createdAt: user.createdAt,
        id: user._id,
      })
    } else {
      res.status(400).json({ message: 'Email or password not correct!' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error: ', error })
  }
}
