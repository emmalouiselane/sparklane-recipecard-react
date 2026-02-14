import React from 'react';
import './RecipeCard.css';

// Constants for configuration
const MAX_RATING = 5;
const DEFAULT_STAR_COLOR = '#fbbf24';
const STAR_COUNT = 5;

// Helper function to validate image URLs for security
const isValidImageUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const parsedUrl = new URL(url, window.location.origin);
    
    // Allow only http, https, and data URLs
    const allowedProtocols = ['http:', 'https:', 'data:'];
    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      return false;
    }
    
    // For data URLs, allow only image formats
    if (parsedUrl.protocol === 'data:') {
      return url.startsWith('data:image/');
    }
        
    return true;
  } catch {
    // Invalid URL format
    return false;
  }
};

// Helper function to get the correct fallback image path
const getFallbackImagePath = (): string => {
  // For development, use public folder path
  if (process.env.NODE_ENV === 'development') {
    return '/no-image.jpg';
  }
  
  // For production, use the bundled image from node_modules
  try {
    // Import the fallback image path from the package
    return require('@sparklane.dev/sparklane-recipecard-react/dist/no-image.jpg');
  } catch {
    // Fallback to a simple data URI
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  }
};

export interface RecipeCardProps {
  name: string;
  image: string;
  rating: number | null;
  // Optional props
  recipeCardOverrideClassName?: string;
  emptyRatingPlaceholderText?: string;
  emptyRatingClassName?: string;
  zeroRatingPlaceholderText?: string;
  zeroRatingClassName?: string;
  starRatingColor?: string;
  showRatingNumber?: boolean;
  showRecipeButton?: boolean;
  recipeButtonClassName?: string;
  recipeButtonEvent?: () => void;
  advancedCustomContainer?: boolean;
  /**
   * Custom content to replace the default rating container.
   * WARNING: When using this prop, the default rating information with proper ARIA labels will be replaced.
   * This may impact AA compliance as screen readers will lose access to the rating information.
   * Ensure your custom content maintains accessibility standards if AA compliance is required.
   */
  advancedCustomContainerContent?: React.ReactNode;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  name, 
  image, 
  rating, 

  //Optional props with defaults
  recipeCardOverrideClassName,
  emptyRatingPlaceholderText = 'Not rated (yet!)',
  emptyRatingClassName = 'empty-rating',
  zeroRatingPlaceholderText = '0 (Oh no)',
  zeroRatingClassName = 'zero-rating',
  starRatingColor = DEFAULT_STAR_COLOR,
  showRatingNumber = true,
  showRecipeButton = false,
  recipeButtonClassName = 'default-button',
  recipeButtonEvent = () => {},
  advancedCustomContainer = false,
  advancedCustomContainerContent = null
}) => {
  // Helper functions (must be defined before hooks)
  const isValidRating = (rating: number | null): boolean => {
    return rating !== null && rating >= 0 && rating <= MAX_RATING;
  };

  const isZeroRating = (rating: number | null): boolean => {
    return rating === 0;
  };

  // Hooks must be called before any conditional returns
  const stars = React.useMemo(() => {
    if (!isValidRating(rating)) {
      return [];
    }

    const stars = [];
    const fullStars = Math.floor(rating!);
    const hasHalfStar = rating! % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = STAR_COUNT - fullStars - (hasHalfStar ? 1 : 0);

    for (let j = 0; j < emptyStars; j++) {
      stars.push(
        <span key={`empty-${j}`} className="star empty">
          ☆
        </span>
      );
    }

    return stars;
  }, [rating]);

  // Input validation (after hooks)
  if (!name || typeof name !== 'string') {
    console.error('RecipeCard: name prop is required and must be a string');
    return (
      <div className="recipe-card-error" style={{
        padding: '20px',
        border: '1px solid #dc2626',
        borderRadius: '8px',
        backgroundColor: '#fef2f2',
        color: '#dc2626',
        textAlign: 'center'
      }}>
        <h3>Invalid Recipe</h3>
        <p>Recipe name is required.</p>
      </div>
    );
  }

  if (!image || typeof image !== 'string') {
    console.error('RecipeCard: image prop is required and must be a string');
    return (
      <div className="recipe-card-error" style={{
        padding: '20px',
        border: '1px solid #dc2626',
        borderRadius: '8px',
        backgroundColor: '#fef2f2',
        color: '#dc2626',
        textAlign: 'center'
      }}>
        <h3>Invalid Recipe</h3>
        <p>Recipe image is required.</p>
      </div>
    );
  }

  if (rating !== null && (typeof rating !== 'number' || rating < 0 || rating > MAX_RATING)) {
    console.error('RecipeCard: rating must be null or a number between 0 and 5');
    return (
      <div className="recipe-card-error" style={{
        padding: '20px',
        border: '1px solid #dc2626',
        borderRadius: '8px',
        backgroundColor: '#fef2f2',
        color: '#dc2626',
        textAlign: 'center'
      }}>
        <h3>Invalid Recipe</h3>
        <p>Recipe rating must be between 0 and 5.</p>
      </div>
    );
  }

  return (
    <article className={recipeCardOverrideClassName || "recipe-card"} aria-labelledby={`recipe-name-${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="recipe-image-container">
        <img 
          src={isValidImageUrl(image) ? image : getFallbackImagePath()} 
          alt={name} 
          className="recipe-image"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const target = e.currentTarget;
            target.src = getFallbackImagePath();
            target.alt = `Image not available for ${name}`;
            // Update the parent article's aria-labelledby to reflect the image state
            const articleElement = target.closest('article');
            if (articleElement) {
              const recipeNameId = `recipe-name-${name.replace(/\s+/g, '-').toLowerCase()}`;
              articleElement.setAttribute('aria-describedby', `${recipeNameId} image-error`);
            }
          }}
        />
      </div>
      <div className="recipe-content">
        <h3 className="recipe-name" id={`recipe-name-${name.replace(/\s+/g, '-').toLowerCase()}`}>{name}</h3>

        {advancedCustomContainer && advancedCustomContainerContent ? advancedCustomContainerContent : 
        (<div className="recipe-rating-container">
          {isValidRating(rating) ? (
            <div className="recipe-rating" role="img" aria-label={`Rating: ${rating?.toFixed(1)} out of ${STAR_COUNT} stars`}>
              <div className="stars" aria-hidden="true" style={{ color: starRatingColor }}>
                {stars}
              </div>
              {
                isZeroRating(rating) ? (
                  <span className={zeroRatingClassName}>{zeroRatingPlaceholderText}</span>
                ) : (
                  showRatingNumber && <span className="rating-number" aria-hidden="true">{rating?.toFixed(1)}</span>
                )
              }
            </div>
          ) : (
            <div className="recipe-rating">
              <div className="stars">
                <span className={emptyRatingClassName}>{emptyRatingPlaceholderText}</span>
              </div>
            </div>
          )}

          {showRecipeButton && (
            <button 
              className={`recipe-button ${recipeButtonClassName}`} 
              onClick={recipeButtonEvent}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  recipeButtonEvent();
                }
              }}
              aria-label={`View recipe for ${name}`}
            >
              View Recipe
            </button>
          )}
        </div>)}

      </div>
    </article>
  );
};

export default RecipeCard;
