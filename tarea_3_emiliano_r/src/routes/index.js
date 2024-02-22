const router = require('express').Router();
const authRouter = require('./main');
const usersRouter = require('./userRoutes'); // 

router.use('/main', authRouter);
router.use('/userRoutes', usersRouter); //

module.exports = router;
