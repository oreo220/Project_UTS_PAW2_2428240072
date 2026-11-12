# RESTful API Pusat Kebugaran

## Deskripsi

RESTful API Pusat Kebugaran merupakan aplikasi backend yang dibuat untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Pengembangan Aplikasi Web II dengan Topik 16, yaitu Pusat Kebugaran.

Aplikasi ini digunakan untuk mengelola data anggota gym dan pelatih. Pengelolaan data anggota mencakup nomor anggota, nama, berat badan, paket keanggotaan, informasi kontak, serta informasi pelatih yang menangani anggota tersebut.

Aplikasi dikembangkan menggunakan Node.js dan Express.js sebagai backend, MongoDB sebagai database, serta Mongoose untuk mengelola model, schema, validasi, dan hubungan antar-data.

Pada aplikasi ini terdapat dua model, yaitu AnggotaGym sebagai model utama dan Pelatih sebagai model pendukung. Penerapan embedding digunakan untuk menyimpan informasi kontak berupa telepon dan email di dalam dokumen anggota. Sementara itu, referencing digunakan untuk menghubungkan anggota dengan data pelatih melalui field `pelatihId`.

## Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon
- Postman
- Git dan GitHub

## Cara Menjalankan Aplikasi

Pastikan Node.js dan MongoDB sudah tersedia sebelum menjalankan aplikasi.

**1. Masuk ke folder proyek**

```bash
cd project_uts_2428240072
```

**2. Install dependencies**

```bash
npm install
```

**3. Konfigurasi environment**

Pastikan file `.env` sudah tersedia dan berisi konfigurasi port serta koneksi MongoDB yang digunakan.

Contoh konfigurasi:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/uts_paw2
CORS_ORIGIN=http://localhost:5173
```

Sesuaikan `MONGODB_URI` dengan koneksi database yang digunakan pada komputer masing-masing.

**4. Jalankan aplikasi**

```bash
npm start
```

Untuk menjalankan aplikasi dalam mode pengembangan:

```bash
npm run dev
```

**5. Akses aplikasi**

Setelah server dan koneksi MongoDB berhasil dijalankan, API dapat diakses melalui:

```text
http://localhost:4000
```

Pengujian endpoint dilakukan menggunakan Postman.

## Endpoint API

### Pelatih

- `POST /pelatih` – Menambahkan data pelatih.
- `GET /pelatih` – Menampilkan seluruh data pelatih.

### AnggotaGym

- `POST /anggota-gym` – Menambahkan data anggota gym.
- `GET /anggota-gym` – Menampilkan seluruh data anggota gym.
- `GET /anggota-gym?paket=bulanan` – Menampilkan anggota berdasarkan paket keanggotaan.
- `GET /anggota-gym?sort=beratBadan` – Mengurutkan anggota berdasarkan berat badan secara menaik.
- `GET /anggota-gym/:id` – Menampilkan detail anggota berdasarkan ID beserta informasi pelatih.

## Pengujian yang Dilakukan

Pengujian aplikasi dilakukan menggunakan Postman untuk memastikan setiap endpoint dan fitur berjalan sesuai dengan kebutuhan.

Pengujian yang dilakukan meliputi:

1. **Pengujian penambahan data Pelatih:** Memastikan data pelatih dapat disimpan ke MongoDB melalui endpoint POST `/pelatih`.
2. **Pengujian pengambilan data Pelatih:** Memastikan seluruh data pelatih dapat ditampilkan melalui endpoint GET `/pelatih`.
3. **Pengujian penambahan data AnggotaGym:** Memastikan data anggota gym beserta informasi kontak dan referensi pelatih dapat disimpan melalui POST `/anggota-gym`.
4. **Pengujian pengambilan data AnggotaGym:** Memastikan seluruh data anggota dapat ditampilkan melalui GET `/anggota-gym`.
5. **Pengujian filtering:** Memastikan data anggota dapat difilter berdasarkan paket keanggotaan, seperti bulanan.
6. **Pengujian sorting:** Memastikan data anggota dapat diurutkan berdasarkan berat badan secara menaik.
7. **Pengujian detail anggota:** Memastikan detail anggota dapat ditampilkan berdasarkan ID dan informasi pelatih berhasil ditampilkan menggunakan `populate()`.
8. **Pengujian validasi data:** Menguji field wajib yang tidak diisi dan nilai berat badan yang tidak memenuhi ketentuan.
9. **Pengujian data duplikat:** Menguji penggunaan kode pelatih dan nomor anggota yang sudah terdaftar.
10. **Pengujian penanganan kesalahan:** Menguji ID yang tidak valid, data yang tidak ditemukan, dan endpoint yang tidak tersedia.

Pengujian dilakukan untuk memeriksa respons HTTP, validasi data, serta kesesuaian hasil API dengan data yang tersimpan di MongoDB.

## Repository GitHub

Source code proyek dapat diakses melalui repository berikut:

https://github.com/oreo220/Project_UTS_PAW2_2428240072