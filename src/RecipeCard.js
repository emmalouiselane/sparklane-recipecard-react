import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './RecipeCard.css';
// Constants for configuration
var MAX_RATING = 5;
var DEFAULT_STAR_COLOR = '#fbbf24';
var STAR_COUNT = 5;
// Helper function to validate image URLs for security
var isValidImageUrl = function (url) {
    if (!url || typeof url !== 'string')
        return false;
    try {
        var parsedUrl = new URL(url, window.location.origin);
        // Allow only http, https, and data URLs
        var allowedProtocols = ['http:', 'https:', 'data:'];
        if (!allowedProtocols.includes(parsedUrl.protocol)) {
            return false;
        }
        // For data URLs, allow only image formats
        if (parsedUrl.protocol === 'data:') {
            return url.startsWith('data:image/');
        }
        return true;
    }
    catch (_a) {
        // Invalid URL format
        return false;
    }
};
// Helper function to get the correct fallback image path
var getFallbackImagePath = function () {
    // For development, use the public folder path
    if (process.env.NODE_ENV === 'development') {
        return '/no-image.jpg';
    }
    // For production, try multiple fallback strategies
    var fallbackDataUri = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
    // Try to use the bundled image if available (safe static import)
    try {
        // Check if we're in a browser environment
        if (typeof window !== 'undefined') {
            // Try to construct the path to the bundled image
            var bundledImagePath = new URL('../dist/no-image.jpg', import.meta.url).href;
            return bundledImagePath;
        }
    }
    catch (_a) {
        // If any of the above fails, fall back to data URI
    }
    return fallbackDataUri;
};
var RecipeCard = function (_a) {
    var name = _a.name, image = _a.image, rating = _a.rating, 
    //Optional props with defaults
    recipeCardOverrideClassName = _a.recipeCardOverrideClassName, _b = _a.emptyRatingPlaceholderText, emptyRatingPlaceholderText = _b === void 0 ? 'Not rated (yet!)' : _b, _c = _a.emptyRatingClassName, emptyRatingClassName = _c === void 0 ? 'empty-rating' : _c, _d = _a.zeroRatingPlaceholderText, zeroRatingPlaceholderText = _d === void 0 ? '0 (Oh no)' : _d, _e = _a.zeroRatingClassName, zeroRatingClassName = _e === void 0 ? 'zero-rating' : _e, _f = _a.starRatingColor, starRatingColor = _f === void 0 ? DEFAULT_STAR_COLOR : _f, _g = _a.showRatingNumber, showRatingNumber = _g === void 0 ? true : _g, _h = _a.showRecipeButton, showRecipeButton = _h === void 0 ? false : _h, _j = _a.recipeButtonClassName, recipeButtonClassName = _j === void 0 ? 'default-button' : _j, _k = _a.recipeButtonEvent, recipeButtonEvent = _k === void 0 ? function () { } : _k, _l = _a.advancedCustomContainer, advancedCustomContainer = _l === void 0 ? false : _l, _m = _a.advancedCustomContainerContent, advancedCustomContainerContent = _m === void 0 ? null : _m;
    // Helper functions (must be defined before hooks)
    var isValidRating = function (rating) {
        return rating !== null && rating >= 0 && rating <= MAX_RATING;
    };
    var isZeroRating = function (rating) {
        return rating === 0;
    };
    // Hooks must be called before any conditional returns
    var stars = React.useMemo(function () {
        if (!isValidRating(rating)) {
            return [];
        }
        var stars = [];
        var fullStars = Math.floor(rating);
        var hasHalfStar = rating % 1 !== 0;
        for (var i = 0; i < fullStars; i++) {
            stars.push(_jsx("span", { className: "star full", children: "\u2605" }, "full-".concat(i)));
        }
        if (hasHalfStar) {
            stars.push(_jsx("span", { className: "star half", children: "\u2605" }, "half"));
        }
        var emptyStars = STAR_COUNT - fullStars - (hasHalfStar ? 1 : 0);
        for (var i = 0; i < emptyStars; i++) {
            stars.push(_jsx("span", { className: "star empty", children: "\u2606" }, "empty-".concat(i)));
        }
        return stars;
    }, [rating]);
    // Input validation (after hooks)
    if (!name || typeof name !== 'string') {
        console.error('RecipeCard: name prop is required and must be a string');
        return (_jsxs("div", { className: "recipe-card-error", style: {
                padding: '20px',
                border: '1px solid #dc2626',
                borderRadius: '8px',
                backgroundColor: '#fef2f2',
                color: '#dc2626',
                textAlign: 'center'
            }, children: [_jsx("h3", { children: "Invalid Recipe" }), _jsx("p", { children: "Recipe name is required." })] }));
    }
    if (!image || typeof image !== 'string') {
        console.error('RecipeCard: image prop is required and must be a string');
        return (_jsxs("div", { className: "recipe-card-error", style: {
                padding: '20px',
                border: '1px solid #dc2626',
                borderRadius: '8px',
                backgroundColor: '#fef2f2',
                color: '#dc2626',
                textAlign: 'center'
            }, children: [_jsx("h3", { children: "Invalid Recipe" }), _jsx("p", { children: "Recipe image is required." })] }));
    }
    if (rating !== null && (typeof rating !== 'number' || rating < 0 || rating > MAX_RATING)) {
        console.error('RecipeCard: rating must be null or a number between 0 and 5');
        return (_jsxs("div", { className: "recipe-card-error", style: {
                padding: '20px',
                border: '1px solid #dc2626',
                borderRadius: '8px',
                backgroundColor: '#fef2f2',
                color: '#dc2626',
                textAlign: 'center'
            }, children: [_jsx("h3", { children: "Invalid Recipe" }), _jsx("p", { children: "Recipe rating must be between 0 and 5." })] }));
    }
    return (_jsxs("article", { className: recipeCardOverrideClassName || "recipe-card", "aria-labelledby": "recipe-name-".concat(name.replace(/\s+/g, '-').toLowerCase()), children: [_jsx("div", { className: "recipe-image-container", children: _jsx("img", { src: isValidImageUrl(image) ? image : getFallbackImagePath(), alt: name, className: "recipe-image", onError: function (e) {
                        var target = e.currentTarget;
                        target.src = getFallbackImagePath();
                        target.alt = "Image not available for ".concat(name);
                        // Update the parent article's aria-labelledby to reflect the image state
                        var articleElement = target.closest('article');
                        if (articleElement) {
                            var recipeNameId = "recipe-name-".concat(name.replace(/\s+/g, '-').toLowerCase());
                            articleElement.setAttribute('aria-describedby', "".concat(recipeNameId, " image-error"));
                        }
                    } }) }), _jsxs("div", { className: "recipe-content", children: [_jsx("h3", { className: "recipe-name", id: "recipe-name-".concat(name.replace(/\s+/g, '-').toLowerCase()), children: name }), advancedCustomContainer && advancedCustomContainerContent ? advancedCustomContainerContent :
                        (_jsxs("div", { className: "recipe-rating-container", children: [isValidRating(rating) ? (_jsxs("div", { className: "recipe-rating", role: "img", "aria-label": "Rating: ".concat(rating === null || rating === void 0 ? void 0 : rating.toFixed(1), " out of ").concat(STAR_COUNT, " stars"), children: [_jsx("div", { className: "stars", "aria-hidden": "true", style: { color: starRatingColor }, children: stars }), isZeroRating(rating) ? (_jsx("span", { className: zeroRatingClassName, children: zeroRatingPlaceholderText })) : (showRatingNumber && _jsx("span", { className: "rating-number", "aria-hidden": "true", children: rating === null || rating === void 0 ? void 0 : rating.toFixed(1) }))] })) : (_jsx("div", { className: "recipe-rating", children: _jsx("div", { className: "stars", children: _jsx("span", { className: emptyRatingClassName, children: emptyRatingPlaceholderText }) }) })), showRecipeButton && (_jsx("button", { className: "recipe-button ".concat(recipeButtonClassName), onClick: recipeButtonEvent, onKeyDown: function (e) {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            recipeButtonEvent();
                                        }
                                    }, "aria-label": "View recipe for ".concat(name), children: "View Recipe" }))] }))] })] }));
};
export default RecipeCard;
