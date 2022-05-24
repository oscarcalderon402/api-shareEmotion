const Users = require('../db/users.model');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {}

  async create(data) {
    try {
      const { email, password } = data;
      const userFound = await Users.findOne({ email });
      console.log(data);
      console.log(userFound);

      if (userFound?.email === email) {
        throw boom.unauthorized('user exist');
      }
      const hash = await bcrypt.hash(password, 10);
      const newUsers = new Users();

      newUsers.email = email;
      newUsers.password = hash;

      await newUsers.save();
      newUsers.password = undefined;
      return newUsers;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const users = await Users.findOne({ _id: id });

      if (!users) {
        throw boom.unauthorized('user not found');
      }
      return users;
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      const users = await Users.find({}, { password: 0 });
      return users;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      const user = await Users.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id, name) {
    try {
      const userFound = await this.findOne(id);
      if (userFound) {
        const Users = await Users.updateOne({ _id: id }, { name: name });
        return Users;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(id) {
    try {
      await Users.deleteOne({ _id: id });
      return id;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
