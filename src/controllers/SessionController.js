const UserModel = require('../models/UserModel');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    
    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({ email });
    }

    return res.json(user);
  }
};