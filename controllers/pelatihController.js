
const Pelatih = require('../models/pelatihModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
  const pelatih = await Pelatih.create(req.body);
  res.status(201).json(pelatih);
};

exports.getAll = async (req, res) => {
  const filter = {};
  if (req.query.kode) {
    filter.kode = String(req.query.kode).toUpperCase();
  }
  if (req.query.nama) {
    filter.nama = String(req.query.nama);
  }
  const data = await Pelatih.find(filter);
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Pelatih.findById(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};
