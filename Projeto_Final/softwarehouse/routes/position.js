const express = require("express");
const router = express.Router();
const { Position } = require("../models");

router.get("/", async (req, res) => {
	try {
		const positions = await Position.findAll();
		res.json(positions);
	} catch (err) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
});

router.post("/create", async (req, res) => {
	try {
		await Position.create(req.body);
		res.status(201);
	} catch (err) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
});

router.put("/update/:id", async (req, res) => {
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
			throw new Error("Position não encontrada");
		}
	} catch (err) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
});

router.get("/delete/:id", async (req, res) => {
	try {
		const positionDelete = await Position.destroy({
			where: { id: req.params.id },
		});
		if (positionDelete) {
			res.status(204).send;
		} else {
			throw new Error("Position não encontrado");
		}
	} catch (err) {
		res.status(500).json({ mensagem: "Erro de banco de dados" });
	}
});
