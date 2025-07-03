# Contributing to AI Selfie Prompt Generator

Thank you for your interest in contributing to the AI Selfie Prompt Generator! 🎉

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with React (helpful but not required)

### Local Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/ai-selfie-prompt-generator.git`
3. Navigate to the project: `cd ai-selfie-prompt-generator`
4. Open `index.html` in your browser

No build process needed! The app uses vanilla React with Babel transpilation.

## 🤝 How to Contribute

### 🐛 Reporting Bugs
- Use the [GitHub Issues](https://github.com/aaronvstory/ai-selfie-prompt-generator/issues) tab
- Include a clear description and steps to reproduce
- Add screenshots if applicable

### 💡 Suggesting Features
- Check existing [issues](https://github.com/aaronvstory/ai-selfie-prompt-generator/issues) first
- Create a new issue with the "enhancement" label
- Describe the feature and its benefits

### 🔧 Code Contributions

#### Areas for Improvement
- **New Background Options**: Add more diverse settings
- **Additional Lighting Conditions**: Seasonal or time-based lighting
- **Clothing Variations**: Beyond t-shirts (hoodies, dress shirts, etc.)
- **UI/UX Enhancements**: Better mobile experience, animations
- **Performance**: Optimization for faster loading
- **Accessibility**: Better screen reader support, keyboard navigation

#### Pull Request Process
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly in multiple browsers
4. Commit with clear messages: `git commit -m "Add new background options"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Create a Pull Request

#### Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Ensure mobile responsiveness
- Test in Chrome, Firefox, Safari, and Edge

## 📋 Development Guidelines

### File Structure
```
ai-selfie-prompt-generator/
├── index.html          # Main application
├── README.md          # Project documentation
├── LICENSE            # MIT License
├── CONTRIBUTING.md    # This file
├── .gitignore         # Git ignore rules
└── _config.yml        # GitHub Pages config
```

### Adding New Options

#### Background Options
1. Locate the `backgroundOptions` array in `index.html`
2. Add new entries with the format:
   ```javascript
   { value: 'description for prompt', label: '🎯 Display Name', category: 'Category' }
   ```
3. Test with different prompt combinations

#### Lighting Conditions
1. Find the `lightingOptions` array
2. Add new lighting with emoji icons and descriptive labels
3. Ensure compatibility with all background types

#### Prompt Templates
1. The `promptTemplates` object contains all prompt variations
2. Maintain consistency across gender/orientation/style combinations
3. Include realistic imperfections for authentic results
4. Test with actual AI image generation

### Testing Checklist
- [ ] All form selections work correctly
- [ ] Prompt generation completes successfully
- [ ] Copy to clipboard functionality works
- [ ] Mobile responsive design maintained
- [ ] No console errors
- [ ] Cross-browser compatibility

## 📝 Documentation

### README Updates
- Keep feature counts accurate
- Update screenshots if UI changes
- Maintain clear usage instructions

### Code Comments
- Explain complex prompt logic
- Document new feature additions
- Include examples for new options

## 🎯 Priority Areas

We're especially looking for contributions in:

1. **Accessibility Improvements**
   - Keyboard navigation
   - Screen reader support
   - High contrast mode

2. **Mobile Experience**
   - Touch-friendly interactions
   - Improved responsive design
   - Performance optimization

3. **New Content**
   - Background variations
   - Clothing options
   - Seasonal themes

4. **Technical Enhancements**
   - Error handling
   - Loading states
   - Progressive Web App features

## 💬 Community Guidelines

- Be respectful and inclusive
- Help newcomers get started
- Share knowledge and learn from others
- Focus on constructive feedback
- Celebrate successes together

## 🏷️ Labels

When creating issues or PRs, use these labels:
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `good first issue` - Great for newcomers
- `help wanted` - Extra attention needed
- `documentation` - README, comments, etc.
- `question` - Further information requested

## 📞 Questions?

- Open a [GitHub Discussion](https://github.com/aaronvstory/ai-selfie-prompt-generator/discussions)
- Create an issue with the `question` label
- Review existing documentation

## 🙏 Recognition

All contributors will be recognized in the project. Thank you for helping make AI selfie generation better for everyone!

---

**Happy contributing!** 🚀 