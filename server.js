const express = require("express");
const cors = require("cors");
const db = require("./db"); // Gọi file kết nối DB ở Bước 1 vào

const app = express();
app.use(cors());
app.use(express.json());

// 1. Nơi kiểm tra xem server có sống không
app.get("/", (req, res) => {
  res.send("🚀 Server Backend PikoChat đang hoạt động cực kỳ mượt mà!");
});

// 2. Viết API lấy thử danh sách tài khoản từ bảng USER lên
app.get("/api/test-users", (req, res) => {
  const query = "SELECT user_id, email, role, full_name FROM USER";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true, data: results });
  });
});

// API KIỂM TRA ĐĂNG NHẬP
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Tìm trong database xem có email và pass này không
  const query = "SELECT * FROM USER WHERE email = ? AND password_hash = ?";

  db.query(query, [username, password], (err, results) => {
    if (err)
      return res.status(500).json({ success: false, message: "Lỗi server" });

    if (results.length > 0) {
      res.json({ success: true, user: results[0] }); // Trả về thông tin user thật
    } else {
      res.json({ success: false, message: "Sai tài khoản hoặc mật khẩu!" });
    }
  });
});
// Bật máy chủ ở cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Máy chủ đang chạy tại: http://localhost:${PORT}`);
});
