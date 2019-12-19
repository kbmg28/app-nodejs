const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({message: 'GET ok na raiz'})
})


router.post('/', (req, res) => {
    return res.send({message: 'POST ok na raiz'})
})




module.exports = router;