const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'public/uploads/')        // nơi lưu trữ ảnh up vô
  },
  filename: function(req, file, cb){    // đặt tên cho file ảnh 
    // vì phải có tên độc quyền nên settime cho tên
    cb(null, Date.now() + path.extname(file.originalname)) 
    // khúc extname cái tên file ở cuối như là .txt hay .jpg
    
  }
})

const fileTypes = /jpg|jpeg|png/   // xác định cái loại mà cho phép
const fileFilter = (req, file, cb) => {
  // gọi cái tên cuối ra để test 
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  // test mimetype: 
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true); // chap nhan file
  } else {
    cb(new Error('Only images are allowed')); // ko chap nhan file
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;