import React, { useState, useEffect } from "react";
import "./Users.css";

function UserForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ name: "", email: "", role: "" });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.role) {
      onSave(formData);
    }
  };

  return (
    <div className="form-overlay">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>{user ? "Sửa người dùng" : "Thêm người dùng"}</h2>
        <label>
          Tên:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vai trò:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Chọn vai trò</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </label>
        <div className="form-actions">
          <button type="submit">Lưu</button>
          <button type="button" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
