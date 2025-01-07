"use strict";

module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define("Employee", {
		name: DataTypes.STRING,
		hireDate: DataTypes.DATE,
		PositionId: {
            type: DataTypes.INTEGER,
            field:"position_id",
        },
	});

	Employee.associate = function (models) {
		Employee.belongsTo(models.Position, { foreignKey: "positionId" });
	};
};
