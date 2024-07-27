import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import CollageForm from "./componants/Form/CollageForm";
import Course from "./componants/Form/Course";
import CollageEdit from "./componants/Edit/CollageEdit";
import Courses from "./componants/Table/Courses";
import CourseEdit from "./componants/Edit/CourseEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element = {<Courses />} />
          <Route path="/create" element={<CollageForm />} />
          <Route path="/collage/:id/course" element={<Course />} />
          <Route path="/collagedit/:id" element={<CollageEdit />} />
          <Route path="/course-edit/:id" element = {<CourseEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
