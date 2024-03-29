// Dependencies
const express = require('express');
const router = express.Router();
const otp = require('../api/otp');

router.get('/', (req, res) => {res.render('index')})

router.post('/cipher',  (req, res) => {
    const cipheredObj = otp.Cipher(req.body.text);

    if(cipheredObj)
    {
        res.status(200).json(cipheredObj);
    } 
    else
    {
        res.status(500).json({error: 'Something went wrong, please \'Reset\' and try again'}); 
    }
        
})

router.post('/decipher', (req, res) => {
    const decipheredObj = otp.Decipher(req.body.text, req.body.key);
    if(decipheredObj)
        res.status(200).json(decipheredObj);
    else
        res.status(500).json({error: 'Something went wrong, please \'Reset\' and try again'});
})

module.exports = router;