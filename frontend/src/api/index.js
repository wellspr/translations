import axios from "axios";

const api = axios.create({
	baseURL: process.env.NODE_ENV==="development" ? "/translations" : "/api/translations"
});

const translate = ({ text, fromCode, toCode }) => {
	return api.post("/translate", {
		text, 
		from_code: fromCode, 
		to_code: toCode
	});
};

const fetchLanguages = () => {
	return api.get("/languages");
};

const detect = (text) => {
	return api.post("/detect", { text });
}

export {
	translate,
	fetchLanguages,
	detect
};
