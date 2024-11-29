import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css'; // Đảm bảo bạn đã cài đặt Font Awesome
import './index.css'; // Nếu bạn có file CSS chính

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
