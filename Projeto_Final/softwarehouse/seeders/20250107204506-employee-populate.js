'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", [{
      name:"Gabriel",
      position_id: 2,
      hire_date: new Date("2010-02-20"),
      created_at: new Date(),
			updated_at: new Date(), 
    },{
      name:"Lucas",
      position_id: 1,
      hire_date: new Date("2005-02-20"),
      created_at: new Date(),
			updated_at: new Date(), 
    },
    {
      name:"Gabriel",
      position_id: 2,
      hire_date: new Date("2010-03-05"),
      created_at: new Date(),
			updated_at: new Date(), 
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
