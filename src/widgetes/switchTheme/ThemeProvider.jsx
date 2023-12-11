import { useState, createContext } from 'react';

const defaultTheme = localStorage.getItem('theme') || 'app_dark_theme';
document.body.className = 'app_dark_theme';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    //! будет обновляться компонент только если менябтся значения, а не чилдрен
    const defaultProps = {
        theme,
        setTheme,
    };

    // все что находиться внутри ThemeProvider - children, будет иметь доступ к defaultProps - фкнциям, которые изменяют тему
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
