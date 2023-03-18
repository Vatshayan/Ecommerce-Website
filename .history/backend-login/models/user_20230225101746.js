const User = require('./models/user');

// Sử dụng đối tượng User để thao tác với người dùng
const user = new User();
user.username = 'john_doe';
user.email = 'john_doe@example.com';
user.save();


const User = require('./models/user');

// Tạo một người dùng mới
const newUser = {
  username: 'john_doe',
  email: 'john_doe@example.com',
  password: 'mypassword'
};

User.create(newUser)
  .then(user => {
    console.log('Created new user:', user);
  })
  .catch(err => {
    console.error('Error creating new user:', err);
  });
