# React Login & Analytics Dashboard

A simple, modern React application built with Vite that demonstrates authentication and data visualization with an interactive demo mode toggle.

## Features

### 🔐 Authentication
- **Login Form** with email and password validation
- **Token Storage** in localStorage with automatic session restoration
- **Protected Routes** - redirects to login if not authenticated
- **Logout Functionality** with complete session cleanup
- **Interactive Demo Mode Toggle** - switch between demo and real API modes

### 📊 Analytics Dashboard
- **Pie Chart** showing completed vs pending todos distribution
- **Bar Chart** displaying todos count per user
- **Summary Statistics** with key metrics (total, completed, pending, unique users)
- **Responsive Design** that works seamlessly on all devices
- **Error Handling** with retry functionality for failed API calls

### 🎨 UI/UX
- **Clean, Modern Design** with gradient backgrounds and smooth animations
- **Responsive Layout** optimized for mobile and desktop
- **Loading States** with animated spinners
- **Navigation Bar** with active route highlighting
- **Interactive Toggle** with hover effects and tooltips

## Tech Stack

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM v6** - Client-side routing with protected routes
- **Recharts** - Beautiful, composable charting library
- **Context API** - Global state management for authentication
- **CSS3** - Custom styling with modern features and animations

## API Endpoints Used

- **Login**: `https://reqres.in/api/login` (POST)
- **Todos Data**: `https://jsonplaceholder.typicode.com/todos` (GET)

## Demo Credentials

```
Email: eve.holt@reqres.in
Password: cityslicka
```

## 🚀 Demo Mode Toggle

The app features an **interactive demo mode toggle** that allows you to switch between demo and real API modes without touching any code!

### How to Use the Toggle

1. **Look for the toggle button** in the top-right corner of the login page
2. **🌐 Icon** = Demo Mode ON (green button)
3. **🔧 Icon** = Demo Mode OFF (gray button)
4. **Click the toggle** to switch between modes
5. **Hover over the button** to see a tooltip with current status

### Demo Mode Features

**When Demo Mode is ON (🌐):**
- ✅ **Instant Login**: No API calls, immediate authentication
- ✅ **Simulated Delay**: 500ms delay for realistic experience
- ✅ **Local Validation**: Credentials checked locally
- ✅ **Mock Token**: Stores demo token in localStorage
- ✅ **Visual Indicator**: "Demo Mode Active" badge on login page

**When Demo Mode is OFF (🔧):**
- ✅ **Real API Calls**: Uses actual reqres.in API
- ✅ **Network Validation**: Real authentication process
- ✅ **Error Handling**: Comprehensive API error management
- ✅ **Production Ready**: Same behavior as live deployment

### Benefits of the Toggle

- 🎯 **No Code Changes**: Switch modes instantly without editing files
- 🔄 **Real-time Switching**: Changes take effect immediately
- 👀 **Visual Feedback**: Clear indication of current mode
- 🧪 **Easy Testing**: Perfect for demonstrations and testing
- 🛡️ **Fallback Option**: Works when external APIs are down

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
│   ├── Login.jsx              # Login form with demo toggle
│   ├── Dashboard.jsx          # Welcome dashboard
│   ├── Analytics.jsx          # Charts and data visualization
│   ├── Navbar.jsx             # Navigation component
│   └── DemoModeToggle.jsx     # Interactive demo mode toggle
├── contexts/
│   └── AuthContext.jsx        # Authentication state management
├── App.jsx                    # Main app with routing
├── main.jsx                   # App entry point
└── index.css                  # Global styles and animations
```

## How It Works

### Authentication Flow
1. **User enters credentials** on login page
2. **Demo mode check**: App checks current toggle state
3. **Demo Mode ON**: Local validation with simulated delay
4. **Demo Mode OFF**: Real API call to reqres.in
5. **Token storage**: Success token stored in localStorage
6. **Redirect**: User redirected to protected dashboard

### Protected Routes
- Routes are wrapped in `ProtectedRoute` component
- Unauthenticated users are redirected to `/login`
- Authenticated users trying to access `/login` are redirected to `/dashboard`
- Session persistence across browser refreshes

### Data Visualization
- Analytics page fetches todos data from JSONPlaceholder API
- Data is processed to create chart-friendly formats
- Pie chart shows completion status distribution
- Bar chart shows todos count per user
- Summary cards display key metrics
- Comprehensive error handling with retry options

## Key Features Explained

### Interactive Demo Mode
- **State Management**: Uses React Context for global demo mode state
- **Toggle Function**: `toggleDemoMode()` switches between modes
- **Visual Feedback**: Different icons and colors for each mode
- **Tooltip System**: Hover effects with mode descriptions
- **Persistent State**: Mode preference maintained during session

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
- **Retry Mechanisms**: Easy recovery from temporary failures

## Customization

### Styling
- Modify `src/index.css` to change colors, fonts, and layout
- All styles use modern CSS features for smooth animations
- Responsive breakpoints are clearly defined
- Toggle button styles can be customized in `DemoModeToggle.jsx`

### Adding Features
- **New Routes**: Add to `App.jsx` routing configuration
- **New Charts**: Extend `Analytics.jsx` with additional Recharts components
- **New API Calls**: Follow the pattern in existing components
- **Demo Mode Integration**: Use `demoMode` state from AuthContext

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Demo Mode Issues
- **Toggle not visible**: Make sure you're on the login page
- **Mode not switching**: Check browser console for errors
- **Login not working**: Verify demo credentials are correct

### API Issues
- **Network errors**: Try switching to demo mode
- **Authentication failures**: Check if reqres.in API is accessible
- **Data loading issues**: Analytics page has retry functionality

## License

This project is open source and available under the MIT License.

---

**🎉 Ready to explore?** Start the development server and try the interactive demo mode toggle on the login page!
