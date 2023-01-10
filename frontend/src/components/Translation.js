// React
import { useEffect, useState } from "react";

// Components
import TextInput from "./TextInput";
import LanguageInput from "./LanguageInput";

// Hooks
import useTranslation from "../hooks/useTranslation";


const Translation = () => {

	const [text, setText] = useState("");
    const [fromCode, setFromCode] = useState("");
    const [toCode, setToCode] = useState("");

	const { translation, requestTranslation, error, loading } = useTranslation({ text, fromCode, toCode });

	// debug
    useEffect(() => {console.log(text, fromCode, toCode)}, [text, fromCode, toCode]);
	useEffect(() => {console.log(error)}, [error]);
	
	return <div className="translation">
        <form 
			onSubmit={(e) => e.preventDefault()}
			className="form"
			>
            <TextInput 
				text={text}
				setText={setText}
				placeholder={"Text to translate"}
			/>

            <div className="translation__lang">
                <LanguageInput 
					setLangCode={setFromCode}
					placeholder={"From"}
					label={"From"}
				/>

				<div>{ loading && "loading..." }</div>

				<LanguageInput 
					setLangCode={setToCode}
					placeholder={"To"}
					label={"To"}
				/>
            </div>

            <button 
				type="button" 
				className="button button__action"
				onClick={requestTranslation}
				>
				Translate
			</button>

			<div className="result">
				{ translation }
			</div>
        </form>
	</div>;
};

export default Translation;