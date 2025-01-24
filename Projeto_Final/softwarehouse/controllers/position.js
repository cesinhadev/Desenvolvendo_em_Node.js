const { Position } = require("../models");

const FindAllPosition = async (req, res) => {
	try {
		const positions = await Position.findAll();
		res.json(positions);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const RegisterPosition = async (req, res) => {
	try {
		await Position.create(req.body);
		res.status(201);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const UpdatePosition = async (req, res) => {
	try {
		const [position] = await Position.update(req.body, {
			where: { id: req.params.id },
		});
		if (position) {
			const newPosition = await Position.findOne({
				where: { id: req.params.id },
			});
			res.json(newPosition);
		} else {
			throw new Error("Position não encontrado");
		}
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

const DeletePosition = async (req, res) => {
	try {
		const positionDeleted = await Position.destroy({
			where: { id: req.params.id },
		});
		if (positionDeleted) {
			res.status(204).send;
		} else {
			throw new Error("Position não encontrado");
		}
	} catch (error) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
};

module.exports = {
	FindAllPosition,
	RegisterPosition,
	UpdatePosition,
	DeletePosition,
};
