import React, { useState } from 'react';

const topicsData = [
    {
        name: 'education',
        checkboxes: {
            math: false,
            science: false,
            literature: false,
        },
    },
    {
        name: 'numbers',
        checkboxes: {
            1: false,
            2: false,
            3: false,
        },
    },
];

export const Contacts = () => {
    // данные формы
    // и когда данные формы меняются, мы автоматически обноляем страницу
    const [responseType, setResponseType] = useState('no-reply');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [name, setName] = useState('');
    const [selectedTopic, setSelectedTopic] = useState(topicsData[0].name);
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState('');
    const [studyCheckboxes, setStudyCheckboxes] = useState({});

    // функция изменения типа ответа (в зависимости от которой меняются поля формы)
    const handleResponseTypeChange = (type) => {
        setResponseType(type);
        resetForm();
    };

    // функция изменения типа Темы (в зависимости от которой меняются поля для галочек)
    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        setStudyCheckboxes({});

        resetForm();
    };

    const handleCheckboxChange = (subject) => {
        // setStudyCheckboxes - это функция, используемая для обновления состояния компонента
        // prevCheckboxes - текущее состояние чекбоксов
        setStudyCheckboxes((prevCheckboxes) => {
            // Создание нового объекта newCheckboxes на основе предыдущего состояния
            const newCheckboxes = { ...prevCheckboxes };

            // Инвертирование значения чекбокса для указанного предмета (subject)
            newCheckboxes[subject] = !newCheckboxes[subject];

            // Возвращение нового состояния, которое затем будет использовано для обновления компонента
            return newCheckboxes;
        });
    };

    // удаление всех данных формы
    const resetForm = () => {
        setDate('');
        setPhone('');
        setEmail('');
        setLink('');
        setName('');
        setMessage('');
        setFormErrors('');
    };

    const handleSubmit = (e) => {
        // чтобы по нажатию на кнопку страница не перезагружалась
        e.preventDefault();

        // Проверка наличия заполненных полей
        if (!name) {
            setFormErrors(`Не все поля заполнены - name`);
        } else if (!message) {
            setFormErrors(`Не все поля заполнены - message`);
        } else {
            setFormErrors('');

            // Сбор данных формы в строку JSON
            const formDataString = JSON.stringify(
                {
                    responseType,
                    date,
                    phone,
                    email,
                    link,
                    name,
                    selectedTopic,
                    studyCheckboxes,
                    message,
                },
                null,
                2
            );
            // Вывод алерта с данными формы (в реальном проекте нужно отправить на сервер)
            alert('Form submitted successfully:\n' + formDataString);
        }
    };

    return (
        <div className="section mx-auto p-4">
            <form onSubmit={handleSubmit} className="max mx-auto">
                <div className="flex justify-between gap-10 mb-20 ">
                    <div className="flex flex-col items-center  border border-[var(--inverted-bg-color)] text-[var(--inverted-bg-color)] bg-[var(--bg-color)] w-full py-10 rounded-2xl">
                        <p className="font-bold mb-2">В социальных сетях:</p>
                        <div className="flex space-x-2">
                            <a
                                href="#"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  border border-[var(--inverted-bg-color)] text-[var(--inverted-bg-color)] bg-[var(--bg-color)] w-full py-10 rounded-2xl">
                        <p className="font-bold mb-2">Моя электронная почта:</p>
                        <p>KirillTitiov@dubna.ru</p>
                    </div>

                    <div className="flex flex-col items-center  border border-[var(--inverted-bg-color)] text-[var(--inverted-bg-color)] bg-[var(--bg-color)] w-full py-10 rounded-2xl">
                        <p className="font-bold mb-2">Мой номер телефона:</p>
                        <p>999-999-9999</p>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        Выберите способ связи:
                    </label>
                    <div className="flex ">
                        <button
                            type="button"
                            onClick={() => handleResponseTypeChange('meeting')}
                            className={`flex-1  border border-[var(--inverted-bg-color)] p-2 mr-1 ${
                                responseType === 'meeting' && 'bg-[#646cff]'
                            }`}
                        >
                            Назначить встречу
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponseTypeChange('phone')}
                            className={`flex-1  border border-[var(--inverted-bg-color)] p-2 mr-1 ${
                                responseType === 'phone' && 'bg-[#646cff]'
                            }`}
                        >
                            Телефон
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponseTypeChange('email')}
                            className={`flex-1  border border-[var(--inverted-bg-color)] p-2 mr-1 ${
                                responseType === 'email' && 'bg-[#646cff]'
                            }`}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponseTypeChange('other')}
                            className={`flex-1  border border-[var(--inverted-bg-color)] p-2 mr-1 ${
                                responseType === 'other' && 'bg-[#646cff]'
                            }`}
                        >
                            Другое
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponseTypeChange('no-reply')}
                            className={`flex-1  border border-[var(--inverted-bg-color)] p-2 ${
                                responseType === 'no-reply' && 'bg-[#646cff]'
                            }`}
                        >
                            Не отвечать
                        </button>
                    </div>
                </div>

                {/* Дополнительные поля в зависимости от выбора */}
                {responseType === 'meeting' && (
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Select Date:
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border p-2 w-full"
                        />
                    </div>
                )}

                {responseType === 'phone' && (
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Enter Phone:
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border p-2 w-full"
                        />
                    </div>
                )}

                {responseType === 'email' && (
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Enter Email:
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2 w-full"
                        />
                    </div>
                )}

                {responseType === 'other' && (
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Enter Link:
                        </label>
                        <input
                            type="url"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="border p-2 w-full"
                        />
                    </div>
                )}

                {/* Обязательное поле для ввода имени */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        Введите ваше имя:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>

                {/* Дополнительные поля в зависимости от выбора в выпадающем списке */}
                <div className="mb-4">
                    {/* Заголовок для выбора темы */}
                    <label className="block text-sm font-bold mb-2">
                        Выберите тему:
                    </label>

                    {/* Выпадающий список для выбора темы */}
                    <select
                        value={selectedTopic}
                        onChange={(e) => handleTopicChange(e.target.value)}
                        className="border p-2 w-full"
                    >
                        {/* Отображение каждой темы в виде опции выпадающего списка */}
                        {topicsData.map((topic) => (
                            <option key={topic.name} value={topic.name}>
                                {topic.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Часть формы с CheckBox в зависимости от выбора из выпадающего списка */}
                <div className="mb-4">
                    {/* Заголовок для выбора предмета */}
                    <label className="block text-sm font-bold mb-2">
                        Выберите предмет:
                    </label>

                    {/* Группа чекбоксов для предметов */}
                    <div className="flex">
                        {Object.entries(
                            // Получаем чекбоксы для выбранной темы (или пустой объект, если тема не найдена)
                            topicsData.find(
                                (topic) => topic.name === selectedTopic
                            )?.checkboxes || {}
                        ).map(([subject, checked]) => (
                            // Отображаем чекбокс и его название
                            <label key={subject} className="mr-4">
                                <input
                                    type="checkbox"
                                    defaultChecked={checked}
                                    onChange={() =>
                                        handleCheckboxChange(subject)
                                    }
                                    className="mr-2"
                                />
                                {subject}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Обязательное поле для ввода сообщения */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        Ваше сообщение:
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border p-2 w-full h-32"
                    />
                </div>

                {/* Отображение ошибок валидации */}

                <div className="mb-4 text-red-500">{formErrors}</div>

                {/* Кнопка отправки формы */}
                <button type="submit" className="bg-green-500 p-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};
