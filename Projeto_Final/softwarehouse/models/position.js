"use strict";

module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define("Position", {
		title: DataTypes.STRING,
		salary: DataTypes.FLOAT,
		createdAt: {
			type: DataTypes.DATE,
			field: "created_at",
		},
		updateAt: {
			type: DataTypes.DATE,
			field: "update_at",
		},
	});

	Position.associate = function (models) {
		Position.hasMany(models.Employee, { foreignKey: "positionId" });
	};
};
