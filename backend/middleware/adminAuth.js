// import jwt from "jsonwebtoken";

// const adminAuth = async (req, res, next) => {
//   try {
//     const { token } = req.headers;
//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Not Authorized login again",
//       });
//     }
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
//       return res.json({
//         success: false,
//         message: "Not Authorized login again",
//       });
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };
// export default adminAuth;

import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    console.log("🔐 Incoming Headers:", req.headers);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ Missing or bad Authorization header");
      return res.status(401).json({
        success: false,
        message: "Not Authorized login again",
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("🔑 Extracted token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Decoded token:", decoded);

    if (decoded.role !== "admin") {
      console.log("❌ Token role is not admin");
      return res.status(403).json({
        success: false,
        message: "Admin only access",
      });
    }

    next();
  } catch (error) {
    console.error("🔥 Admin Auth Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default adminAuth;
