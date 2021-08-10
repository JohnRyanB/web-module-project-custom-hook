import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		} else return initialValue;
	});

	const setValueAndLocalStorage = (newValue) => {
		setValue(newValue);
		localStorage.setItem(key, JSON.stringify(newValue));
	};
	return [value, setValueAndLocalStorage];
};

export default useLocalStorage;
