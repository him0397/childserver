import { User } from '../models/userModel.js';
import { Helpers } from '../utils/helpers.js';

const authUser = Helpers.asyncHandler(async (req, res) => {
  const { providerNo, password } = req.body;

  const user = await User.findOne({ providerNo });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = Helpers.asyncHandler(async (req, res) => {
  const { providerNo, password } = req.body;

  const userExists = await User.findOne({ providerNo });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    providerNo,
    password,
  });

  if (user) {
    Helpers.generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const logoutUser = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({ message: 'Logged out successfully' });
};

const getUserProfile = Helpers.asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUserPassword = Helpers.asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.password = req.body.password || user.password;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getUsers = Helpers.asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const deleteUser = Helpers.asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Can not delete admin user');
    }
    await User.deleteOne({ _id: user._id });
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getUserById = Helpers.asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserPassword,
  getUsers,
  deleteUser,
  getUserById,
};
