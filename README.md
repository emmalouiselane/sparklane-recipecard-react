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
- �️ Accepts complete img elements for full control
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
        image={
          <img 
            src="https://example.com/image.jpg"
            alt="Your Recipe Name"
            loading="lazy"
          />
        }
        rating={4.5}
      />
  );
}
```

## Props

### Required Props

- `name` (string): The recipe name
- `image` (React.ReactElement<HTMLImageElement>): A complete `<img>` element for the recipe image
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
- **Rating Bounds**: Ensures rating values are within valid range (0-5)

## Examples

### Basic Usage

```tsx
<RecipeCard
  name="Classic Chocolate Chip Cookies"
  image={
    <img 
      src="https://example.com/cookies.jpg"
      alt="Classic Chocolate Chip Cookies"
    />
  }
  rating={4}
/>
```

### Custom Styling

```tsx
<RecipeCard
  name="Custom Recipe"
  image={
    <img 
      src="https://example.com/recipe.jpg"
      alt="Custom Recipe"
      style={{ borderRadius: '8px', border: '2px solid #fbbf24' }}
    />
  }
  rating={null}
  emptyRatingPlaceholderText="No reviews yet"
  emptyRatingClassName="text-gray-500 italic"
/>
```

### With Recipe Button

```tsx
<RecipeCard
  name="Recipe with Button"
  image={
    <img 
      src="https://example.com/recipe.jpg"
      alt="Recipe with Button"
      loading="lazy"
    />
  }
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
  image={
    <img 
      src="https://example.com/recipe.jpg"
      alt="Custom Star Color"
    />
  }
  rating={4.5}
  starRatingColor="#ff6b35"
/>
```

### Advanced Custom Container

```tsx
<RecipeCard
  name="Custom Layout"
  image={
    <img 
      src="https://example.com/recipe.jpg"
      alt="Custom Layout"
    />
  }
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
  image: (
    <img 
      src="https://example.com/image.jpg"
      alt="My Recipe"
    />
  ),
  rating: 4.5
};
```

## Image Customization

The component accepts complete `<img>` elements, giving you full control over image attributes:

- **src**: Image source URL
- **alt**: Alt text for accessibility (falls back to recipe name if not provided)
- **loading**: Lazy loading ("lazy", "eager")
- **style**: Inline styles for custom appearance
- **onError**: Custom error handling
- **className**: Additional CSS classes
- **All other img attributes**: width, height, crossOrigin, etc.

### Image Examples

```tsx
// Basic image
<RecipeCard
  name="Recipe"
  image={<img src="/image.jpg" alt="Recipe" />}
  rating={4}
/>

// Image with custom styling and lazy loading
<RecipeCard
  name="Styled Recipe"
  image={
    <img 
      src="/image.jpg" 
      alt="Styled Recipe"
      loading="lazy"
      style={{ borderRadius: '12px', border: '3px solid #fbbf24' }}
    />
  }
  rating={4.5}
/>

// Image with custom error handling
<RecipeCard
  name="Recipe with Fallback"
  image={
    <img 
      src="/potentially-broken-url.jpg" 
      alt="Recipe with Fallback"
      onError={(e) => {
        e.currentTarget.src = '/fallback-image.jpg';
      }}
    />
  }
  rating={3}
/>
```

## Security Features

The component includes several security measures:

- **Input Validation**: Validates all props to prevent injection attacks
- **Safe Fallbacks**: Uses secure fallback handling when needed

## Performance Optimizations

- **Memoized Star Rendering**: Uses React.useMemo for efficient star calculations
- **Optimized Re-renders**: Only re-renders when props actually change
- **Lazy Error Handling**: Error boundaries don't impact normal performance

## License

MIT © Emma Lane - 2026

## Repository

https://github.com/emmalouiselane/sparklane-recipecard-react
