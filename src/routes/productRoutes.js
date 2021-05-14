const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send({
        tittle: "teste",
        itens: req.body
    })
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id : id,  
        itens : req.body
    })
})

router.delete('/:id', (req, res, next) => {
    const id  = req.paramas.id;
    res.status(200).send(req.body)
})

module.exports = router;