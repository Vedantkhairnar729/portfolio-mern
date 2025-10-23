# Portfolio MERN Stack Application

A modern, full-stack portfolio website built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful animations and transitions
- 🚀 Fast performance
- 📱 Mobile-friendly
- 🔗 Backend API integration
- 💼 Projects showcase
- 🛠️ Skills display
- 📧 Contact form

## Tech Stack

### Frontend
- React
- Axios for API calls
- React Scroll for smooth scrolling
- Typed.js for typing animations
- CSS3 with modern animations

### Backend
- Node.js
- Express.js
- MongoDB (optional)
- CORS for cross-origin requests
- dotenv for environment variables

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory (already created):
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Running Both Servers

### Option 1: Two Terminals

**Terminal 1 (Backend):**
```bash
cd server
npm start
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
```

### Option 2: PowerShell (Windows)

```powershell
# Backend
cd server ; npm start

# In another terminal
cd client ; npm start
```

## API Endpoints

- `GET /api` - API information
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `GET /api/skills` - Get all skills
- `GET /api/stats` - Get portfolio statistics
- `POST /api/contact` - Submit contact form

## Project Structure

```
portfolio-mern/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── server/                # Node.js backend
    ├── routes/           # API routes
    │   ├── projects.js
    │   └── skills.js
    ├── server.js         # Main server file
    ├── .env              # Environment variables
    └── package.json
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `client/src/components/Hero.js`
   - Change name from "Vedant" to your name
   - Update social media links

2. **Projects**: Edit `server/routes/projects.js`
   - Add your own projects
   - Update images, links, and descriptions

3. **Skills**: Edit `server/routes/skills.js`
   - Add your skills and proficiencies

4. **Colors**: Edit CSS variables in `client/src/App.css`
   - Change primary color scheme
   - Customize gradients

## Deployment

### Backend
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables on hosting platform
- Connect to MongoDB Atlas for production database

### Frontend
- Deploy to Vercel, Netlify, or GitHub Pages
- Update API endpoint to production URL
- Build for production: `npm run build`

## Features to Add

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Resume download
- [ ] Email integration for contact form
- [ ] MongoDB database integration
- [ ] Admin panel for content management
- [ ] Testimonials section
- [ ] Animation on scroll

## License

MIT License - feel free to use this project for your own portfolio!

## Author

Vedant

---

**Happy Coding! 🚀**
