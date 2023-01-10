import { useState } from "react";
import useLanguages from "../hooks/useLanguages";

const LanguageInput = ({ 
	setLangCode,
	placeholder,
	label,
	className
}) => {

	const [currentLanguage, setCurrentLanguage] = useState("");
	
	const { languages } = useLanguages();

	const onLanguageChange = (e) => {
		setCurrentLanguage(e.target.value);
		const lang = languages.filter(language => {
			return language.name.toLowerCase() === e.target.value.toLowerCase();
		})[0];
		setLangCode(lang && lang.code);
	};


	return <div className="input_group">
		<label 
			htmlFor="lang_code" 
			className="input__lang__label"
			>
			{ label }
		</label>
		<input
	        id="lang_code"
			className={`input input__lang ${className}`}
			placeholder={placeholder}
	        list="languages"
	        value={currentLanguage}
	        onChange={onLanguageChange}
	    />
	    <datalist id="languages">
			{ 
				languages && languages.map(item => {
					return <option 
						key={item.code} 
						value={item.name} 
						label={item.name} 
					/>;
				})
			}
		</datalist>
	</div>	
};

export default LanguageInput;