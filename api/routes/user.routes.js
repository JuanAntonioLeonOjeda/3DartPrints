const router = require('express').Router()

const {
    getAllUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    // getUserDesignsById,
    // getUserPrinterMaterials,
    // getUserPrintersById,
    // linkPrinterToUser,
    // uploadDesignByUser,
    // getMyProfile,
    deleteMyUser,
    updateMyUser,
    // deleteDesignByUser,
    // updateDesignByUser,
    // unlinkPrinterToUser,
    // updatePrinterFromUser,
    getUserByUsername
} = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')

router.get('/', getAllUsers)
// router.get('/me', checkAuth, getMyProfile)
router.delete('/me', checkAuth, deleteMyUser)
router.put('/me', checkAuth, updateMyUser)
router.get('/:id/', getUserById)
router.get('/profile/:username', getUserByUsername)
// router.get('/:id/designs', getUserDesignsById)
// router.post('/me/designs', checkAuth, uploadDesignByUser)
// router.put('/me/designs/:id', checkAuth, updateDesignByUser)
// router.delete('/me/designs/:id', checkAuth, deleteDesignByUser)
// router.get('/:id/printers', getUserPrintersById)
// router.post('/me/printers', checkAuth, linkPrinterToUser)
// router.put('/me/printers/:id', checkAuth, updatePrinterFromUser)
// router.delete('/me/printers/:id', checkAuth, unlinkPrinterToUser)
// router.get('/:userid/printers/:printerid/materials', checkAuth, getUserPrinterMaterials)
router.post('/', checkAuth, checkAdmin, createUser)
router.put('/:id', checkAuth, checkAdmin, updateUserById)
router.delete('/:id', checkAuth, checkAdmin, deleteUserById)


module.exports = router