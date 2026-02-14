# SparkLane Recipe Card React Component

A reusable React component for displaying recipe cards with name, image, and rating.

## Features

- 📱 Responsive design with hover effects
- ⭐ Star rating display with half-star support
- 🎨 Customizable styling via CSS classes
- 🔧 TypeScript support with full type definitions
- 📦 Lightweight and dependency-free
- 🎯 Flexible rating states (null, zero, positive)
- 🔘 Optional recipe button with custom handler
- 🧩 Advanced custom container support
- ♿ WCAG AA compliant accessibility features
- 🔒 Built-in security with URL validation
- 🛡️ Comprehensive error handling and validation
- 🎯 Error boundary protection
- 📦 Proper npm package structure

## Installation

```bash
npm --% install @sparklane.dev/sparklane-recipecard-react
```

## Usage

```tsx
import RecipeCard from 'sparklane-recipecard-react';

function App() {
  return (
      <RecipeCard
        name="Your Recipe Name"
        image="https://example.com/image.jpg"
        rating={4.5}
      />
  );
}
```

## Props

### Required Props

- `name` (string): The recipe name
- `image` (string): URL to the recipe image (supports http, https, and data URLs)
- `rating` (number | null): Recipe rating (0-5) or null for unrated

### Optional Props

- `recipeCardOverrideClassName` (string): CSS class to override the main recipe card container (default: "recipe-card")
- `emptyRatingPlaceholderText` (string): Text shown when rating is null (default: "Not rated (yet!)")
- `emptyRatingClassName` (string): CSS class for null rating text (default: "empty-rating")
- `zeroRatingPlaceholderText` (string): Text shown when rating is 0 (default: "0 (Oh no)")
- `zeroRatingClassName` (string): CSS class for zero rating text (default: "zero-rating")
- `starRatingColor` (string): Color for filled stars (default: "#fbbf24")
- `showRatingNumber` (boolean): Whether to show the numeric rating value (default: true)
- `showRecipeButton` (boolean): Whether to show a "View Recipe" button (default: false)
- `recipeButtonClassName` (string): CSS class for the recipe button (default: "default-button")
- `recipeButtonEvent` (() => void): Click handler for the recipe button (default: () => {})
- `advancedCustomContainer` (boolean): Enable custom container content (default: false)
- `advancedCustomContainerContent` (React.ReactNode): Custom React node to replace rating container (default: "") - **WARNING:** May impact AA compliance as it replaces accessible rating information

## Error Handling

The component includes comprehensive error handling:

### Built-in Validation
- **Prop Validation**: Automatically validates required props and shows user-friendly error messages
- **URL Security**: Validates image URLs to prevent XSS attacks (only allows http, https, and data URLs)
- **Rating Bounds**: Ensures rating values are within valid range (0-5)

## Examples

### Basic Usage

```tsx
<RecipeCard
  name="Classic Chocolate Chip Cookies"
  image="https://example.com/cookies.jpg"
  rating={4}
/>
```

### Custom Styling

```tsx
<RecipeCard
  name="Custom Recipe"
  image="https://example.com/recipe.jpg"
  rating={null}
  emptyRatingPlaceholderText="No reviews yet"
  emptyRatingClassName="text-gray-500 italic"
/>
```

### With Recipe Button

```tsx
<RecipeCard
  name="Recipe with Button"
  image="https://example.com/recipe.jpg"
  rating={4.5}
  showRecipeButton={true}
  recipeButtonClassName="btn btn-primary"
  recipeButtonEvent={() => console.log('Recipe clicked!')}
/>
```

### Custom Star Color

```tsx
<RecipeCard
  name="Custom Star Color"
  image="https://example.com/recipe.jpg"
  rating={4.5}
  starRatingColor="#ff6b35"
/>
```

### Advanced Custom Container

```tsx
<RecipeCard
  name="Custom Layout"
  image="https://example.com/recipe.jpg"
  rating={null}
  advancedCustomContainer={true}
  advancedCustomContainerContent={
    <div className="custom-rating">
      <p>Custom rating display</p>
      <button>Rate this recipe</button>
    </div>
  }
/>
```

**⚠️ Accessibility Note:** When using `advancedCustomContainerContent`, the default rating information with proper ARIA labels will be replaced. This may impact WCAG AA compliance as screen readers will lose access to the rating information. Ensure your custom content maintains accessibility standards if AA compliance is required.

## Styling

The component includes default CSS styles that can be overridden or extended. The main CSS classes are:

- `.recipe-card`: Main container
- `.recipe-image-container`: Container for the recipe image
- `.recipe-image`: Recipe image
- `.recipe-content`: Container for recipe name and rating
- `.recipe-name`: Recipe title
- `.recipe-rating-container`: Container for rating and button
- `.recipe-rating`: Rating display container
- `.recipe-button`: Recipe button
- `.stars`: Star rating container
- `.star.full`: Filled star
- `.star.half`: Half-filled star
- `.star.empty`: Empty star
- `.rating-number`: Numeric rating display
- `.empty-rating`: Empty rating text style
- `.zero-rating`: Zero rating text style
- `.default-button`: Default button style

## Accessibility

This component is built with WCAG AA accessibility standards in mind:

- **Semantic HTML**: Uses `<article>` element for proper document structure
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support with Enter/Space key handling
- **Color Contrast**: All text meets WCAG AA 4.5:1 contrast ratio requirements
- **Focus Indicators**: Visible focus states for interactive elements
- **Screen Reader Support**: Proper announcements for ratings and interactions

### Accessibility Features

- Descriptive image alt text with fallback handling
- Rating information announced as "Rating: X.X out of 5 stars"
- Button labels include recipe context for better understanding
- Focus indicators with proper contrast and visual feedback
- Semantic markup for better assistive technology support

### Important Accessibility Considerations

**⚠️ Advanced Custom Container:** When using the `advancedCustomContainerContent` prop, the default rating container with proper ARIA labels will be completely replaced. This may impact WCAG AA compliance as screen readers will lose access to the rating information. If you use this feature, ensure your custom content maintains accessibility standards and provides equivalent information to assistive technologies.

## TypeScript Support

This component is built with TypeScript and includes full type definitions. All props are properly typed for excellent IDE support and type safety.

```tsx
import RecipeCard, { RecipeCardProps } from 'sparklane-recipecard-react';

// Use the interface for type safety
const recipeData: RecipeCardProps = {
  name: "My Recipe",
  image: "https://example.com/image.jpg",
  rating: 4.5
};
```

## Security Features

The component includes several security measures:

- **URL Validation**: Only allows safe image URLs (http, https, data protocols)
- **XSS Prevention**: Validates and sanitizes image sources
- **Safe Fallbacks**: Uses secure fallback images when URLs fail
- **Input Validation**: Validates all props to prevent injection attacks

## Performance Optimizations

- **Memoized Star Rendering**: Uses React.useMemo for efficient star calculations
- **Optimized Re-renders**: Only re-renders when props actually change
- **Lazy Error Handling**: Error boundaries don't impact normal performance
- **Efficient Image Loading**: Validates URLs before loading to prevent unnecessary requests

## License

MIT © Emma Lane - 2026

## Repository

https://github.com/emmalouiselane/sparklane-recipecard-react
