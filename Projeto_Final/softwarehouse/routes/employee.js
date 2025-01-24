const express = require("express");
const router = express.Router();
const {
	FindAllEmployee,
	RegisterEmployee,
	UpdateEmployee,
	DeleteEmployee,
} = require("../controllers/employee");

router.get("/", FindAllEmployee);

router.post("/", RegisterEmployee);

router.put("/:id", UpdateEmployee);

router.delete("/:id", DeleteEmployee);
