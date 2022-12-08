const UserService = require("../service/UserService");
const APIError = require("../error/APIError");

class UserController {
  async create(req, res, next) {
    const id = await UserService.create(req.body);
    res.status(201).json(id);
  }

  async read(req, res, next) {
    const user = await UserService.read(req.params.id);
    if (!user) {
      next(APIError.notFound(`User with id ${req.params.id} not found`));
      return;
    }
    res.status(200).json(user);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    const user = await UserService.update(id, body);
    if (!user) {
      next(APIError.notFound(`User with id ${req.params.id} not found`));
      return;
    }
    res.status(200).json(user);
  }

  async delete(req, res, next) {
    const id = req.params.id;
    const user = await UserService.delete(id);
    if (!user) {
      next(APIError.notFound(`User with id ${req.params.id} not found`));
      return;
    }
    res.status(200).json(user);
  }
}

module.exports = new UserController();
