const { Employee, Position } = require("../models");

const FindAllEmployee = async (req, res) => {
	try {
		const employees = await Employee.findAll({
			include: [Position],
		});
		res.json(employees);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const RegisterEmployee = async (req, res) => {
	try {
		await Employee.create(req.body);
		res.status(201);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const UpdateEmployee = async (req, res) => {
	try {
		const [employee] = await Employee.update(req.body, {
			where: { id: req.params.id },
		});
		if (employee) {
			const newEmployee = await Employee.findOne({
				where: { id: req.params.id },
			});
			res.json(newEmployee);
		} else {
			throw new Error("Position não encontrado");
		}
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const DeleteEmployee = async (req, res) => {
	try {
		const employeeDeleted = await Employee.destroy({
			where: { id: req.params.id },
		});
		if (employeeDeleted) {
			res.status(204).send;
		} else {
			throw new Error("Position não encontrado");
		}
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

module.exports = {
	FindAllEmployee,
	RegisterEmployee,
	UpdateEmployee,
	DeleteEmployee,
};
