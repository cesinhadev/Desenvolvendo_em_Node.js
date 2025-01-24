const express = require("express");
const router = express.Router();
const {
	FindAllPosition,
	RegisterPosition,
	UpdatePosition,
	DeletePosition,
} = require("../controllers/position");

router.get("/", FindAllPosition);

router.post("/", RegisterPosition);

router.put("/:id", UpdatePosition);

router.delete("/:id", DeletePosition);
