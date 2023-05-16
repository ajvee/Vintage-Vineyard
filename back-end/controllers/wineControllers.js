const express = require('express');
const wines = express.Router();
const { getAllWines, getWine, createWine, deleteWine, updateWine } = require('../queries/wines')
// const reviewsContoller = require('./reviewsController');
// games.use('/:gameId/reviews', reviewsContoller);

wines.get('/', async (req,res) => {
     const allWines = await getAllWines();

     if (allWines) {
        res.status(202).json(allWines);
     } else {
        res.status(500).json({ error: 'Server Error' })
     }
});

wines.get('/:id', async (req,res) => {
    const { id } = req.params;
    const wine = await getWine(id)

    if (wine) {
        res.status(200).json(wine);
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route 
wines.post('/', async (req, res) => {
    const newWine = req.body;
    try {
        const addedWine =  await createWine(newWine)
        res.status(202).json(addedWine)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// delete route

wines.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedWine = await deleteWine(id);
        res.status(200).json(deletedWine)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

//update route 
wines.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
       const updatedWine = await updateWine(id, body);
       res.status(200).json(updatedWine);
    } catch (error) {
        res.status(400).json({ error: error});
    };
});


module.exports = wines;