const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const upload = multer({ 
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename(req, file, callback) {
      const fileName = `${uuidv4()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
})
module.exports = upload