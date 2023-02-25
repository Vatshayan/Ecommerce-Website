const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// Route đăng nhập
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Kiểm tra thông tin đăng nhập
  if (email !== 'user@example.com' || password !== 'password') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Tạo mã thông báo JWT
  const token = jwt.sign({ id: 1, name: 'User' }, 'my-secret-key', { expiresIn: '1h' });
  
  // Gửi mã thông báo đến client
  res.json({ token });
});

// Route bảo vệ
app.get('/protected', (req, res) => {
  // Kiểm tra xem mã thông báo JWT có hợp lệ hay không
  try {
    const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'my-secret-key');
    res.json({ message: 'Hello, ' + decoded.name });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token'
});

// Khởi động server
app.listen(3000, () => {
console.log('Server started on port 3000');
});