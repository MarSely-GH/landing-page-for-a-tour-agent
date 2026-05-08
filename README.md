# Лендинг турагента

Небольшой React-лендинг с теплой песочной цветовой схемой, вынесенными компонентами и отдельными файлами данных.

## Структура проекта

```text
components/
  Header.jsx
  Hero.jsx
  Advantages.jsx
  Destinations.jsx
  Reviews.jsx
  FAQ.jsx
  ContactForm.jsx
  Footer.jsx
  Card.jsx

styles/
  globals.css

data/
  destinations.js
  reviews.js

page.jsx
index.jsx
index.html
```

## Что за что отвечает

- `page.jsx` — только сборка страницы из секций (импорты компонентов).
- `index.jsx` — точка входа React, рендерит `Page`.
- `index.html` — минимальный HTML-контейнер с `#root`.
- `components/*` — отдельные блоки лендинга.
- `components/Card.jsx` — переиспользуемая карточка.
- `data/*` — массивы данных для направлений и отзывов.
- `styles/globals.css` — общие стили, тема, адаптивность.

## Как менять контент

- Направления: редактируйте `data/destinations.js`.
- Отзывы: редактируйте `data/reviews.js`.
- Тексты секций: соответствующие файлы в `components/`.

## Как менять дизайн

- Основные цвета и тени: CSS-переменные в `styles/globals.css` (`:root`).
- Отступы/сетка/адаптив: там же, блоки `.section`, `.grid-*`, media queries.

## Запуск

Сейчас в репозитории только исходники страницы.  
Если нужен запуск командой (`npm run dev`), добавьте сборщик (например, Vite) и `package.json`.
