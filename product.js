const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct =(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct =(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};

exports.getShopProducts=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

exports.getContactus=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
  }

exports.postContactus=(req, res, next) => {
    console.log(req.body);
    res.redirect('/sucess');
  }

exports.getSucess=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
  }