'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/matakuliah')
        .get(jsonku.matakuliah);
}

/*SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, 
mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks 
from krs JOIN matakuliah JOIN mahasiswa 
WHERE krs.id_matakuliah = matakuliah.id_matakuliah 
AND krs.id_mahasiswa = mahasiswa.id_mahasiswa 
ORDER BY mahasiswa.id_mahasiswa
*/