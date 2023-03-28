const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.get('/:id/printers', getUserPrintersById)
router.get('/:id/printers/:id/materials', getUserPrinterMaterials)
router.post('/', createUser)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)


module.exports = router