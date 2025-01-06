const express = require("express");

const app = express();

app.get("/:cep", async (req, res) => {
	const cep = req.params.cep;
	try {
		const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
		const data = await response.json();
		if (data.erro) {
			res.status(400).json({ mensagem: "Um erro foi encontrado." });
		} else {
			res.json({
				endereço: data.logradouro,
				bairro: data.bairro,
				cidade: data.localidade,
				uf: data.uf,
				cep: data.cep,
				ibge: data.ibge,
			});
		}
	} catch (erro) {
		res.status(500).json({ mensagem: "Erro interno no servidor" });
	}
});

app.listen(8000);
