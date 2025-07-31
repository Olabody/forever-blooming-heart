import { useState, useEffect } from 'react';
import { TypewriterText } from '@/components/TypewriterText';
import { ConfettiEffect } from '@/components/ConfettiEffect';
import { FloatingHearts } from '@/components/FloatingHearts';
import { LoveMessageCard } from '@/components/LoveMessageCard';
import { LoveModal } from '@/components/LoveModal';
import { PulsingHeart } from '@/components/PulsingHeart';

const Index = () => {
  const [showMainTitle, setShowMainTitle] = useState(true);
  const [titleComplete, setTitleComplete] = useState(false);
  const [showLoveModal, setShowLoveModal] = useState(false);

  const loveMessages = [
    {
      message: "You are the sunshine that brightens my darkest days and the moonlight that guides me through the night. 🌙",
      icon: "🌟",
      delay: 3000
    },
    {
      message: "Every moment with you feels like a beautiful dream that I never want to wake up from. ✨",
      icon: "💫",
      delay: 4500
    },
    {
      message: "Your smile is my favorite view, your laugh is my favorite sound, and your love is my favorite feeling. 😊",
      icon: "😍",
      delay: 6000
    },
    {
      message: "You make ordinary moments extraordinary just by being in them. Thank you for being you. 🎈",
      icon: "🦋",
      delay: 7500
    },
    {
      message: "In a world full of temporary things, you are my forever. Happy Girlfriend's Day, beautiful! 💍",
      icon: "👑",
      delay: 9000
    }
  ];

  const handleHeartClick = () => {
    setShowLoveModal(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiEffect trigger={true} />
      
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-16 px-4">
        
        {/* Main Title Section */}
        <div className="text-center mb-12 max-w-4xl">
          {showMainTitle && (
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-romantic font-bold text-gradient mb-6">
              <TypewriterText
                text="Happy Girlfriend's Day 💖"
                speed={120}
                onComplete={() => setTitleComplete(true)}
              />
            </h1>
          )}
          
          {titleComplete && (
            <div className="love-card-enter">
              <p className="text-xl md:text-2xl font-poppins text-foreground opacity-90 mb-8">
                To the most amazing person in my world ✨
              </p>
              
              <div className="flex justify-center space-x-6 text-4xl mb-8">
                <span className="sparkle">💕</span>
                <span className="float-heart">💖</span>
                <span className="sparkle" style={{ animationDelay: '0.3s' }}>💝</span>
                <span className="float-heart" style={{ animationDelay: '0.6s' }}>💗</span>
                <span className="sparkle" style={{ animationDelay: '0.9s' }}>💞</span>
              </div>
            </div>
          )}
        </div>

        {/* Love Messages Section */}
        {titleComplete && (
          <div className="w-full max-w-3xl space-y-6 mb-20">
            {loveMessages.map((msg, index) => (
              <LoveMessageCard
                key={index}
                message={msg.message}
                icon={msg.icon}
                delay={msg.delay}
              />
            ))}
            
            {/* Final special message */}
            <div style={{ marginTop: '2rem' }}>
              <LoveMessageCard
                message="You are my heart, my soul, my everything. Thank you for making life so beautiful, my love. 💖👑✨"
                icon="🌹"
                delay={10500}
              />
            </div>
          </div>
        )}
      </div>

      {/* Pulsing Heart Button */}
      <PulsingHeart onClick={handleHeartClick} />
      
      {/* Love Modal */}
      <LoveModal 
        isOpen={showLoveModal} 
        onClose={() => setShowLoveModal(false)} 
      />
    </div>
  );
};

export default Index;
