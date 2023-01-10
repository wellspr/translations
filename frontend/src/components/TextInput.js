const TextInput = ({ 
	text, 
	setText, 
	placeholder,
	className
}) => {

	return <input
		className={`input input__text ${className}`}
        type="text"
		placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
};

export default TextInput;