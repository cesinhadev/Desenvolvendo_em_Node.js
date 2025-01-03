const jwt = require("jsonwebtoken");

const secret = "SECRET";

function generateToken(userName) {
	const payload = { userName };

	const token = jwt.sign(payload, secret, { expiresIn: "2h" });

	return token;
}

function readToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, decoded) => {
			if (err) reject(err);
			else if (decoded) resolve(decoded);
		});
	});
}

module.exports = { generateToken, readToken };
