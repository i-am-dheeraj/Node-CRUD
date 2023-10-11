const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');
const blog = require('../BlogController/blogController');
const profile = require ('../profilecontroller.js/profileController');

//user routes
router.post('/user/add',user_controller.add)
router.get("/user/getall", user_controller.getAll);
router.get("/user/get/:id", user_controller.getById);
router.patch("/user/edit/:id", user_controller.edit);
router.delete("/user/delete/:id", user_controller.delete);

//blog routes

router.post('/blog/add',blog.add)
router.get("/blog/getall", blog.getAll);
router.get("/blog/get/:id", blog.getById);
router.patch("/blog/edit/:id",blog.edit);
router.delete("/blog/delete/:id", blog.delete);

//profile routes
// router.post('/profile/add',user_controller.add)
router.get("/profile/getall", profile.getAll);
router.get("/profile/get/:id", profile.getById);
// router.patch("/profile/edit/:id", user_controller.edit);
router.delete("/profile/delete/:id", profile.delete);
router.put("/profile/profileupdate/:username",profile.profileupdate);


module.exports = router;
