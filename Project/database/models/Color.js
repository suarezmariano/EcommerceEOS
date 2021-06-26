module.exports = function (sequelize,dataTypes) {

    let alias = "Color";

    let cols = {
        id_color: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "colors",
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.belongsToMany(models.Product, {
            as: "products",
            through: "stock",
            foreignKey: "id_color",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return Color;

}