const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

/* GET users listing. */
// router.get('/users', function (req, res, next) {
//   res.json(users)
// });

router.post('/users/add-user', userController.postAddUser);
router.post('/users/add-test-result', userController.postAddTestResult);

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
