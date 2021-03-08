const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.post('/users/add-user', userController.postAddUser);
router.post('/users/add-test-result', userController.postAddTestResult);
router.get('/users/fetch-all-tests', userController.getAllTests)
router.get('/users/fetch-current-test-progress', userController.getCurrentTestProgress)

// /* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// });

module.exports = router;
