module.exports = function (sequelize,dataTypes) {

    let alias = "Order";

    let cols = {
        id_order: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: dataTypes.INTEGER(11)
        },
        date: {
            type: dataTypes.DATE
        },
        total: {
            type: dataTypes.INTEGER(11)
        },
        shipping_info: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "orders",
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);

    
    Order.associate = function (models) {
        Order.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "id_cart",
        })

    }

    return Order;

}