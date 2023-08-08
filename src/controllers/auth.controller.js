const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const bcrytp = require('bcryptjs');
const generateJWT = require('jsonwebtoken');
const appError = require('../utils/appError');

exports.singUp = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body;

  const salt = await bcrytp.genSalt(12);
  const encryptedPassword = await bcrytp.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password: encryptedPassword,
    role,
  });

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'succes',
    message: 'the user has been created',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.roles,
    },
  });
});
exports.signIn = catchAsync(async (req, res, next) => {
  // Toma los datos
  const { email, password } = req.body;
  // valida usaurio y reisa si existe
  const user = await User.findOne({
    where: {
      email: email.toLowerCase().trim(),
      status: 'available',
    },
  });
  if (!user) {
    return next(new AppError(`user with email ${email} not found!`, 404));
  }
  // valida la contrasñea
  if (!(await bcrytp.compare(password, user.password))) {
    return next(new appError('Incorrect email or password', 401));
  }
  // genera el token
  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'succes',
    token,
    user: {
      id: user.id,
      name: user.name,
      emai: user.email,
      role: user.role,
    },
  });
});
