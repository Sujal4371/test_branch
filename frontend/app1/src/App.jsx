import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Admin pages
import AdminCourses from "./pages/admin/AdminCourses";
import AddCourse from "./pages/admin/AddCourse";
import EditCourse from "./pages/admin/EditCourse";

function App() {
  return (
    <>
      <Routes>
        {/* Admin only */}
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/courses/add" element={<AddCourse />} />
        <Route path="/admin/courses/edit/:id" element={<EditCourse />} />

        {/* default route */}
        <Route path="*" element={<Navigate to="/admin/courses" replace />} />
      </Routes>

      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
