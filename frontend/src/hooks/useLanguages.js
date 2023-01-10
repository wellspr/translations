import { useEffect, useState } from "react";
import { fetchLanguages } from "../api";

const useLanguages = () => {

	const [languages, setLanguages] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const storedLanguages = sessionStorage.getItem("languages");

		if (storedLanguages) {
			setLanguages(JSON.parse(storedLanguages));
		} else {
			fetchLanguages()
				.then(r => {
					setLanguages(r.data);
					sessionStorage.setItem("languages", JSON.stringify(r.data));
				})
				.catch(err => setError(err.response));
		}
	}, []);

	return { languages, error };
};

export default useLanguages;