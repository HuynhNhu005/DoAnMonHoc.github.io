require("dotenv").config();
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 1. Cấu hình kết nối SQL Server Express
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    instanceName: process.env.DB_INSTANCE, // SQLEXPRESS03
    encrypt: false,
    trustServerCertificate: true,
  },
};

// 2. Hàm kết nối CSDL
async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log("✅ Đã kết nối thành công tới SQL Server!");
  } catch (err) {
    console.error("❌ Lỗi kết nối SQL Server:", err.message);
  }
}

// 3. API Lấy danh sách người dùng
app.get("/api/users", async (req, res) => {
  try {
    const result = await sql.query("SELECT id, username, createdAt FROM Users");
    res.json({ success: true, data: result.recordset });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 4. API Thêm người dùng mới
app.post("/api/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const request = new sql.Request();
    request.input("username", sql.NVarChar, username);
    request.input("password", sql.VarChar, password);

    await request.query(`
      INSERT INTO Users (username, password) 
      VALUES (@username, @password)
    `);

    res.json({ success: true, message: "Thêm người dùng thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 5. Khởi chạy Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});
