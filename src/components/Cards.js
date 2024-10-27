import React, { useRef, useState, useEffect } from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  // Create refs for each section
  const featuredContainerRef = useRef(null);
  const newContainerRef = useRef(null);
  const trendingContainerRef = useRef(null);

  // Create state for each section's buttons
  const [showFeaturedLeftButton, setShowFeaturedLeftButton] = useState(false);
  const [showFeaturedRightButton, setShowFeaturedRightButton] = useState(true);
  const [showNewLeftButton, setShowNewLeftButton] = useState(false);
  const [showNewRightButton, setShowNewRightButton] = useState(true);
  const [showTrendingLeftButton, setShowTrendingLeftButton] = useState(false);
  const [showTrendingRightButton, setShowTrendingRightButton] = useState(true);

  const checkScrollButtons = (container, setLeftButton, setRightButton) => {
    if (container) {
      setLeftButton(container.scrollLeft > 0);
      setRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const featuredContainer = featuredContainerRef.current;
    const newContainer = newContainerRef.current;
    const trendingContainer = trendingContainerRef.current;

    const handleFeaturedScroll = () => checkScrollButtons(featuredContainer, setShowFeaturedLeftButton, setShowFeaturedRightButton);
    const handleNewScroll = () => checkScrollButtons(newContainer, setShowNewLeftButton, setShowNewRightButton);
    const handleTrendingScroll = () => checkScrollButtons(trendingContainer, setShowTrendingLeftButton, setShowTrendingRightButton);

    if (featuredContainer) {
      featuredContainer.addEventListener('scroll', handleFeaturedScroll);
      handleFeaturedScroll();
    }
    if (newContainer) {
      newContainer.addEventListener('scroll', handleNewScroll);
      handleNewScroll();
    }
    if (trendingContainer) {
      trendingContainer.addEventListener('scroll', handleTrendingScroll);
      handleTrendingScroll();
    }

    return () => {
      if (featuredContainer) featuredContainer.removeEventListener('scroll', handleFeaturedScroll);
      if (newContainer) newContainer.removeEventListener('scroll', handleNewScroll);
      if (trendingContainer) trendingContainer.removeEventListener('scroll', handleTrendingScroll);
    };
  }, []);

  const scroll = (container, direction) => {
    if (container) {
      const scrollAmount = container.clientWidth - 100;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const featuredGames = [
    { src: 'images/rocketblink.png', text: 'Rocketblink', label: 'To The Moon!', path: '/' },
    { src: 'images/rocketblink.png', text: 'ThreeCupsOneBall', label: 'Guess Wisely!', path: '/' },
    { src: 'images/rocketblink.png', text: 'Space Adventure', label: 'SpaceGame', path: '/' },
    { src: 'images/rocketblink.png', text: 'Racing Stars', label: 'RacingGame', path: '/' },
    { src: 'images/rocketblink.png', text: 'Cosmic Clash', label: 'Action', path: '/' },
    { src: 'images/rocketblink.png', text: 'Pixel Warriors', label: 'Fighting', path: '/' },
    { src: 'images/rocketblink.png', text: 'Dragon Quest', label: 'Adventure', path: '/' },
    { src: 'images/rocketblink.png', text: 'Speed Demons', label: 'Racing', path: '/' },
    { src: 'images/rocketblink.png', text: 'Puzzle Master', label: 'Puzzle', path: '/' },
    { src: 'images/rocketblink.png', text: 'Space Pirates', label: 'Action', path: '/' }
  ];

  const newGames = [
    { src: 'images/rocketblink.png', text: 'Crystal Quest', label: 'Just Released', path: '/' },
    { src: 'images/rocketblink.png', text: 'Sky Battles', label: 'New', path: '/' },
    { src: 'images/rocketblink.png', text: 'Dark Dungeons', label: 'RPG', path: '/' },
    { src: 'images/rocketblink.png', text: 'Ocean Explorer', label: 'Adventure', path: '/' },
    { src: 'images/rocketblink.png', text: 'Tech Titans', label: 'Strategy', path: '/' },
    { src: 'images/rocketblink.png', text: 'Medieval Wars', label: 'Action', path: '/' },
    { src: 'images/rocketblink.png', text: 'Ninja Shadow', label: 'Stealth', path: '/' },
    { src: 'images/rocketblink.png', text: 'Star Command', label: 'Sci-Fi', path: '/' }
  ];

  const trendingGames = [
    { src: 'images/rocketblink.png', text: 'Cyber Punk', label: 'Trending', path: '/' },
    { src: 'images/rocketblink.png', text: 'Forest Kingdom', label: 'Popular', path: '/' },
    { src: 'images/rocketblink.png', text: 'Time Machine', label: 'Adventure', path: '/' },
    { src: 'images/rocketblink.png', text: 'Monster Hunt', label: 'Action', path: '/' },
    { src: 'images/rocketblink.png', text: 'Desert Storm', label: 'Strategy', path: '/' },
    { src: 'images/rocketblink.png', text: 'Ice Age', label: 'Survival', path: '/' },
    { src: 'images/rocketblink.png', text: 'Space Wars', label: 'Sci-Fi', path: '/' },
    { src: 'images/rocketblink.png', text: 'Magic Realm', label: 'Fantasy', path: '/' }
  ];

  const renderCardSection = (title, games, containerRef, showLeftButton, showRightButton, setLeftButton, setRightButton) => (
    <div className="cards__category">
      <h2 className="cards__category-title">{title}</h2>
      <div className="cards__wrapper">
        <button 
          className="cards__scroll-button cards__scroll-button--left"
          onClick={() => scroll(containerRef.current, 'left')}
          aria-label="Scroll left"
          disabled={!showLeftButton}
        >
          ‹
        </button>
        
        <button 
          className="cards__scroll-button cards__scroll-button--right"
          onClick={() => scroll(containerRef.current, 'right')}
          aria-label="Scroll right"
          disabled={!showRightButton}
        >
          ›
        </button>
  
        <ul className="cards__items" ref={containerRef}>
          {games.map((game, index) => (
            <CardItem
              key={index}
              src={game.src}
              text={game.text}
              label={game.label}
              path={game.path}
            />
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="cards">
      <h1>Game Library</h1>
      <div className="cards__container">
        {renderCardSection(
          "Featured Games", 
          featuredGames, 
          featuredContainerRef,
          showFeaturedLeftButton,
          showFeaturedRightButton
        )}
        {renderCardSection(
          "New Games", 
          newGames, 
          newContainerRef,
          showNewLeftButton,
          showNewRightButton
        )}
        {renderCardSection(
          "Trending Games", 
          trendingGames, 
          trendingContainerRef,
          showTrendingLeftButton,
          showTrendingRightButton
        )}
      </div>
    </div>
  );
}

export default Cards;