# 🎬 Moviechill

> A modern, fast, and responsive movie discovery application built with React and powered by The Movie Database (TMDB) API.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF.svg)](https://vitejs.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220.svg)](https://pnpm.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🌟 Features

- **🔍 Smart Search** - Quickly find movies by title with autocomplete suggestions
- **🎯 Discover** - Browse popular, trending, and top-rated movies
- **📊 Categories** - Explore movies by genre and release year
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast** - Built with Vite for instant hot module replacement
- **🎨 Modern UI** - Clean and intuitive interface with Bootstrap 5 and Styled Components
- **📖 Detailed Info** - View comprehensive movie details, cast, ratings, and more

## 🖼️ Screenshots

![Homepage](https://raw.githubusercontent.com/arindampradhan/moviechill/master/public/images/demo/1.png)
![Movie Details](https://raw.githubusercontent.com/arindampradhan/moviechill/master/public/images/demo/2.png)
![Search](https://raw.githubusercontent.com/arindampradhan/moviechill/master/public/images/demo/3.png)
![Discover](https://raw.githubusercontent.com/arindampradhan/moviechill/master/public/images/demo/4.png)
![Cast Info](https://raw.githubusercontent.com/arindampradhan/moviechill/master/public/images/demo/5.png)

## 🚀 Live Demo

Check out the live demo: [moviechill.netlify.com](https://moviechill.netlify.com/)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Next generation frontend tooling
- **MobX** - Simple, scalable state management
- **React Router v4** - Declarative routing for React

### Styling
- **Bootstrap 5** - Popular CSS framework
- **Styled Components** - CSS-in-JS for component styling
- **Sass** - CSS preprocessor for better styling workflow
- **Animate.css** - Cross-browser CSS animations

### Additional Libraries
- **Axios** - Promise-based HTTP client
- **React Helmet** - Document head manager
- **React Slick** - Carousel component
- **React Select** - Flexible select input control

### Build Tools
- **pnpm** - Fast, disk space efficient package manager
- **Vite** - Lightning-fast build tool

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **pnpm** 10.x or higher (Install with `npm install -g pnpm`)
- **Git** ([Download](https://git-scm.com/))

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/arindampradhan/moviechill.git
cd moviechill
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure API

The app uses The Movie Database (TMDB) API. The API key is already included in `src/utils/constants.js` for demo purposes.

For production use, you should:
1. Get your own API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Update the `API_KEY` in `src/utils/constants.js`

```javascript
// src/utils/constants.js
export const API_KEY = 'your_api_key_here';
export const API_URL = 'https://api.themoviedb.org/3';
export const DEFAULT_LANG = 'en-US';
```

### 4. Run the development server

```bash
pnpm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Starts the development server with hot reload |
| `pnpm run build` | Creates an optimized production build |
| `pnpm run preview` | Locally preview the production build |

## 📁 Project Structure

```
moviechill/
├── public/              # Static files
│   ├── images/         # Image assets
│   ├── favicon.ico     # Favicon
│   └── manifest.json   # PWA manifest
├── src/
│   ├── api.js          # API functions
│   ├── index.js        # App entry point
│   ├── components/     # Reusable components
│   ├── containers/     # Page components with routing
│   ├── styles/         # Global styles and themes
│   └── utils/          # Utility functions and constants
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
└── README.md           # Project documentation
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/arindampradhan/moviechill)

#### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

#### Automatic Deployment

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect the configuration and deploy

### Deploy to Netlify

1. Build the project:
```bash
pnpm run build
```

2. Deploy the `build` folder to Netlify

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## 🔑 Environment Variables

The API key is currently hardcoded in the source. For better security in production:

1. Create a `.env` file in the root directory
2. Add your environment variables:
```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_API_URL=https://api.themoviedb.org/3
```

3. Update `src/utils/constants.js` to use environment variables:
```javascript
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const API_URL = import.meta.env.VITE_TMDB_API_URL;
```

## 🐛 Troubleshooting

### Port already in use

If port 3000 is in use, Vite will automatically try the next available port (3001, 3002, etc.)

### Build fails

1. Clear the cache:
```bash
rm -rf node_modules .pnpm-store
pnpm install
```

2. Clear Vite cache:
```bash
rm -rf node_modules/.vite
pnpm run build
```

### Sass deprecation warnings

The warnings about Sass deprecations are from Bootstrap 5 and won't affect functionality. They'll be resolved when Bootstrap updates to Dart Sass 2.0.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Create React App](https://create-react-app.dev/) (originally), now migrated to [Vite](https://vitejs.dev/)
- Icons from [Font Awesome](https://fontawesome.com/)

## 📧 Contact

Arindam Pradhan - [@arindampradhan](https://github.com/arindampradhan)

Project Link: [https://github.com/arindampradhan/moviechill](https://github.com/arindampradhan/moviechill)

---

<div align="center">
  <sub>Built with ❤️ by Arindam Pradhan</sub>
</div>
