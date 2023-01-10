import { useEffect, useState } from "react";
import { translate } from "../api";
import useDetect from "./useDetect";

const useTranslation = ({ text, fromCode, toCode }) => {

	const [translation, setTranslation] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { detected, detect } = useDetect();

	useEffect(() => console.log(detected), [detected]);
	
	const requestTranslation = () => {
		setLoading(true);
		detect(text);
		translate({ text, fromCode, toCode })
			.then(r => setTranslation(r.data))
			.catch(err => setError(err.response))
			.finally(() => setLoading(false));
	};

	return { translation, requestTranslation, error ,loading };
};

export default useTranslation;
