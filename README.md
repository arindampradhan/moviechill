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

### 3. Configure TMDB API

The app uses The Movie Database (TMDB) API. You need to get your own API Read Access Token:

1. **Create a TMDB account** at [themoviedb.org](https://www.themoviedb.org/signup)
2. **Get your API Read Access Token**:
   - Go to [TMDB API Settings](https://www.themoviedb.org/settings/api)
   - Click "Create" and follow the steps to get your API key
   - Copy the **API Read Access Token** (not the API Key v3)
3. **Create a `.env` file** in the root directory:

```bash
cp .env.example .env
```

4. **Add your token** to the `.env` file:

```env
VITE_TMDB_ACCESS_TOKEN=your_tmdb_api_read_access_token_here
```

⚠️ **Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

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

This app uses TMDB's Bearer Token authentication. Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_ACCESS_TOKEN` | TMDB API Read Access Token | Yes |

Get your API Read Access Token from [TMDB API Settings](https://www.themoviedb.org/settings/api).

**For Vercel/Netlify deployments**, add the `VITE_TMDB_ACCESS_TOKEN` environment variable in your deployment settings.

## 🐛 Troubleshooting

### API not working / Movies not loading

If the API isn't working:
1. Verify you have a `.env` file with `VITE_TMDB_ACCESS_TOKEN`
2. Ensure you're using the **API Read Access Token** (not the API Key v3)
3. Check the browser console for error messages
4. Restart the dev server after adding/changing environment variables

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
