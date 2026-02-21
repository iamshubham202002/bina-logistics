import express from "express";
import {
  submitRequest,
  getAllRequest,
  updateRequestStatus,
  isAdminCheck
} from "../Controllers/requestController.js";

const requestRouter = express.Router();

// USER
requestRouter.post("/submit", submitRequest);

// ADMIN
requestRouter.get("/all", getAllRequest);
requestRouter.put("/update-status/:id", updateRequestStatus);

// ✅ MUST BE POST (important)
requestRouter.post("/is-admin", isAdminCheck);

export default requestRouter;
