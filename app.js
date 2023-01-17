


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next) => {
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Add Product</button></form>');
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     console.log(req.body.title);
//     console.log(req.body.size);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });

// app.listen(3000);









// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });

// app.listen(3000);


















// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/admin',adminRoutes);
// app.use('/shop',shopRoutes);


// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });

// app.listen(3000);













// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

// app.listen(3000);










const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contact');
const sucessRoutes=require('./routes/sucess');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(sucessRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });
app.use(errorController.get404);

app.listen(3000);