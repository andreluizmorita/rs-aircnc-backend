const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) => {
      const name = path.basename(file.originalname);
      const ext = path.extname(file.originalname);

      callback(null, `${name}-${Date.now()}${ext}`);
    }
  })
}