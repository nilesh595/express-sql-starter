const UserDAO = require("../dao/UserDAO");

class UserService {
  create(user) {
    const { firstName, lastName, email } = user;
    return UserDAO.create(firstName, lastName, email);
  }

  read(id) {
    return UserDAO.read(id);
  }

  update(id, body) {
    return UserDAO.update(id, body);
  }

  delete(id) {
    return UserDAO.delete(id);
  }
}

module.exports = new UserService();
