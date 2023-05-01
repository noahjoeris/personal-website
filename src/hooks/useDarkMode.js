import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkModeEnabled",
    "true"
  );

  function changeDarkMode(newValue) {
    newValue ? setDarkModeEnabled(true) : setDarkModeEnabled(false);
  }

  return [darkModeEnabled, changeDarkMode];
}

export default useDarkMode;
