import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="container">
            <div className="flex justify-between">
                <div className="">
                    <Link to="/">Avatar</Link>
                </div>
                <div className="">
                    <span>Тема: </span>
                    Светлая
                </div>
                <div className="">
                    <Link to="/">О себе</Link>
                    <Link to="/myskills">Мои умения</Link>
                    <Link to="/resume">Резюме</Link>
                    <Link to="/myinteresting">Мои интересы</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
            </div>
        </header>
    );
};
