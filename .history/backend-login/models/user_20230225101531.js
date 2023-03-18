const bcrypt = require('bcrypt');
const user = new User();

const userId = 123; // ID của user cần lấy thông tin
const userInfo = user.getUserById(userId);

console.log(userInfo);


router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return console.error(err);
    
    const user = new User({
      name: name,
      email: email,
      password: hash
    });
    
    user.save((err, user) => {
      if (err) return console.error(err);
      
      res.send('User registered successfully!');
    });
  });
});


router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  User.findOne({ email: email }, (err, user) => {
    if (err) return console.error(err);
    
    if (!user) {
      return res.status(401).send('Invalid email or password!');
    }
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return console.error(err);
      
      if (result) {
        // Create a token and send it back to the client
        // ...
        res.send('User logged in successfully!');
      } else {
        res.status(401).send('Invalid email or password!');
      }
    });
  });
});


const jwt = require('jsonwebtoken');

// ...

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  User.findOne({ email: email }, (err, user) => {
    if (err) return console.error(err);
    
    if (!user) {
      return res.status(401).send('Invalid email or password!');
    }
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return console.error(err);
      
      if (result) {
        const token = jwt.sign({ userId: user._id }, 'your-secret-key');
        res.json({ token });
      } else {
        res.status(401).send('Invalid email or password!');
      }
    });
  });
});

// ...

router.get('/some-protected-route', authenticateToken, (req, res) => {
  res.send('This route is protected!');
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.status(401).send('Missing token!');
  
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) return res.status(403).send('Invalid token!');
    
    req.userId = decoded.userId;
    next();
  });
}



// Middleware xác thực
function authenticateToken(req, res, next) {
  // Lấy mã thông báo từ tiêu đề 'Authorization'
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.status(401).send('Missing token!');
  
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) return res.status(403).send('Invalid token!');
    
    req.userId = decoded.userId;
    next();
  });
}

// Route được bảo vệ bởi middleware xác thực
router.get('/api/users', authenticateToken, (req, res) => {
  // Trả về danh sách người dùng
  User.find({}, (err, users) => {
    if (err) return console.error(err);
    res.json(users);
  });
});
