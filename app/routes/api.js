import express from "express";
let router = express.Router();
import * as UserController from "../controller/UserController.js";
import * as BlogController from "../controller/BlogController.js";
import * as TeamController from "../controller/TeamController.js";
import * as ServiceController from "../controller/ServicesController.js";
import AuthVerification from "../middleware/AuthVerification.js";
// User Route
router.get("/register", UserController.Registration)
router.post("/login", UserController.Login)

// Blogs Route
router.post("/create-blog",AuthVerification, BlogController.CreateBlog)
router.get("/get-all-blogs", BlogController.GetAllBlogs)
router.get("/get-single-blog/:id", BlogController.GetSingleBlog)
router.post("/update-blog/:id",AuthVerification, BlogController.UpdateBlog)
router.delete("/delete-blog/:id",AuthVerification, BlogController.DeleteBlog)

// Team Routes
router.post("/create-team",AuthVerification, TeamController.CreateTeam)
router.get("/get-all-teams",TeamController.GetAllTeams)
router.delete("/delete-team/:id",AuthVerification, TeamController.DeleteTeam)
router.post("/update-team/:id",AuthVerification, TeamController.UpdateTeam)

// Services Route
router.get("/get-all-services", ServiceController.GetAllServices)
router.post("/create-service",AuthVerification, ServiceController.CreateService)
router.delete("/delete-service/:id",AuthVerification, ServiceController.DeleteService)
router.post("/update-service/:id",AuthVerification, ServiceController.UpdateService)

export default router;