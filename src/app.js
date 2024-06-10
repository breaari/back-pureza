const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./Routes/indexa.js');
const server = express();
const cors = require('cors');
const path = require('path');
const mercadopago = require("mercadopago");

mercadopago.configure({
 access_token: "TEST-5951207733967859-060918-50897be4996546a08192ecaec9a5d226-760102739",
 });

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use(cors({
  origin:  ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

server.use('/uploads', express.static(path.join(__dirname, 'uploads')));

server.use('/', routes);

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
