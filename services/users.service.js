const Users = require('../db/users.model');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {}

  async create(data) {
    try {
      const { email, password } = data;
      const hash = await bcrypt.hash(password, 10);
      const newUsers = new Users();
      //   if (!email) {
      //     throw { msg: 'miss data' };
      //   }
      newUsers.email = email;
      newUsers.password = hash;

      newUsers.save();
      newUsers.password = undefined;
      return newUsers;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const Users = await Users.findOne({ _id: id });
      if (!Users) {
        throw { msg: 'miss data' };
      }
      return Users;
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      const Users = await Users.find({});
      return Users;
    } catch (error) {
      throw error;
    }
  }

  async update(id, name) {
    try {
      const _Users = await this.findOne(id);
      if (_Users) {
        const Users = await Users.updateOne({ _id: id }, { name: name });
        return Users;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOne(id) {
    try {
      const Users = await Users.deleteOne({ _id: id });
      return id;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
