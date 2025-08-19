# React Login & Analytics Dashboard

A simple, modern React application built with Vite that demonstrates authentication and data visualization.

## Features

### 🔐 Authentication
- **Login Form** with email and password
- **Token Storage** in localStorage
- **Protected Routes** - redirects to login if not authenticated
- **Logout Functionality** with session cleanup

### 📊 Analytics Dashboard
- **Pie Chart** showing completed vs pending todos
- **Bar Chart** displaying todos per user
- **Summary Statistics** with key metrics
- **Responsive Design** that works on all devices

### 🎨 UI/UX
- **Clean, Modern Design** with Bootstrap-inspired styling
- **Responsive Layout** for mobile and desktop
- **Loading States** and error handling
- **Navigation Bar** with active route highlighting

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Recharts** - Beautiful, composable charting library
- **CSS3** - Custom styling with modern features

## API Endpoints Used

- **Login**: `https://reqres.in/api/login` (POST)
- **Todos Data**: `https://jsonplaceholder.typicode.com/todos` (GET)

## Demo Credentials

```
Email: eve.holt@reqres.in
Password: cityslicka
```

### Demo Mode
The app includes a **demo mode** that bypasses the external API for testing purposes. This is useful when:
- The reqres.in API is temporarily down
- You want to test the app without internet dependency
- You're demonstrating the application

**To enable/disable demo mode:**
1. Open `src/contexts/AuthContext.jsx`
2. Change `const DEMO_MODE = true;` to `const DEMO_MODE = false;`
3. Open `src/components/Login.jsx`
4. Change `const DEMO_MODE = true;` to `const DEMO_MODE = false;`
5. Save both files - the app will automatically switch to real API calls

**Demo mode features:**
- ✅ Simulates API delay for realistic experience
- ✅ Validates demo credentials locally
- ✅ Stores mock token in localStorage
- ✅ Same UI/UX as real authentication
- ✅ Easy to toggle on/off

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or download** the project files

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          # Login form component
│   ├── Dashboard.jsx      # Welcome dashboard
│   ├── Analytics.jsx      # Charts and data visualization
│   └── Navbar.jsx         # Navigation component
├── contexts/
│   └── AuthContext.jsx    # Authentication state management
├── App.jsx                # Main app with routing
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## How It Works

### Authentication Flow
1. User enters credentials on login page
2. App sends POST request to reqres.in API
3. On success, token is stored in localStorage
4. User is redirected to protected dashboard
5. All subsequent requests check for valid token

### Protected Routes
- Routes are wrapped in `ProtectedRoute` component
- Unauthenticated users are redirected to `/login`
- Authenticated users trying to access `/login` are redirected to `/dashboard`

### Data Visualization
- Analytics page fetches todos data from JSONPlaceholder API
- Data is processed to create chart-friendly formats
- Pie chart shows completion status distribution
- Bar chart shows todos count per user
- Summary cards display key metrics

## Key Features Explained

### Simple & Clean Code
- **Minimal Complexity**: Each component has a single responsibility
- **Clear Structure**: Easy to understand and maintain
- **Modern Patterns**: Uses React hooks and functional components
- **No Over-engineering**: Only essential features implemented

### Responsive Design
- **Mobile-First**: Works perfectly on all screen sizes
- **CSS Grid**: Modern layout system for charts
- **Flexbox**: Flexible navigation and form layouts
- **Media Queries**: Adaptive styling for different devices

### Error Handling
- **Network Errors**: Graceful handling of API failures
- **Form Validation**: Client-side validation with user feedback
- **Loading States**: Clear indication of data fetching
- **Fallback UI**: Appropriate messages when things go wrong

## Customization

### Styling
- Modify `src/index.css` to change colors, fonts, and layout
- All styles use CSS custom properties for easy theming
- Responsive breakpoints are clearly defined

### Adding Features
- **New Routes**: Add to `App.jsx` routing configuration
- **New Charts**: Extend `Analytics.jsx` with additional Recharts components
- **New API Calls**: Follow the pattern in existing components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
