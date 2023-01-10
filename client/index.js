const path = require("path");
const proxy = require("express-http-proxy");
const express = require("express");
const app = express();
const { apiBaseURL, port } = require("./config");

app.use("/static", express.static(path.join(__dirname, "public", "static")));

app.use("/", (req, res, next) => {

	console.log(req.url);
	
	if (req.url.includes("/api")) {
		return next();
	}
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", (req, res, next) => {
	req.headers = { 
		"Content-Type": "application/json",
		"X-Api-Key": "tFsg3G7A.2kcVQReYcTBHDBaRUKHgEC-ownEYBcvUa"
	}
	next();
}, proxy(apiBaseURL));

app.listen(port, () => { 
	console.log(`Started app, listening on port ${port}`);
	console.log(`Backend server: ${apiBaseURL}`);
});

module.exports = app;