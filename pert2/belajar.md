# 🎓 Belajar HTML & CSS Bersama RevoU 🚀  

## 🎯 Tujuan Pembelajaran  
Setelah menyelesaikan materi ini, kamu akan mampu:  
✅ Memahami struktur dasar **HTML** dan fungsinya dalam pengembangan web.  
✅ Menggunakan berbagai metode **CSS** untuk mengatur tampilan website.  
✅ Menampilkan gambar di halaman web dengan beberapa cara.  
✅ Membuat struktur dasar UI dari sebuah website.  

---  

## 🔹 1. Apa Itu HTML?  
**HTML (HyperText Markup Language)** adalah bahasa standar yang digunakan untuk menyusun halaman web. HTML terdiri dari elemen-elemen yang membentuk struktur dan konten website.  

### 📌 Elemen Dasar dalam HTML  
Elemen HTML terdiri dari **tag pembuka**, **konten**, dan **tag penutup**. Contoh:  
```html  
<p>Ini adalah paragraf dalam HTML</p>  
```  

🔹 **Tag penting dalam HTML**:  
- `<h1>` - `<h6>` → Heading atau judul.  
- `<p>` → Paragraf teks.  
- `<a>` → Link atau tautan.  
- `<img>` → Gambar.  
- `<ul>` dan `<ol>` → Daftar tak berurutan dan berurutan.  
- `<table>` → Tabel.  
- `<div>` dan `<span>` → Elemen pembungkus untuk styling dan layout.  

### 📌 Struktur Dasar Halaman HTML  
```html  
<!DOCTYPE html>  
<html lang="id">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Belajar HTML</title>  
</head>  
<body>  
    <h1>Halo, Dunia!</h1>  
    <p>Ini adalah contoh dasar halaman HTML.</p>  
</body>  
</html>  
```  

---  

## 🔹 2. Struktur Elemen dalam HTML  
Setiap halaman HTML terdiri dari beberapa bagian utama:  

🔹 **`<html>`** → Elemen utama yang membungkus seluruh halaman web.  
🔹 **`<head>`** → Berisi metadata seperti judul halaman, stylesheet, dan script.  
🔹 **`<body>`** → Tempat di mana seluruh konten ditampilkan kepada pengguna.  

Contoh struktur elemen dalam HTML yang lebih kompleks:  
```html  
<header>  
    <h1>Judul Website</h1>  
</header>  

<nav>  
    <ul>  
        <li><a href="#">Beranda</a></li>  
        <li><a href="#">Tentang</a></li>  
        <li><a href="#">Kontak</a></li>  
    </ul>  
</nav>  

<main>  
    <article>  
        <h2>Artikel Utama</h2>  
        <p>Ini adalah contoh artikel dalam halaman web.</p>  
    </article>  
</main>  

<footer>  
    <p>Hak Cipta &copy; 2025</p>  
</footer>  
```  

---  

## 🔹 3. Metode Penulisan CSS 🎨  
CSS digunakan untuk mengatur tampilan halaman web. Ada tiga metode utama dalam menulis CSS:  

### 1️⃣ **Inline CSS** (Langsung dalam elemen HTML)  
Menulis CSS langsung dalam atribut elemen. Contoh:  
```html  
<p style="color: blue; font-size: 20px;">Teks berwarna biru</p>  
```  

### 2️⃣ **Internal CSS** (Di dalam `<style>` dalam `<head>`)  
```html  
<head>  
    <style>  
        p {  
            color: red;  
            font-size: 18px;  
        }  
    </style>  
</head>  
```  

### 3️⃣ **External CSS** (Menggunakan file CSS terpisah)  
File `styles.css`:  
```css  
p {  
    color: green;  
    font-size: 22px;  
}  
```  
Dipanggil di HTML dengan:  
```html  
<link rel="stylesheet" href="styles.css">  
```  

---  

## 🔹 4. Cara Menampilkan Gambar 🖼️  
HTML menyediakan beberapa cara untuk menampilkan gambar di halaman web:  

### ✅ **1. Menggunakan Gambar Lokal**  
```html  
<img src="gambar.jpg" alt="Deskripsi gambar" width="300">  
```  

### ✅ **2. Menggunakan SVG** (Grafik berbasis vektor)  
```html  
<svg width="100" height="100">  
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />  
</svg>  
```  

### ✅ **3. Menggunakan URL Gambar Eksternal**  
```html  
<img src="https://example.com/gambar.jpg" alt="Gambar dari URL" width="300">  
```  

---  

## 🔹 5. Struktur Dasar UI Website 🖥️  
Setiap website memiliki struktur UI sederhana yang terdiri dari:  
🔹 **Header** → Bagian atas yang biasanya berisi logo dan navigasi.  
🔹 **Navigation (Nav)** → Menu navigasi ke halaman lain.  
🔹 **Main Content** → Bagian utama yang menampilkan konten.  
🔹 **Sidebar** → Bagian samping untuk informasi tambahan.  
🔹 **Footer** → Bagian bawah yang biasanya berisi hak cipta dan kontak.  

Contoh UI sederhana menggunakan HTML & CSS:  
```html  
<header>  
    <h1>Website Sederhana</h1>  
</header>  

<nav>  
    <ul>  
        <li><a href="#">Home</a></li>  
        <li><a href="#">About</a></li>  
        <li><a href="#">Contact</a></li>  
    </ul>  
</nav>  

<main>  
    <h2>Selamat Datang!</h2>  
    <p>Ini adalah contoh website sederhana dengan HTML & CSS.</p>  
</main>  

<footer>  
    <p>Hak Cipta &copy; 2025</p>  
</footer>  
```  

---  

## 🎉 Kesimpulan  
Dengan memahami konsep-konsep di atas, kamu sudah memiliki dasar yang kuat dalam membangun website menggunakan **HTML & CSS**. Selanjutnya, kamu bisa memperdalam pemahaman tentang **JavaScript** untuk membuat website lebih interaktif! 🚀  
```

