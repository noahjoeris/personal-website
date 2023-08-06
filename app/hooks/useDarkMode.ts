import useLocalStorage from "./useLocalStorage";

function useDarkMode(): [boolean, (value: boolean) => void] {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage<boolean>(
    "darkModeEnabled",
    true
  );

  function changeDarkMode(newValue: boolean): void {
    setDarkModeEnabled(newValue);
    console.log("Hook:" + newValue);
  }

  return [darkModeEnabled, changeDarkMode];
}

export default useDarkMode;
