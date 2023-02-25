const bcrypt = require('bcrypt');
const User = require('./models/user');

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


const jwt = require('jsonwebtoken');

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
