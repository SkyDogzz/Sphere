import Switch from 'react-switch';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function ThemeSwitcher({ toggleTheme, isDarkMode }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher flex items-center">
      <label htmlFor="themeToggle" className="cursor-pointer mr-2">
        Toggle Theme
      </label>
      <Switch
        onChange={toggleTheme}
        checked={isDarkMode}
        id="themeToggle"
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={24}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={16}
        width={40}
      />
    </div>
  );
}