// Handlers/importHandler.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const { importExcelController } = require('../../Controllers/Excel/importExcelController');

const upload2 = multer({ dest: 'uploads/' }); // Configurar multer para guardar archivos subidos

const importExcelHandler = async (req, res) => {
  const filePath = req.file.path;

  const result = await importExcelController(filePath);

  if (result.success) {
    res.status(200).json({ success: true, message: result.message });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { importExcelHandler, upload2 };
