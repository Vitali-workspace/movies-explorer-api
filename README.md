# 🎬 Приложение Movies Explorer (Backend)

🎬 Backend часть приложения "Movies Explorer" для поиска фильмов.

> [!NOTE]
> [Ссылка на Frontend репозиторий](https://github.com/Vitali-workspace/diplom-server-frontend)

<h2>&#10032; Основные функции</h2>

- Регистрация пользователя 
- Поиск фильмов
- Фильтрация короткометражных фильмов
- Сохранение фильмов в базе данных
- Удаление фильма в базе данных
- Изменение почты и пароля пользователя

<h2>&#10032; Используемые технологии</h2>

> [!IMPORTANT]
> - JavaScript
> - NodeJS
> - Express.js
> - Мongoose
> - MongoDB
> - Winston
> - Celebrate
> - JSON Web Token

<h2>&#10032; Команды для установки приложения</h2>

#### Установка зависимостей

```
npm i
```
#### Запуск

```
npm run start
```

<h2>&#10032; Примеры типов данных для запросов</h2>

### Создание фильма (post-запрос): 
```
https://api.diplom.vitali.nomoredomains.club/movies
```

```json
{"country": "USA",
"director": "Funken",
"duration": "114",
"year": "1988",
"description": "Funken film",
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"trailerLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"movieId": "185759318403756309353299",
"nameRU": "Ханкен",
"nameEN": "Hanken"}
```

### Изменение данных пользователя (patch-запрос):
```
https://api.diplom.vitali.nomoredomains.club/users/me
```

```json
{"name":"Rename", "email": "testemail@gmail.com"}
```

### Удаление фильма созданного пользователем (delete-запрос):
```
https://api.diplom.vitali.nomoredomains.club/movies/{movieId}
```

### Выход из аккаунта (post-запрос):
```
https://api.diplom.vitali.nomoredomains.club/signout
```

### Вход в аккаунт (post-запрос):
```
https://api.diplom.vitali.nomoredomains.club/signin
```

```json
{"email": "testemail@gmail.com", "password": "pass343456"}
```

### Регистрация нового пользователя (post-запрос):
```
https://api.diplom.vitali.nomoredomains.club/signup
```

```json
{"name":"Newname", "email": "newemail@gmail.com", "password": "pass343456"}
```
