import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./homepage/Homepage";
import About from "./about/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
    //<Homepage />
  );
}

export default App;