require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

exports.uploadPicture = async (req, res,next) => {

    try {
        const { tempFilePath } = req.files.archivo;
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
        const url = secure_url;
    
        res.json({ url });
      } catch (error) {
        res.json({ msg: "No se pudo subir la imagen del producto" });
        next();
      }
}