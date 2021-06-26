module.exports = function (sequelize,dataTypes) {

    let alias = "Brand";

    let cols = {
        id_brand: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "brands",
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models){
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_brand"
        });
    }

    return Brand;

}