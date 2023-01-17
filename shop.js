// const path = require('path');

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
// });

// module.exports = router;







// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });

// module.exports = router;









// const path = require('path');

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
// });

// module.exports = router;









const path = require('path');

const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/',productsController.getShopProducts);

module.exports = router;