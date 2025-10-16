# 🏀 Basketball Scoreboard

A modern, interactive basketball scoreboard built with HTML, CSS, and JavaScript. This project replicates a digital scoreboard interface with a clean, professional design and smooth animations.

![Basketball Scoreboard](https://nba-basketball-scoreboard.netlify.app/)

## ✨ Features

- **Interactive Score Tracking**: Add 1, 2, or 3 points to either team with button clicks
- **Real-time Updates**: Scores update instantly with smooth animations
- **Keyboard Shortcuts**: Quick score updates using keyboard keys
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional design with hover effects and transitions
- **Score Reset**: Reset both scores to zero with a single keypress

## 🎮 How to Use

### Button Controls
- **+1, +2, +3 buttons**: Click to add points to the respective team
- **Hover Effects**: Buttons highlight when you hover over them

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `1`, `2`, `3` | Add 1, 2, or 3 points to HOME team |
| `7`, `8`, `9` | Add 1, 2, or 3 points to GUEST team |
| `R` | Reset both scores to 0 |

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start scoring! 🎯

```bash
# If you have a local server, you can run:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
basketball-scoreboard/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and layout
├── index.js            # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Scoreboard Background**: Dark blue-gray (`#212940`)
- **Outer Background**: Light green (`#E0F2E0`)
- **Score Numbers**: Bright red (`#FF3366`)
- **Text & Borders**: White (`#ffffff`)
- **Button Background**: Transparent with white borders

### Visual Elements
- **Digital Display**: Monospace font with red glow effect
- **Rounded Corners**: Modern, friendly appearance
- **Box Shadows**: Subtle depth and elevation
- **Smooth Animations**: Scale effects on score updates and button hovers
- **Responsive Layout**: Adapts to different screen sizes

## 🛠️ Technical Details

### HTML Structure
- Semantic HTML5 elements
- Proper accessibility attributes
- Clean, organized markup

### CSS Features
- Flexbox layout for responsive design
- CSS transitions and animations
- Media queries for mobile optimization
- Custom properties for consistent styling

### JavaScript Functionality
- Event-driven architecture
- Keyboard event listeners
- DOM manipulation for real-time updates
- Smooth animation effects

## 🔧 Customization

### Changing Initial Scores
Edit the initial values in `index.js`:
```javascript
let homeScore = 12;  // Change this value
let guestScore = 5;  // Change this value
```

### Modifying Colors
Update the color variables in `styles.css`:
```css
.scoreboard {
    background-color: #212940; /* Your color here */
}

.score-display span {
    color: #FF3366; /* Your color here */
}
```


**Happy Scoring! 🏀**
