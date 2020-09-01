const getAllUsers = async (req, res, next) => {
  return res.status(200).send("Users");
};

module.exports = {
  getAllUsers,
};
