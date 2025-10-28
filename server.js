const express = require('express');
const app = express();
const port = 3000;

// Вказуємо Express використовувати EJS як шаблонізатор
app.set('view engine', 'ejs');
// Вказуємо, що файли шаблонів знаходяться у папці 'views'
app.set('views', './views'); 

// Дозволяємо доступ до статичних файлів (CSS, JS, зображення) у папці 'public'
app.use(express.static('public'));

// --- Маршрути (Routes) ---
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/dashboard.html', (req, res) => {
    res.render('dashboard'); 
});

// app.get('/global-trends.html', (req, res) => {
//     res.render('global-trends'); 
// });

// app.get('/profile.html', (req, res) => {
//     res.render('profile'); 
// });


// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер EJS працює на http://localhost:${port}`);
});