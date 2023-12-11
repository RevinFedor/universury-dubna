import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export function useTheme() {
    // принимает из Provider данные
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme;
        switch (theme) {
            case 'app_light_theme':
                newTheme = 'app_dark_theme';
                break;
            case 'app_dark_theme':
                newTheme = 'app_light_theme';
                break;
            default:
                newTheme = 'app_dark_theme';
        }
        setTheme?.(newTheme);

        //! вешаем шлобально класс, для определения темы, как app, так и мадоалки
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    // переключаем данные и возвращем изменное значение
    return {
        theme: theme || 'app_dark_theme',
        toggleTheme,
    };
}
