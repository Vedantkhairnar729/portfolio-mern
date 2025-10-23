const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection (commented out until you set up MongoDB)
/*
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
*/

// Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Portfolio API is running',
    version: '1.0.0',
    endpoints: {
      projects: '/api/projects',
      skills: '/api/skills',
      contact: '/api/contact',
      stats: '/api/stats'
    }
  });
});

// Project routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// Skills routes
const skillRoutes = require('./routes/skills');
app.use('/api/skills', skillRoutes);

// Stats route
app.get('/api/stats', (req, res) => {
  res.json({
    totalProjects: 20,
    activeCertifications: 20,
    cloudPlatforms: 3,
    blogPosts: 9,
    githubRepos: 50
  });
});

// Contact route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide all required fields' 
    });
  }
  
  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, message });
  res.json({ 
    success: true, 
    message: 'Thank you for reaching out! I will get back to you soon.' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}/api`);
});