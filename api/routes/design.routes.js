const router = require('express').Router()

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById
} = require('../controllers/design.controller')

router.get('/', getAllDesign)
router.post('/', createDesign)
router.put('/:designId', updateDesignById)
router.delete('/:designId', deleteDesignById)








module.exports = router