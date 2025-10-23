# 🚀 Professional Portfolio Website# Portfolio MERN Stack Application



A modern, responsive portfolio website built with React, featuring a professional design with glassmorphism effects, smooth animations, and an intuitive user interface.A modern, full-stack portfolio website built with the MERN (MongoDB, Express, React, Node.js) stack.



![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?logo=react)## Features

![License](https://img.shields.io/badge/license-MIT-green)

- ✨ Modern and responsive design

## ✨ Features- 🎨 Beautiful animations and transitions

- 🚀 Fast performance

- **Modern UI/UX**: Clean design with professional color scheme (Indigo/Purple gradient)- 📱 Mobile-friendly

- **Responsive Design**: Fully responsive across all devices- 🔗 Backend API integration

- **Smooth Animations**: Animated components with typing effects- 💼 Projects showcase

- **Interactive Sections**:- 🛠️ Skills display

  - 🏠 Hero section with animated typing and floating badges- 📧 Contact form

  - 👤 About section with animated statistics

  - 💼 Projects showcase with live demos and GitHub links## Tech Stack

  - 🛠️ Skills display with progress bars

  - 📧 Contact form with social media links### Frontend

- **Performance Optimized**: Fast loading and smooth interactions- React

- Axios for API calls

## 🛠️ Technologies Used- React Scroll for smooth scrolling

- Typed.js for typing animations

- **React** 18.2.0 - UI Library- CSS3 with modern animations

- **Typed.js** - Typing animations

- **React Scroll** - Smooth scrolling### Backend

- **Font Awesome** - Icons- Node.js

- **CSS3** - Modern styling with glassmorphism- Express.js

- MongoDB (optional)

## 📦 Installation- CORS for cross-origin requests

- dotenv for environment variables

### Prerequisites

- Node.js (v14 or higher)## Installation & Setup

- npm or yarn

### Prerequisites

### Setup Steps- Node.js (v14 or higher)

- npm or yarn

1. **Clone the repository**

```bash### Backend Setup

git clone https://github.com/Vedantkhairnar729/portfolio-mern.git

cd portfolio-mern1. Navigate to the server directory:

``````bash

cd server

2. **Install dependencies**```

```bash

cd client2. Install dependencies:

npm install```bash

```npm install

```

3. **Start the development server**

```bash3. Create a `.env` file in the server directory (already created):

npm start```

```PORT=5000

MONGO_URI=mongodb://localhost:27017/portfolio

The application will open at `http://localhost:3000`NODE_ENV=development

```

## 🚀 Build for Production

4. Start the server:

```bash```bash

cd clientnpm start

npm run build```

```

Or for development with auto-restart:

This creates an optimized production build in the `build` folder.```bash

npm run dev

## 📁 Project Structure```



```The server will run on `http://localhost:5000`

portfolio-mern/

├── client/### Frontend Setup

│   ├── public/

│   │   └── index.html1. Navigate to the client directory:

│   ├── src/```bash

│   │   ├── components/cd client

│   │   │   ├── About.js```

│   │   │   ├── Contact.js

│   │   │   ├── Footer.js2. Install dependencies:

│   │   │   ├── Hero.js```bash

│   │   │   ├── Navbar.jsnpm install

│   │   │   ├── Projects.js```

│   │   │   └── Skills.js

│   │   ├── data/3. Start the development server:

│   │   │   ├── projects.js```bash

│   │   │   └── skills.jsnpm start

│   │   ├── App.js```

│   │   ├── App.css

│   │   └── index.jsThe application will open at `http://localhost:3000`

│   └── package.json

├── .gitignore## Running Both Servers

└── README.md

```### Option 1: Two Terminals



## 🎨 Customization**Terminal 1 (Backend):**

```bash

### Update Personal Informationcd server

npm start

1. **Projects**: Edit `client/src/data/projects.js````

2. **Skills**: Edit `client/src/data/skills.js`

3. **About Section**: Edit `client/src/components/About.js`**Terminal 2 (Frontend):**

4. **Contact Info**: Edit `client/src/components/Contact.js````bash

5. **Social Links**: Update in `Hero.js`, `Contact.js`, and `Footer.js`cd client

npm start

### Change Color Scheme```



Edit the CSS variables in `client/src/App.css`:### Option 2: PowerShell (Windows)



```css```powershell

:root {# Backend

  --primary-color: #6366F1;    /* Indigo */cd server ; npm start

  --secondary-color: #8B5CF6;   /* Purple */

  --accent-color: #06B6D4;      /* Cyan */# In another terminal

}cd client ; npm start

``````



## 🌐 Deployment## API Endpoints



### Deploy to Vercel- `GET /api` - API information

- `GET /api/projects` - Get all projects

1. Push your code to GitHub- `GET /api/projects/:id` - Get project by ID

2. Import project in Vercel- `GET /api/skills` - Get all skills

3. Set build settings:- `GET /api/stats` - Get portfolio statistics

   - **Build Command**: `cd client && npm run build`- `POST /api/contact` - Submit contact form

   - **Output Directory**: `client/build`

4. Deploy!## Project Structure



### Deploy to Netlify```

portfolio-mern/

1. Push your code to GitHub├── client/                 # React frontend

2. Connect repository to Netlify│   ├── public/

3. Set build settings:│   ├── src/

   - **Base directory**: `client`│   │   ├── components/    # React components

   - **Build command**: `npm run build`│   │   ├── App.js

   - **Publish directory**: `client/build`│   │   ├── App.css

4. Deploy!│   │   └── index.js

│   └── package.json

## 📄 License│

└── server/                # Node.js backend

This project is licensed under the MIT License.    ├── routes/           # API routes

    │   ├── projects.js

## 👤 Author    │   └── skills.js

    ├── server.js         # Main server file

**Vedant Khairnar**    ├── .env              # Environment variables

- GitHub: [@Vedantkhairnar729](https://github.com/Vedantkhairnar729)    └── package.json

- LinkedIn: [vedant-khairnar](https://www.linkedin.com/in/vedant-khairnar)```

- Email: vedantkhairnar041@gmail.com

## Customization

## 🙏 Acknowledgments

### Update Personal Information

- Design inspiration from modern portfolio websites

- Icons from Font Awesome1. **Hero Section**: Edit `client/src/components/Hero.js`

- Images from Unsplash   - Change name from "Vedant" to your name

   - Update social media links

---

2. **Projects**: Edit `server/routes/projects.js`

⭐ Star this repo if you like it!   - Add your own projects

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
