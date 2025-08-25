# Avatar Showcase

An interactive avatar grid component built with Next.js, showcasing hover effects, animations, and dynamic user information generation.

## Features

- **Interactive Avatar Grid** - 8 avatars with unique hover effects
- **Smooth Animations** - CSS transitions and Framer Motion animations
- **Dynamic User Data** - Random names and roles generated for each avatar
- **Responsive Design** - Grid layout that adapts to different screen sizes
- **Accessibility First** - Semantic HTML, ARIA labels, and keyboard navigation
- **Modern UI** - Clean design with hover states and tooltips

## Live Demo

Visit the live showcase to see the avatars in action with their interactive hover effects and user information tooltips.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with avatar grid
│   └── globals.css         # Global styles
├── components/
│   ├── avatar.tsx          # Individual avatar component
│   └── avatar-title.tsx    # Tooltip component for user info
└── lib/
    ├── user-data-generator.ts  # Random name/role generator
    ├── unique-ramdom-array.ts  # Unique ID generator
    └── utils.ts               # Utility functions
```

## 🎨 How It Works

### Avatar Generation
- Each avatar gets a unique ID from a random array
- User data (name, role) is generated deterministically based on the ID
- This ensures consistent data for each avatar across page refreshes

### Interactive Features
- **Hover Effects**: Avatars scale and show tooltips on hover
- **Grid Animation**: Grid spacing adjusts on hover for dynamic layout
- **Tooltip Display**: User information appears with smooth animations
- **Keyboard Navigation**: Full keyboard support with focus management

### Data Generation
The system generates realistic professional data:
- **Names**: 32 diverse first names + 32 last names
- **Roles**: 24 professional roles (developers, designers, managers, etc.)
- **Distribution**: Uses mathematical distribution to ensure variety

## Component Architecture

### Avatar Component
- Handles individual avatar display and hover state
- Manages image loading and accessibility
- Supports both mouse and keyboard interactions

### AvatarTitle Component
- Displays user information tooltip
- Uses Framer Motion for smooth animations
- Generates user data on-demand

### User Data Generator
- Pure JavaScript implementation (no external dependencies)
- Deterministic generation for consistent results
- Easily extensible for additional data fields

## ♿ Accessibility Features

- **Semantic HTML** - Proper heading hierarchy and list structure
- **ARIA Labels** - Descriptive labels for screen readers
- **Keyboard Navigation** - Full tab support and focus management
- **Screen Reader Support** - Proper content announcements
- **High Contrast** - Accessible color schemes
