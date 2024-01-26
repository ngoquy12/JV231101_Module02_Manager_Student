import React, { useState } from "react";
import ListStudent from "./ListStudent";
import Form from "./Form";

export default function Main() {
  const [showForm, setShowForm] = useState(false);
  // Lấy dữ liệu trên local
  const [studentLocal, setStudentLocal] = useState(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    return students;
  });

  // Hàm thêm mới student
  const onAddStudent = (student) => {
    console.log(student);
    // Push dữ liệu vào trong mảng
    const newListStudent = [...studentLocal, student];

    // Lưu dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(newListStudent));

    // Cập nhật lại state cho studentLocal
    setStudentLocal(newListStudent);
  };

  // Hàm xóa thông tin một student theo id
  const onDeleteStudent = (id) => {
    // Lọc ra những id có id khác với id cần xóa
    const studentFilters = studentLocal.filter((stu) => stu.studentId != id);

    // Lưu dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(studentFilters));

    // Cập nhật lại state cho studentLocal
    setStudentLocal(studentFilters);
  };

  // Hàm hiển thị form
  const handleShowForm = () => {
    setShowForm(true);
  };

  // Hàm đóng form
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    onClick={handleShowForm}
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                    <button className="btn btn-primary btn-icon-text">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                  </select>
                </div>
              </div>
            </div>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              studentLocal={studentLocal}
              onDeleteStudent={onDeleteStudent}
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {showForm && (
          <Form handleCloseForm={handleCloseForm} onAddStudent={onAddStudent} />
        )}

        {/* END FORM SINH VIÊN */}
      </div>
    </>
  );
}
