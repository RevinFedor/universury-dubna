import React, { useState, useEffect } from 'react';
import figma from '../assets/figma.jpeg';
import cssImage from '../assets/css.jpg';
import htmlImage from '../assets/html.png';
import photoshopImage from '../assets/photoshop.jpg';
import wordpressImage from '../assets/wordpress.png';

export const MyInterests = () => {
    // Секция 1 - слайдер
    const images = [figma, cssImage, htmlImage, photoshopImage, wordpressImage];

    // ткекущее изображение и кнопки перключателей
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Секция 2 - Список задач
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        // проверка на пустую строку и добавление задачи
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const removeAllTasks = () => {
        setTasks([]);
    };

    // Сохранение списка задач в локальном хранилище при изменение задач
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
            console.log('savce');
        }
    }, [tasks]);

    // Восстановление списка задач из локального хранилища при загрузке страницы
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Секция 3 - Таймер "Помодоро"
    const [timerDuration, setTimerDuration] = useState(25 * 60); // 25 минут по умолчанию
    const [timerRunning, setTimerRunning] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState(25);
    const [timerInterval, setTimerInterval] = useState(null);

    const startTimer = () => {
        setTimerRunning(true);
        // через каждый интервал изменяет значение timerDuration
        setTimerInterval(
            setInterval(() => {
                setTimerDuration((prevDuration) => prevDuration - 1);
            }, 1000)
        );
    };

    // Сохранение текущего таймера в локальном хранилище
    useEffect(() => {
        if (timerDuration !== 25 * 60) {
            localStorage.setItem('timerDuration', timerDuration.toString());
        }
    }, [timerDuration]);

    // Восстановление текущего таймера из локального хранилища при загрузке страницы
    useEffect(() => {
        const storedTimerDuration = localStorage.getItem('timerDuration');
        if (storedTimerDuration) {
            setTimerDuration(parseInt(storedTimerDuration, 10));
        }
    }, []);

    // Обработчик изменения select
    const handleSelectChange = (e) => {
        const selectedMinutes = parseInt(e.target.value, 10);
        setSelectedDuration(selectedMinutes);
        setTimerDuration(selectedMinutes * 60);
    };

    // Сохранение выбранного отрезка времени в локальном хранилище
    useEffect(() => {
        if (selectedDuration !== 25) {
            localStorage.setItem(
                'selectedDuration',
                selectedDuration.toString()
            );
        }
    }, [selectedDuration]);

    // Восстановление выбранного отрезка времени из локального хранилища при загрузке страницы
    useEffect(() => {
        const storedSelectedDuration = localStorage.getItem('selectedDuration');
        if (storedSelectedDuration) {
            setSelectedDuration(parseInt(storedSelectedDuration, 10));
            setTimerDuration(parseInt(storedSelectedDuration, 10) * 60);
        }
    }, []);

    const pauseTimer = () => {
        setTimerRunning(false);
        clearInterval(timerInterval);
    };

    const resetTimer = () => {
        setTimerRunning(false);
        clearInterval(timerInterval);
        setTimerDuration(selectedDuration * 60);
    };

    return (
        <div className="container">
            {/* Секция 1 - Галерея изображений */}
            <section className="flex gap-[200px] mb-10">
                <div className="text-center w-[50%] flex flex-col gap-10">
                    <h2 className="text-2xl font-bold mb-4">
                        Что мне нравится
                    </h2>
                    <p>
                        Привет! Я страстный исследователь и постоянно в поиске
                        новых знаний и умений. Влюблен в процесс обучения, я
                        часто беру на себя вызовы, даже если они на первый
                        взгляд кажутся сложными и непонятными.
                    </p>
                    <p>
                        Мое большое увлечение — настольные игры. Они для меня не
                        только способ развивать интеллект и логическое мышление,
                        но и настоящий источник удовольствия. В каждой партии я
                        нахожу что-то новое и захватывающее.
                    </p>
                    <p>
                        Я также обожаю открывать для себя новые места,
                        погружаясь в их атмосферу. Исследование окружающего мира
                        приносит мне радость, ведь всегда интересно найти что-то
                        удивительное или вдохновляющее.
                    </p>
                    <p>
                        На этом сайте я хочу поделиться своим опытом,
                        вдохновением и интересными открытиями. Присоединяйтесь,
                        и давайте вместе открывать мир!"
                    </p>
                </div>
                <div className="relative w-full md:w-1/2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={`w-full h-[500px] object-cover ${
                                index === currentImageIndex ? 'block' : 'hidden'
                            }`}
                        />
                    ))}
                    <button
                        onClick={prevImage}
                        className="absolute left-[-30px] top-1/2 transform ml-4 border border-[var(--inverted-bg-color)]"
                    >
                        Назад
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-[-30px]  top-1/2 transform mr-4 border border-[var(--inverted-bg-color)]"
                    >
                        Вперед
                    </button>
                </div>
            </section>

            {/* Секция 2 - Список задач */}
            <section className="flex justify-between gap-[200px]">
                <div className="w-full">
                    <div className="flex items-center mb-4 ">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="border text-[var(--inverted-bg-color)] bg-[var(--bg-color)] p-2 w-full"
                            placeholder="Новая задача"
                        />
                        <button
                            onClick={addTask}
                            className=" px-4 py-2 ml-2 rounded"
                        >
                            Добавить
                        </button>
                    </div>
                    <ul>
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between mb-2"
                            >
                                <span>{task}</span>
                                <button
                                    onClick={() => removeTask(index)}
                                    className="text-red-500"
                                >
                                    Удалить
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <button
                            onClick={removeAllTasks}
                            className="text-red-500"
                        >
                            Удалить все задачи
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-10">Мои планы</h2>
                    <p>
                        Я имею склонность откладывать "на потом" несрочные дела,
                        поэтому важно фиксировать их, чтобы в нужный момент
                        видеть все свои задачи и планы на будущее.
                    </p>
                </div>
            </section>

            {/* Секция 3 - Таймер "Помодоро" */}
            <section className="flex justify-between mt-10 pb-10 gap-[200px]">
                <div className="">
                    <div className="flex flex-col items-center text-center gap-[20px] mb-10">
                        <h2 className="text-2xl font-bold mb-10">
                            Таймер для работы
                        </h2>
                        <p>
                            В моей стремлении к эффективной работе я применяю
                            проверенный метод управления временем, известный как
                            "Помодоро". Этот метод представляет собой
                            великолепное средство для повышения продуктивности и
                            поддержания высокой концентрации в течение рабочего
                            времени.
                        </p>
                        <p>
                            Сосредотачивайтесь на выполнении задачи в течение 25
                            минут (один "помидор"). Этот период предназначен для
                            полной фокусировки, исключая любые отвлекающие
                            факторы.
                        </p>
                        <p>
                            После каждого "помидора" делайте короткий перерыв в
                            5 минут. Это время для отдыха и приятных занятий,
                            таких как короткая прогулка или растяжка.
                        </p>
                        <p>
                            Повторяйте цикл сеанса работы и короткого перерыва.
                            Каждые четыре "помидора" предусматривают более
                            продолжительный перерыв (15–30 минут).
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center mb-4">
                        <select
                            value={selectedDuration}
                            onChange={handleSelectChange}
                            className="border p-2 text-[var(--inverted-bg-color)] bg-[var(--bg-color)]"
                        >
                            <option value="25">25 минут</option>
                            <option value="5">5 минут</option>
                            <option value="15">15 минут</option>
                        </select>
                        {timerRunning ? (
                            <button
                                onClick={pauseTimer}
                                className="bg-yellow-500 text-white px-4 py-2 ml-2 rounded"
                            >
                                Пауза
                            </button>
                        ) : (
                            <button
                                onClick={startTimer}
                                className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                            >
                                Начать
                            </button>
                        )}
                        <button
                            onClick={resetTimer}
                            className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
                        >
                            Заново
                        </button>
                    </div>
                    <div className="text-2xl">{`${Math.floor(
                        timerDuration / 60
                    )}:${timerDuration % 60 < 10 ? '0' : ''}${
                        timerDuration % 60
                    }`}</div>
                </div>
            </section>
        </div>
    );
};
