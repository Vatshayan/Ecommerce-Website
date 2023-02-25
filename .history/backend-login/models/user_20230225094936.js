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
