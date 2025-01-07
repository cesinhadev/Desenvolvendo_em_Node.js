"use strict";

module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define("Position", {
		title: DataTypes.STRING,
		salary: DataTypes.FLOAT,
	});

	Position.associate = function (models) {
		Position.hasMany(models.Employee, { foreignKey: "positionId" });
	};
};
