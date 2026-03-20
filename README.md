# Miami Weather & News App

A beautiful, responsive web app showing current weather conditions and latest news for Miami, Florida.

## Features

- 🔐 **Secure Login** - Protected access with username/password authentication
- 🌤️ **Real-time Weather** - Current conditions, temperature, humidity, wind, and pressure
- 📰 **Miami News** - Latest local news and updates  
- 📱 **Responsive Design** - Works great on desktop and mobile
- 🔄 **Auto-refresh** - Weather updates every 15 minutes
- 🎨 **Beautiful UI** - Clean, modern design with glass-morphism effects

## Login Credentials

- **Username:** `vip`  
- **Password:** `vip123`

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js + Express
- **Weather API:** wttr.in (free, no API key required)
- **Styling:** Modern CSS with gradients and backdrop filters

## Installation

```bash
npm install
npm start
```

The app will be available at http://localhost:3000

## Deployment

For production deployment:

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Configure reverse proxy (nginx/Apache) to serve on desired path
4. Ensure curl is available on the system for weather API calls

## API Endpoints

- `GET /` - Main application page
- `GET /api/weather` - Current Miami weather data
- `GET /api/news` - Latest Miami news (sample data)

## Browser Support

- Chrome 88+
- Firefox 78+  
- Safari 14+
- Edge 88+

Built with ❤️ for Miami 🌴