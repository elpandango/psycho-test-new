const { Router } = require('express');
const userController = require('../controllers/userController');
const {check, validationResult} = require("express-validator");
const router = Router();

router.post('/users/add-user', userController.postAddUser);
router.post('/users/add-test-result', userController.postAddTestResult);
router.get('/users/fetch-all-user-tests', userController.getAllUserTests)
router.get('/users/fetch-all-tests', userController.getAllTests)
router.get('/users/fetch-current-test-progress', userController.getCurrentTestProgress)

router.post(
  "/users/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ], userController.postLogin);

router.get('/users/login', userController.getLogin);

module.exports = router;
