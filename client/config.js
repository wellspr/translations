const port = process.env.PORT;

/** Production */
if (process.env.DETA_RUNTIME || process.env.ENV==="production") {
	apiBaseURL = process.env.PRODUCTION_API;
}

/** Development */
if (process.env.ENV === "development") {
	apiBaseURL = process.env.DEVELOPMENT_API;
}

module.exports = { apiBaseURL, port };
