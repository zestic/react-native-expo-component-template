# React Native Expo Component Template

A comprehensive starter template for creating React Native component libraries with Expo, pre-configured with Storybook, Builder Bob, and testing infrastructure.

![picture of storybook](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

## Features

This template comes pre-configured with:

- **📱 Expo** - Modern React Native development platform
- **📚 Storybook** - Component development and documentation (both on-device and web)
- **🔨 Builder Bob** - Library build tool for React Native packages
- **🧪 Testing** - Jest and React Native Testing Library setup
- **📦 TypeScript** - Full TypeScript support
- **🎨 Example Components** - Sample Button component with stories and tests

## Getting Started

### Installation

1. **Clone or use this template:**
   ```sh
   git clone https://github.com/zestic/react-native-expo-component-template.git my-component-library
   cd my-component-library
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Update package.json:**
   - Change the `name` field to your library name
   - Update `version`, `description`, and other metadata
   - Update the repository URL and author information

### Development

#### Running the Expo App

Start the Expo development server:

```sh
yarn start
```

#### Storybook Development

This template supports both on-device and web Storybook:

**On-Device Storybook:**
```sh
# Start on-device storybook
yarn storybook

# iOS specific
yarn storybook:ios

# Android specific
yarn storybook:android
```

**Web Storybook:**
```sh
# Start web storybook
yarn storybook:web

# Build web storybook
yarn storybook:build
```

If you add new stories, update the story loader:
```sh
yarn storybook:generate
```

#### Building Your Library

Build the library for distribution:
```sh
yarn library:build
```

Verify the build:
```sh
yarn library:verify
```

#### Testing

Run tests:
```sh
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## Project Structure

```
src/
├── components/          # Your component library
│   └── Button/         # Example component
│       ├── Button.tsx
│       ├── Button.stories.tsx
│       └── __tests__/
│           └── Button.test.tsx
└── index.tsx           # Main library export
```

## Creating New Components

1. Create a new component directory in `src/components/`
2. Add your component implementation
3. Create Storybook stories for documentation and testing
4. Write unit tests
5. Export your component from `src/index.tsx`

## Publishing

1. Build your library: `yarn library:build`
2. Update version in `package.json`
3. Publish to npm: `npm publish`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add tests for your changes
4. Ensure all tests pass
5. Submit a pull request
