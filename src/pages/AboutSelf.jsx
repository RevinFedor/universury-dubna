import ImageName from '../assets/titov.png';
import figma from '../assets/figma.jpeg';
import cssImage from '../assets/css.jpg';
import htmlImage from '../assets/html.png';
import photoshopImage from '../assets/photoshop.jpg';
import wordpressImage from '../assets/wordpress.png';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const AboutSelf = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Проверка параметра маршрута "scrollTo" при каждом изменении маршрута
        const scrollToId = new URLSearchParams(location.search).get('scrollTo');

        console.log(scrollToId);
        if (scrollToId) {
            const element = document.getElementById(scrollToId);

            if (element) {
                // Прокрутка к элементу
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.search]);

    return (
        <div className="section">
            <section className="flex justify-between  mb-[50px]">
                <img
                    className="object-cover w-[50%] h-full"
                    src={ImageName}
                    alt="ImageName"
                />
                <div className="flex flex-col text-center ml-[50px]">
                    <h2 className="mt-10">Титов Кирилл Максимович</h2>
                    <span className="mt-10">
                        Привет! Меня зовут Кирилл, я студент университета в
                        Дубне, Подмосковье. Я учусь на направлении
                        "Информационная безопасность" в Институте
                        кибербезопасности.
                    </span>
                    <span className="mt-10">
                        В университете я активно участвую в проектах по
                        разработке методов противодействия киберугрозам.
                    </span>
                    <span className="mt-10">
                        Меня увлекают современные технологии, и я стремлюсь
                        делать вклад в создание безопасного цифрового
                        пространства.
                    </span>
                </div>
            </section>
            <h1>dfse</h1>
            <section
                id="myskills"
                className="flex flex-col text-center mb-[50px]"
            >
                <h1>Что я умею</h1>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6 className="font-bold">
                            Figma - Инструмент для Дизайна Интерфейсов:
                        </h6>
                        <span className="mt-10">
                            Владею Figma — мощным онлайн-редактором для
                            проектирования интерфейсов, создания макетов сайтов,
                            мобильных приложений и других дизайн-проектов. Этот
                            инструмент обеспечивает удобное совместное
                            взаимодействие и эффективное воплощение дизайн-идей.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img
                            className="w-[60px] mb-10"
                            src={wordpressImage}
                            alt=""
                        />
                        <h6 className="font-bold">
                            WordPress - Система Управления Содержимым (CMS):
                        </h6>
                        <span className="mt-10">
                            Знаком с WordPress — свободно распространяемой CMS с
                            открытым исходным кодом. Мой опыт включает создание
                            и поддержку веб-сайтов на этой платформе, что
                            обеспечивает гибкость и простоту в управлении
                            контентом.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img
                            className="w-[60px] mb-10"
                            src={photoshopImage}
                            alt=""
                        />
                        <h6 className="font-bold">
                            Графический Редактор - Многофункциональный
                            Инструмент:
                        </h6>
                        <span className="mt-10">
                            Работал с многофункциональными растровыми
                            графическими редакторами, владею различными
                            инструментами для обработки изображений и создания
                            креативных графических элементов.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img
                            className="w-[60px] mb-10"
                            src={htmlImage}
                            alt=""
                        />
                        <h6 className="font-bold">
                            HTML5 - Язык Разметки для Веба:
                        </h6>
                        <span className="mt-10">
                            Знаком с HTML5 — языком разметки, используемым для
                            структурирования и представления контента в сети
                            Интернет. Мой опыт включает создание веб-страниц с
                            использованием современных стандартов и технологий
                            HTML5.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={cssImage} alt="" />
                        <h6 className="font-bold">
                            CSS - Язык Таблиц Стилей для Визуального Оформления:
                        </h6>
                        <span className="mt-10">
                            Применяю CSS для стилизации веб-страниц и
                            обеспечения их визуальной привлекательности. Этот
                            язык позволяет описывать представление документа,
                            созданного с использованием HTML, и обеспечивает
                            гармоничное отображение контента.
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex justify-between gap-10">
                <div className="flex flex-col border border-white p-8 rounded-md  w-full">
                    <h6 className="font-bold text-center mb-5">
                        Мои сильные качества:
                    </h6>
                    <div className="space-y-2">
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Основательность
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Ответственность
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Творческое мышление
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Стремление к саморазвитию
                        </span>
                    </div>
                </div>
                <div className="flex flex-col  border border-white p-8 rounded-md  w-full">
                    <h6 className="font-bold text-center mb-5">
                        Список жизненных целей:
                    </h6>
                    <div className="space-y-2">
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Профессиональный рост
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Личное самосовершенствование:
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Обучение и образование:
                        </span>
                        <span className="block bg-[var(--inverted-bg-color)] text-[var(--bg-color)] rounded-md p-4">
                            Путешествия и культурный опыт:
                        </span>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center mt-10 pb-10">
                <h1 className="text-[24px] font-bold">
                    Самая важная информация
                </h1>
                <h2 className="mt-4">
                    Для того, чтобы узнать самую важную информацию, нажмите
                    кнопку ниже
                </h2>
                <Link
                    to={'/resume'}
                    className="border border-[var(--inverted-bg-color)] px-6 py-2 mt-4"
                >
                    Узнать
                </Link>
            </section>
        </div>
    );
};
