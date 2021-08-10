import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage("dark");

	return [darkMode, setDarkMode];
};

export default useDarkMode;
