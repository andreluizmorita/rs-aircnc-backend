const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) => {
      console.log(file);
      const name = path.parse(file.originalname).name;
      const ext = path.extname(file.originalname);
      console.log(name);
      console.log(ext);
      callback(null, `${name}-${Date.now()}${ext}`);
    }
  })
}