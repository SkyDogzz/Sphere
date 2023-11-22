interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

export default function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher">
      <label htmlFor="themeToggle" className="cursor-pointer">
        Toggle Theme
      </label>
      <input type="checkbox" id="themeToggle" onChange={toggleTheme} />
    </div>
  );
}
