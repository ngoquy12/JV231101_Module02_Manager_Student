import React, { useState } from "react";

export default function Form({ handleCloseForm, onAddStudent }) {
  const [student, setStudent] = useState({
    studentCode: "",
    studentName: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
  });

  // Hàm lấy giá trị trong ô input và gán cho state
  const handleChange = (e) => {
    // // Lấy ra giá trị của input được change
    // const value = e.target.value;

    // // Lấy ra name của từng ô input
    // const name = e.target.name;
    const { value, name } = e.target; // destructoring cho object

    // Tiến hành cập nhật lại state
    setStudent({
      // Bảo lưu lại tất cả các state cũ
      ...student,
      [name]: value, // destructoring array
    });
  };

  // Hàm gửi dữ liệu từ form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo đối tượng newStudent
    const newStudent = {
      studentCode: student.studentCode,
      studentName: student.studentName,
      age: student.age,
      gender: student.gender,
      dateOfBirth: student.dateOfBirth,
      placeOfBirth: student.placeOfBirth,
      address: student.address,
      studentId: Math.ceil(Math.random() * 1000000),
    };

    // Gọi hàm thêm mới bên component Main
    onAddStudent(newStudent);

    // Đóng form
    handleCloseForm();
  };
  return (
    <>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    name="studentCode"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    name="studentName"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    name="age"
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="gender"
                    onChange={handleChange}
                  >
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    name="dateOfBirth"
                    className="form-control"
                    type="date"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="placeOfBirth"
                    onChange={handleChange}
                  >
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    onChange={handleChange}
                    name="address"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                onClick={handleCloseForm}
                type="button"
                className="btn btn-secondary me-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
