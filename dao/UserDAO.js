const db = require("../database/db");

class UserDAO {
  async create(firstName, lastName, email) {
    const [id] = await db("users")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
      })
      .returning("id");

    return id;
  }

  async read(id) {
    const user = await db("users").where("id", id).first();
    return user;
  }

  async update(id, body) {
    const user = await db("users").where("id", id).update(body);
    return user;
  }

  async delete(id) {
    const user = await db("users").where("id", id).del();
    return user;
  }
}

module.exports = new UserDAO();
