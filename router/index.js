const express = require('express')
const router = express.Router()
const con = require('../controllers/myControllers')

router.get('/', con.defultcon);
router.post('/add', con.addcon);
router.get('/createvol', con.createcon);
router.get('/edit/:id', con.editcon);
router.post('/update/:id', con.updatecon);
router.get('/delete/:id', con.deletecon);


module.exports = router;