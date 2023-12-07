import { AboutSelf } from './pages/AboutSelf';
import { MySkills } from './pages/MySkills';
import Resume from './pages/Resume';
import MyInterests from './pages/MyInterests';
import Contacts from './pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { Header } from './widgetes/Header';

function App() {
    return (
        <div className="">
            <Header />
            <Routes>
                <Route path="/" element={<AboutSelf />} />
                <Route path="/myskills" element={<MySkills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/myinteresting" element={<MyInterests />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
