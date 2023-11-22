interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

export default function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher flex items-center">
      <label htmlFor="themeToggle" className="cursor-pointer mr-2">
        Toggle Theme
      </label>
      <input type="checkbox" id="themeToggle" onChange={toggleTheme} />
    </div>
  );
}
