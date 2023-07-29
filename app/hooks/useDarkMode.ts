import useLocalStorage from "./useLocalStorage";

function useDarkMode(): [boolean, (value: boolean) => void] {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage<boolean>(
    "darkModeEnabled",
    true
  );

  function changeDarkMode(newValue: boolean): void {
    newValue ? setDarkModeEnabled(true) : setDarkModeEnabled(false);
  }

  return [darkModeEnabled, changeDarkMode];
}

export default useDarkMode;
