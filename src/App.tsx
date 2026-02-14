import React from 'react';
import RecipeCard from './RecipeCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SparkLane Recipe Card Component - Demo</h1>
        <p>A reusable React component built by Spark Lane Dev for displaying recipe cards</p>
      </header>
      
      <main className="App-main">
        <div className="demo-section">
          <h2>Basic Usage</h2>
          <div className="demo-grid">
            <RecipeCard
              name="Classic Chocolate Chip Cookies"
              image="/no-image.jpg"
              rating={4}
            />
            
            <RecipeCard
              name="Perfect Pasta Primavera"
              image="/no-image.jpg"
              rating={4.5}
            />
            
            <RecipeCard
              name="Creamy Mushroom Risotto"
              image="/no-image.jpg"
              rating={0}
            />
            
            <RecipeCard
              name="Margherita Pizza"
              image="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=300&h=200&fit=crop"
              rating={null}
            />
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Optional Props Usage</h2>
          <div className="demo-grid">
            <RecipeCard
              name="Custom Empty Rating"
              image="/no-image.jpg"
              rating={null}
              emptyRatingPlaceholderText="No reviews yet"
              emptyRatingClassName="custom-empty"
            />
            
            <RecipeCard
              name="Custom Zero Rating"
              image="/no-image.jpg"
              rating={0}
              zeroRatingPlaceholderText="Needs improvement!"
              zeroRatingClassName="custom-zero"
            />
            
            <RecipeCard
              name="Custom Recipe Card Override"
              image="/no-image.jpg"
              rating={4.5}
              recipeCardOverrideClassName="custom-recipe-card"
            />
            
            <RecipeCard
              name="Custom Star Rating Color"
              image="/no-image.jpg"
              rating={4.5}
              starRatingColor="#ff6b35"
            />
            
            <RecipeCard
              name="Custom Recipe Button"
              image="/no-image.jpg"
              rating={4.5}
              showRatingNumber={false}
              showRecipeButton={true}
              recipeButtonClassName="default-button"
              recipeButtonEvent={() => alert('Recipe button clicked!')}
            />
            
            <RecipeCard
              name="Advanced Custom Template"
              image="/no-image.jpg"
              rating={null}
              advancedCustomContainer={true}
              advancedCustomContainerContent={
                <div className="custom-container">
                  <p>This is a custom container!</p>
                  <small style={{color: '#666', fontSize: '0.8em'}}>Note: Using custom containers may impact AA compliance</small>
                </div>
              }
            />
          </div>
        </div>
        
        <div className="usage-section">
          <h2>Installation & Usage</h2>
          <div className="code-block">
            <pre>{`npm --% install @sparklane.dev/sparklane-recipecard-react


import RecipeCard from '@sparklane.dev/sparklane-recipecard-react';

function App() {
  return (
      <RecipeCard
        name="Your Recipe Name"
        image="https://example.com/image.jpg"
        rating={4.5}
        // Optional props
        emptyRatingPlaceholderText="Not rated (yet!)"
        emptyRatingClassName="empty-rating"
        zeroRatingPlaceholderText="0 (Oh no)"
        zeroRatingClassName="zero-rating"
      />
  );
}`}</pre>
          </div>
          
          <h3>Optional Props</h3>
          <div className="props-list">
            <p><strong>recipeCardOverrideClassName</strong>: CSS class to override the main recipe card container (default: "recipe-card")</p>
            <p><strong>emptyRatingPlaceholderText</strong>: Text shown when rating is null (default: "Not rated (yet!)")</p>
            <p><strong>emptyRatingClassName</strong>: CSS class for null rating text (default: "empty-rating")</p>
            <p><strong>zeroRatingPlaceholderText</strong>: Text shown when rating is 0 (default: "0 (Oh no)")</p>
            <p><strong>zeroRatingClassName</strong>: CSS class for zero rating text (default: "zero-rating")</p>
            <p><strong>starRatingColor</strong>: Color for filled stars (default: "#fbbf24")</p>
            <p><strong>showRatingNumber</strong>: Whether to show the numeric rating value (default: true)</p>
            <p><strong>showRecipeButton</strong>: Whether to show a "View Recipe" button (default: false)</p>
            <p><strong>recipeButtonClassName</strong>: CSS class for the recipe button (default: "default-button")</p>
            <p><strong>recipeButtonEvent</strong>: Click handler for the recipe button (default: () =&gt; {})</p>
            <p><strong>advancedCustomContainer</strong>: Enable custom container content (default: false)</p>
            <p><strong>advancedCustomContainerContent</strong>: Custom React node to replace rating container (default: "") - <strong>WARNING:</strong> May impact AA compliance as it replaces accessible rating information</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
