const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById, linkPrinterToUser, uploadDesignByUser, getMyProfile
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/me', getMyProfile)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.post('/:id/designs', uploadDesignByUser);
router.get('/:id/printers', getUserPrintersById)
router.post('/:id/printers/:id', linkPrinterToUser);
router.get('/:id/printers/:id/materials', getUserPrinterMaterials)
router.post('/', createUser)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)


module.exports = router