import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FacultyDevelopment from './pages/FacultyDevelopment';
import AiForAll from './pages/AiForAll';
import CareerGuidance from './pages/CareerGuidance';
import StudentCounselling from './pages/StudentCounselling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="faculty-development" element={<FacultyDevelopment />} />
          <Route path="ai-for-all" element={<AiForAll />} />
          <Route path="career-guidance" element={<CareerGuidance />} />
          <Route path="students-counselling" element={<StudentCounselling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
