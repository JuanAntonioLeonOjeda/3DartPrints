const User = require('../api/models/user.models')
// const Design = require('../api/models/design.models')
// const Software = require('../api/models/software.models')
// const Printer = require('../api/models/printer.models')
// const UserPrinter = require('../api/models/userprinter.models')
// const Category = require('../api/models/category.models')
// const Material = require('../api/models/material.models')
// const OrderPrints = require('../api/models/orderprints.models')
// const OrderDesign = require('../api/models/orderdesign.models')
// const Order = require('../api/models/order.models')
// const Cart = require('../api/models/cart_models')
// const Favorites = require('../api/models/favorites_models')


function addRelationsToModels() {
    try {

        //Relation between User and Design
        // User.hasMany(Design)
        // Design.belongsTo(User)

        // //table design_category, relation between Category and Design
        // Category.belongsToMany(Design, { through: 'design_category' })
        // Design.belongsToMany(Category, { through: 'design_category' })

        // //table design_software, relation between Software and Design
        // Software.belongsToMany(Design, { through: 'design_software' })
        // Design.belongsToMany(Software, { through: 'design_software' })

        // //table user_printers, relation between User and Printer
        // User.belongsToMany(Printer, { through: UserPrinter })
        // Printer.belongsToMany(User, { through: UserPrinter })

        // //table printer_materials, relation between User, Printer and Material
        // Material.belongsToMany(UserPrinter, { through: 'printer_materials' })
        // UserPrinter.belongsToMany(Material, { through: 'printer_materials' })

        // //relation between User seller, User client, Design, Printer and Material
        // User.hasMany(OrderPrints)
        // Design.hasMany(OrderPrints)
        // Printer.hasOne(OrderPrints)
        // Material.hasOne(OrderPrints)
        // OrderPrints.belongsTo(User, { as: 'seller' })
        // OrderPrints.belongsTo(User, { as: 'client' })
        // OrderPrints.belongsTo(Design)
        // OrderPrints.belongsTo(Printer)
        // OrderPrints.belongsTo(Material)

        // //relation between User seller, User client and Design
        // User.hasMany(OrderDesign)
        // Design.hasMany(OrderDesign)
        // OrderDesign.belongsTo(User, { as: 'seller' })
        // OrderDesign.belongsTo(User, { as: 'client' })
        // OrderDesign.belongsTo(Design)

        // //relation between OrderDesign, OrderPrints and Order
        // User.hasMany(Order)
        // OrderDesign.hasMany(Order)
        // OrderPrints.hasMany(Order)
        // Order.belongsTo(User)
        // Order.belongsTo(OrderDesign)
        // Order.belongsTo(OrderPrints)


        // // Relationships
        // User.hasMany(Cart);
        // Cart.belongsTo(User);

        // Design.hasMany(Cart);
        // Cart.belongsTo(Design);

        // User.hasMany(Favorites);
        // Favorites.belongsTo(User);

        // Design.hasMany(Favorites);
        // Favorites.belongsTo(Design);






        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels