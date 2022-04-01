const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  console.log(req.user);
  if(!req.user) {
    res.redirect('/noPermission');
  } else {
    res.render('logged', {profilFullName: req.user.displayName, profilImage: req.user.photos[0].value});
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if(!req.user) {
    res.redirect('/noPermission');
  } else {
    res.render('profile');
  }
});

router.get('/profile/settings', (req, res) => {
  if(!req.user) {
    res.redirect('/noPermission');
  } else {
    res.render('settings');
  }
});

module.exports = router;
