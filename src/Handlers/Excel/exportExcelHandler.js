const { exportExcelController } = require('../../Controllers/Excel/exportExcelController');

const exportExcelHandler = async (req, res) => {
  const result = await exportExcelController();

  if (result.success) {
    res.setHeader('Content-Disposition', 'attachment; filename=productos.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(result.buffer);
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { exportExcelHandler };
