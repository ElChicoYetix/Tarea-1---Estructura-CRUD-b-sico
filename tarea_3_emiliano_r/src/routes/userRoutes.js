const { Router } = require('express');
const usersControllers = require('../controllers/userController'); //
const { auth_midd, ridez_midd } = require('../authMiddlewares/authMiddleware'); 

const router = Router();

router.get('', auth_midd, usersControllers.get_users);
router.get('/:id', auth_midd, usersControllers.get_user_id);
router.post('', [auth_midd, ridez_midd], usersControllers.create_user);
router.put('/:id', [auth_midd, ridez_midd], usersControllers.update_user);
router.delete('/:id', [auth_midd, ridez_midd], usersControllers.delete_user);

module.exports = router;
