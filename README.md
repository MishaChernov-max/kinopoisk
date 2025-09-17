# Kinopoisk Clone 🎬

Клон Кинопоиска на React + TypeScript + Vite

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 16+
- npm или yarn

### Установка и запуск

1. **Клонирование репозитория**

```bash
git clone <ваш-репозиторий>
cd kinopoisk
```

2. **Установка зависимостей**

```bash
npm install
# или
yarn install
```

3. **Запуск development сервера**

```bash
npm run dev
# или
yarn dev
```

4. **Откройте в браузере**

```
http://localhost:3000
```

## 📁 Структура проекта

```
src/
├── components/     # React компоненты
├── types/         # TypeScript типы
├── Hooks/         # Кастомные хуки
├── pages/         # Страницы приложения
├── redux/         # Store и slices
├── api/           # API функции
└── assets/        # Статические файлы
```

## 🌟 Особенности

- React 18 + TypeScript
- Vite для быстрой сборки
- Redux Toolkit для состояния
- SCSS для стилей

## 🔧 Настройка

Перед запуском убедитесь, что у вас установлены:

- Node.js (версия 16 или выше)
- npm или yarn

## 📦 Основные зависимости

- `react` + `react-dom`
- `typescript`
- `reduxjs/toolkit`
- `react-redux`
- `sass`

## 🤝 Contributing

1. Форкните репозиторий
2. Создайте feature ветку (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
