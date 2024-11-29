import React, { useState } from "react";
import "./Categories.css";

function CategoryForm({ category, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    category || { name: "", description: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="category-form-overlay">
      <div className="category-form-container">
        <h2>{category ? "Chỉnh sửa danh mục" : "Thêm danh mục mới"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tên danh mục:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên danh mục"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Mô tả:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Nhập mô tả danh mục"
              rows="3"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="save-button">
              Lưu
            </button>
            <button type="button" className="cancel-button" onClick={onCancel}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
