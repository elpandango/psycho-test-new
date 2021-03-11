const User = require('../models/users')
const Test = require('../models/tests')
const { check, validationResult } = require('express-validator')

exports.postLogin = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.json({
      errors: errors.array()
    })
  }

  const { email, password } = req.body

  try {
    const isAdmin = await User.getAdminData({
      email,
      password
    })

    if (!isAdmin) {
      return res.status(200).json({
        errors: [{
          msg: 'Incorrect Password of Email!'
        }]
      })
    }

    req.session.isLoggedIn = true

    res.status(200).json({
      success: [{
        msg: 'You have successfully logged in!'
      }]
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      message: 'Server Error'
    })
  }
}

exports.getLogin = async (req, res, next) => {
  if (req.session.isLoggedIn) {
    res.status(200).json('You are logged in');
  } else {
    res.status(500).json('You are not logged in');
  }
};

exports.postAddUser = async (req, res, next) => {
  const name = req.body.user.name
  const age = req.body.user.age
  const sex = req.body.user.sex
  const email = req.body.user.email

  const user = new User(name, age, sex, email)
  const userId = await user.addNewUser()
  res.json(userId.name)
}

exports.postAddTestResult = async (req, res, next) => {
  const result = await Test.addTestResult(req.body.type, req.body.userId, req.body.data)
  res.json({ data: result })
}

exports.getAllUserTests = async (req, res, next) => {
  const result = await Test.fetchAllUserTests(req.query.user)
  res.json({ data: result })

}

exports.getAllTests = async (req, res, next) => {
  const result = await Test.fetchAllTests(req.query.user)
  res.json({ data: result })
}

exports.getCurrentTestProgress = async (req, res, next) => {
  console.log(req.query.user, req.query.testName)
  const result = await Test.fetchCurrentTestProgress(req.query.user, req.query.testName)
  res.json({ data: result })
}
