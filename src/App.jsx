import { AboutSelf } from './pages/AboutSelf';
import { Resume } from './pages/Resume';
import { MyInterests } from './pages/MyInterests';
import { Contacts } from './pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { Header } from './widgetes/Header';
import { Footer } from './widgetes/Footer';

function App() {
    // разметка с помощью tailwind свойства стилей сразу в классах
    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg-color)] relative">
            <Header />
            <div className="mb-[120px]">
                {/* настройка маршрутов по ссылкам. на каждую ссылку определенный комопненнт */}
                <Routes>
                    <Route path="/" element={<AboutSelf />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/myinteresting" element={<MyInterests />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
