'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Berjalan", res)
};

//menampilkan data matakuliah
exports.matakuliah = function (req, res) {
    connection.query('SELECT matakuliah.id_matakuliah, matakuliah.mata_kuliah, matakuliah.sks, matakuliah.jadwal, dosen.nama_dosen, dosen.nip FROM `matakuliah` JOIN dosen WHERE matakuliah.id_dosen = dosen.id_dosen ORDER BY matakuliah.id_matakuliah', 
    function (error, rows, fileds) {
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};