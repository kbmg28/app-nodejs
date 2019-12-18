const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'GET ok na raiz'})
})


router.post('/', (req, res) => {
    return res.send({message: 'POST ok na raiz'})
})




module.exports = router;