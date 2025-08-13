# Creative Portfolio

A professional creative portfolio template built with React, designed to showcase creative work and personal projects.

## Project Type

**Portfolio** - Personal creative portfolio website showcasing work, skills, and contact information.

## Key Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern Portfolio Layout** - Clean and professional design for showcasing creative work
- **Project Gallery** - Dedicated sections for displaying portfolio projects
- **About Section** - Personal introduction and skills showcase
- **Contact Form** - Built-in contact form for client inquiries
- **Blog Section** - Blog functionality for sharing insights and updates
- **Service Pages** - Detailed service offerings presentation
- **Smooth Animations** - React-based animations and transitions
- **Mobile Optimized** - Touch-friendly navigation and mobile-first design

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Create React App
- **Styling**: SASS/CSS + Bootstrap 5
- **UI Components**: Material-UI Core & Icons
- **Routing**: React Router Dom v6
- **Animations**: React Reveal, React Animated CSS
- **Image Handling**: React Medium Image Zoom, React Fancybox
- **Carousel**: React Slick
- **Form Validation**: Simple React Validator
- **Notifications**: React Toastify
- **Database Integration**: Supabase (configured but optional)

## Project Structure

```
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── header/          # Header navigation component
│   │   ├── TenmplateContent/ # Main content components
│   │   │   ├── about/       # About section
│   │   │   ├── BlogSection/ # Blog listing
│   │   │   ├── ContactArea/ # Contact section
│   │   │   ├── footer/      # Footer component
│   │   │   ├── ProjectSection/ # Portfolio projects
│   │   │   └── ServiceSection/ # Services showcase
│   │   ├── MobileMenu/      # Mobile navigation
│   │   └── backToTop/       # Back to top button
│   ├── main-component/      # Main page components
│   │   ├── HomePage/        # Home page layout
│   │   ├── App/            # Main app component
│   │   └── router/         # Route configuration
│   ├── api/                # API data management
│   │   ├── blogs.js        # Blog data
│   │   ├── project.js      # Project data
│   │   └── service.js      # Service data
│   ├── images/             # Static image assets
│   ├── sass/               # SASS stylesheets
│   ├── fonts/              # Custom fonts
│   ├── css/                # CSS files
│   └── integrations/       # Third-party integrations
│       └── supabase/       # Supabase configuration
├── public/                 # Public assets
└── package.json           # Dependencies and scripts
```

## Page Functionality

- **Home (/)**: Main portfolio showcase with hero section, featured projects, and skills overview

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Removes create-react-app build dependency (irreversible)

## Database Integration

This template includes Supabase integration for potential future enhancements:
- Pre-configured client setup in `src/integrations/supabase/`
- Ready for contact form submissions, blog content management, or user interactions
- Environment variables support for database credentials

## Customization

The template uses a modular component structure making it easy to:
- Update content in the `src/api/` directory
- Modify styling in `src/sass/` files  
- Replace images in `src/images/` directory
- Add new pages by extending the router configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
