"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Employees", [
			{
				name: "Alex",
				position_id: 2,
				hire_date: new Date("2021-02-01"),
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "Lucas",
				position_id: 1,
				hire_date: new Date("2020-05-01"),
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "Julia",
				position_id: 2,
				hire_date: new Date("2022-05-08"),
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
