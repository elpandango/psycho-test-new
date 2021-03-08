const User = require('../models/users')

exports.postAddUser = async (req, res, next) => {
  const name = req.body.user.name
  const age = req.body.user.age
  const sex = req.body.user.sex
  const education = req.body.user.education

  const user = new User(name, age, sex, education)
  const userId = await user.addNewUser()
  res.json(userId.name)
}

exports.postAddTestResult = async (req, res, next) => {
  const result = await User.addTestResult(req.body.type, req.body.userId, req.body.data)
  res.json('success')
}

exports.getAllTests = async (req, res, next) => {
  const result = await User.fetchAllTests(req.query.user)
  res.json({ data: result })
}

exports.getCurrentTestProgress = async (req, res, next) => {
  console.log(req.query.user, req.query.testName)
  const result = await User.fetchCurrentTestProgress(req.query.user, req.query.testName)
  res.json({ data: result })
}
