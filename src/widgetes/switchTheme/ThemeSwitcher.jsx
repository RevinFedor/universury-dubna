import { useTheme } from './useTheme';

export const ThemSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="border border-[var(--inverted-bg-color)] "
        >
            {theme === 'app_dark_theme' ? 'Светлая Тема' : 'Темная Тема'}
        </button>
    );
};
