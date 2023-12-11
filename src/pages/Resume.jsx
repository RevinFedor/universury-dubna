export const Resume = () => {
    return (
        <div className="section">
            <section>
                <h2 className="text-[24px] font-bold text-center mb-10">
                    Опыт работы
                </h2>
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="border border-[var(--inverted-bg-color)] p-4">
                                Дата
                            </th>
                            <th class="border border-[var(--inverted-bg-color)] p-4">
                                Место работы
                            </th>
                            <th class="border border-[var(--inverted-bg-color)] p-4">
                                Должностные обязанности
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Январь 2020 - март 2023
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Компания XYZ
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Управление проектами и обеспечение
                                кибербезопасности
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Май 2018 - декабрь 2019
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                ООО "РаботаТут"
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Разработка безопасных веб-приложений и аудит
                                безопасности
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Сентябрь 2015 - апрель 2018
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                ИП Иванов И.И.
                            </td>
                            <td class="border border-[var(--inverted-bg-color)] p-4">
                                Техническая поддержка пользователей и
                                обнаружение угроз
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="text-2xl font-bold mt-8 mb-4">Образование</h2>
                <p class="mb-4">
                    Бакалавр по кибербезопасности, Университет Дубна, ожидаемый
                    выпуск 2023 год.
                </p>

                <h2 class="text-2xl font-bold mt-8 mb-4">Навыки</h2>
                <ul class="list-disc pl-6">
                    <li>Анализ уязвимостей и пентестирование</li>
                    <li>Разработка стратегий кибербезопасности</li>
                    <li>Настройка и администрирование сетевых устройств</li>
                    <li>Защита от DDoS-атак и вирусов</li>
                    <li>Опыт работы с системами мониторинга безопасности</li>
                </ul>

                <h2 class="text-2xl font-bold mt-8 mb-4">Проекты</h2>
                <p class="mb-4">
                    Разработка и внедрение системы обнаружения вторжений для
                    крупной корпорации XYZ.
                </p>

                <h2 class="text-2xl font-bold mt-8 mb-4">Сертификаты</h2>
                <ul class="list-disc pl-6">
                    <li>
                        Certified Information Systems Security Professional
                        (CISSP)
                    </li>
                    <li>EC-Council Certified Ethical Hacker (CEH)</li>
                </ul>
            </section>
        </div>
    );
};
