const mysql = require("mysql2");

// Cấu hình kết nối đến MySQL Workbench
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Tên đăng nhập MySQL (Mặc định thường là 'root')
  password: "", // Mật khẩu MySQL (Nếu lúc cài đặt đại ca có đặt pass thì điền vào, không thì để trống)
  database: "pikochat_db", // Tên Database mình đã tạo
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Lỗi kết nối Database:", err.message);
    return;
  }
  console.log("✅ Đã kết nối thành công tới Database pikochat_db!");
});

module.exports = connection;
