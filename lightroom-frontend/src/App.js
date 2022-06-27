import "./App.css";

import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherRegister from "./pages/TeacherRegister";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/teacher/register" element={<TeacherRegister/>}/>
        <Route exact path="/teacher/login" element={<TeacherLogin/>}/>
        <Route exact path="/student/register" element={<StudentRegister/>}/>
        <Route exact path="/student/login" element={<StudentLogin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
