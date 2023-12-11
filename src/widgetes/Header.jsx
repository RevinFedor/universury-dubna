import { Link } from 'react-router-dom';
import { ThemSwitcher } from './switchTheme/ThemeSwitcher';
import univer from '../assets/univer.jpg';

export const Header = () => {
    return (
        <header className="container py-6 ">
            <div className="flex justify-between items-center relative">
                <div className="">
                    <Link to="/">
                        <img
                            className="w-20 rounded-xl hover:scale-105"
                            src={univer}
                            alt="univer"
                        />
                    </Link>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <ThemSwitcher />
                </div>
                <div className="flex gap-3">
                    <Link to="/">О себе</Link>
                    <Link to="/?scrollTo=myskills">Мои умения</Link>
                    <Link to="/resume">Резюме</Link>
                    <Link to="/myinteresting">Мои интересы</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
            </div>
            <section className="flex flex-col text-center mb-[50px] mt-10">
                <h1 className="text-[24px] font-bold">Веб технологии</h1>
                <h2 className="mt-4">Университет "Дубна"</h2>
            </section>
        </header>
    );
};
