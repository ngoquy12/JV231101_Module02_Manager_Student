import React from "react";

export default function ListStudent({ studentLocal, onDeleteStudent }) {
  // Hàm xóa thông tin một sinh viên theo id
  const handleDelete = (id) => {
    // Gọi hàm xóa bên component Main
    onDeleteStudent(id);
  };
  return (
    <>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {studentLocal.map((student) => (
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.studentCode}</td>
                  <td>{student.studentName}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                      >
                        Xem
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(student.studentId)}
                        type="button"
                        className="btn btn-success btn-icon-text"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
