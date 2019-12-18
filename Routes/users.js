const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'GET ok em users'})
})


router.post('/', (req, res) => {
    return res.send({message: 'POST ok em users'})
})

router.post('/create', (req, res) => {
    return res.send({message: 'Usuario criado'})
})






module.exports = router;