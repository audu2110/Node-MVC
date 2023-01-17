// const path = require('path');

// const express = require('express');

// const router = express.Router();

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/add-product');
// });

// module.exports = router;




















// const express = require('express');

// const router = express.Router();

// router.get('/add-product', (req, res, next) => {
//   res.send(
//     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/shop');
// });

// module.exports = router;




// const path = require('path');

// const express = require('express');

// const router = express.Router();

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// module.exports = router;











const path = require('path');

const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;