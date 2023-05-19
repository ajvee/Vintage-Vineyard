const db = require(`../db/dbConfig`)

//index of games
const getAllWines = async () => {
    try {
        const allWines = await db.any('SELECT * FROM wines')
        return allWines;
    } catch (error) {
        return error;
    }
}

//show a game

const getWine = async (id) => {
    try {
        const wine = await db.one('SELECT * FROM wines WHERE id=$1', id)
        return wine
    } catch (error) {
        return error
    }
}

//create/add a wine

const createWine = async (wineToAdd) => {
    try {
        const newWine = await db.one('INSERT INTO wines (wine_name, img, region, grape, vintage, price, rating, notes ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [wineToAdd.wine_name, wineToAdd.img, wineToAdd.region, wineToAdd.grape, wineToAdd.vintage, wineToAdd.price, wineToAdd.rating, wineToAdd.notes])
        return newWine
    } catch (error) {
        return error
    }
}

//delete wine

const deleteWine = async (id) => {
    try {
        const deletedWine = await db.one('DELETE FROM wines WHERE id=$1 RETURNING *', id)
        return deletedWine
    } catch (error) {
        return error
    }
}

//update wine

const updateWine = async (id, wine) => {
    try {
        const updatedWine = await db.one('UPDATE wines SET wine_name=$1, img=$2, region=$3, grape=$4, vintage=$5, price=$6, rating=$7, notes=$8 WHERE id=$9 RETURNING *', [wine.wine_name, wine.img, wine.region, wine.grape, wine.vintage, wine.price, wine.rating, wine.notes, id])
        return updatedWine
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllWines,
    getWine,
    createWine,
    deleteWine,
    updateWine,
}