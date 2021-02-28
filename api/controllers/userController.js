const User = require("../models/users");

exports.postAddUser = async(req, res, next) => {
  const name = req.body.user.name;
  const age = req.body.user.age;
  const sex = req.body.user.sex;
  const education = req.body.user.education;

  const user = new User(name, age, sex, education);
  const userId = await user.addNewUser();
  res.json(userId.name);
};

// exports.postAddTestResult = async(req, res, next) => {
//   const result = await User.addTestResult(req.body.userId, req.body.type, req.body.data);
//   res.json('success');
// };

