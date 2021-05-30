# Проект: Место на React
Данный проект представляет собой сайт, написанный с помощью JavaScript биботеки React с помощью [Create React App](https://github.com/facebook/create-react-app).
Реализована возможность регистрации и авторизации пользователя, в том числе мобильный вид сайта.

* Страница сайта расположена по адресу: https://izhubrov.github.io/mesto-react/.
* Собранный проект расположен по адресу: https://github.com/izhubrov/mesto-react.
* Применяемое API, сервер:  https://mesto.nomoreparties.co

___
## Макет сайта
Расположен в онлайн-сервисе для разработки интерфесов - графическом редакторе Figma по адресам:
* https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
* https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
* https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1
* https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1

## Применяемое API
https://mesto.nomoreparties.co/v1 для работы с карточками и профилем пользователя
https://auth.nomoreparties.co для регистрации и авторизации пользователя

___
## Как использовать

### Для начала
* Установите [Node.js](https://nodejs.org/en/download/)
* Установите [Git Bash для Windows OS](https://gitforwindows.org/)
* Склонируйте проект https://github.com/izhubrov/mesto-react.git

### Установка
* Установите необходимые зависимости из package.json

### Работа, запуск, деплой проекта из директории проекта
* Для локального запуска введите команду npm run start (Страница откроется по адресу [http://localhost:3000](http://localhost:3000) для просмотра в браузере).
* Для сборки проекта введите команду npm run build
* Для работы с gh-pages установите пакет gh-pages следующей командой npm install gh-pages --save-dev
* Для деплоя проекта введите команду npm run deploy

___
## Требования

### Требования к верстке
* Основным требованием при верстке сайта являлось его корректное отображение на различных разрешениях экрана с плавным появлением Popup форм редактирования профиля пользователя, добавления карточек и увеличением картинки. Необходимо было также реализовать верстку страниц логина и регистрации с Popup ошибок и успешной регистрации. Также необходимо было реализовать мобильный вид приложения. При загрузке должен показываться иконка загрузки.

### Требования к разработке на языке JavaScript 
* Возможность удаления карточек, лайка и увеличения изображения через Popup.
* Проверка на валидность полей ввода Popup с помощью встроенного API JavaScript.
* Возможность закрытия Popup с помощью нажатия клавиши Escape и клика на фон.
* Возможность создания новой карточки, редактирования профиля пользователя, проверка на валидность форм.
* Возможность регистрации, авторизации пользователя с сохранением в локальное хранилище данных для авторизации.

### Требования к сборке проекта
* Проект должен быть создан с помощью [Create React App](https://github.com/facebook/create-react-app).

___
## Применяемые технологии

### Применяемые технологии верстки
* Флекс-бокс верстка.
* Грид таблицы.
* Выразительные семантические теги (section, ul, footer).
* Позиционирование элементов (относительное, фиксированное, абсолютное, z-index).
* Относительные пути к файлам.
* Трансформация с плавностью перехода.
* Методология наименования классов CSS БЭМ Nested.
* Относительные размеры блоков.
* Вычисляемые значения (функция calc).
* Оптимизация шрифтов (сглаживание, подгонка размера текста, рендеринг).
* Метатег корректного масштабирования страницы (@media).
* Подключение локального шрифта Inter через директиву @font-face.

### Применяемые технологии программирования с импользованием библиотеки React
* Разметка страницы создается в JSX.
* Код разбит на функциональные компоненты.
* Используются хуки React.useState, React.useEffect, React.createContext.

### API
C помощью метода fetch и промисов (Promise).
* Осуществляется загрузка карточек с сервера, добавление и удаление карточек.
* Загружается и изменяются профиль и аватар пользователя с сервера.
* Загружаются и изменяются лайки пользователе.
* Осуществляетя регистрация и авторизация пользователя.
___
## Итог

Сайт получился отзывчивым (резиновым и адаптивным), корректно отображается на устройствах с разрешением от 320px и есть возможность изменять данные сайта с проверкой на валидность.
Проект реализован на React и создан с помощью create-react-app.
Проект взаимодействует с сервером.
Есть возможность авторизации и регистрации пользователя. Учетные данные пользователя сохраняются в локальном хранилище, повторный ввод для авторизации исключается.

