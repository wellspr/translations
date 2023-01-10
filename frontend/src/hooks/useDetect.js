import { useState } from "react";
import { detect as d } from "../api";

const useDetect = () => {

	const [detected, setDetected] = useState(null);
	const [error, setError] = useState(null);

	const detect = (text) => {
		d(text)
			.then(r => {
				setDetected(r.data[0]);
			})
			.catch(err => {
				setError(err);
			});
	};

	return { detected, detect, error };
};

export default useDetect;