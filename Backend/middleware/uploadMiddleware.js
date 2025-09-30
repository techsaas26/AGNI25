import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
}).single("file");

export const uploadMiddleware = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("Multer error while uploading", err);
      return res.status(400).json({
        message: "Multer error while uploading",
        error: err.message,
      });
    } else if (err) {
      console.log("Unknown error occured while uploading", err);
      return res.status(500).json({
        message: "Unknown error occured while uploading",
        error: err.message,
      });
    }
    next();
  });
};
