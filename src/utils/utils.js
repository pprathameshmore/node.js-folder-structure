const bcrypt = require("bcrypt");

const response = (statusCode, message, data) => {
  return {
    statusCode,
    message,
    data,
  };
};

const isDefVar = (variable) => (variable ? true : false);

const isDefObject = (object) =>
  Object.keys(object).length === 0 ? false : true;

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10).catch((error) => {
    throw new GeneralError(error);
  });
};

exports.checkPassword = async (givenPassword, userPassword) => {
  return await bcrypt.compare(givenPassword, userPassword).catch((error) => {
    throw new GeneralError(error);
  });
};
