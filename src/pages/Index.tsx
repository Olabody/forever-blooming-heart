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
      message: "I still can't believe I get to call you mine. You've become such a big part of my life — not just in the happy moments, but in the quiet ones too. Just knowing you're there makes everything feel lighter.",
      icon: "💌",
      delay: 3000
    },
    {
      message: "You make ordinary things feel special. Whether it's just talking, laughing at random stuff, or sitting in silence, being with you has shown me what peace feels like.",
      icon: "💌",
      delay: 4500
    },
    {
      message: "I love how you understand the parts of me I didn't even know needed understanding. You see through the noise and still choose me — that means more than I can put into words.",
      icon: "💌",
      delay: 6000
    },
    {
      message: "I don't need grand adventures to feel happy — just you. The way you care, the way you listen, the way you love… it's more than I ever hoped for.",
      icon: "💌",
      delay: 7500
    },
    {
      message: "You've been my calm in chaos, my reason when things feel unsure. I've never felt more seen, more valued, more me than I do when I'm with you.",
      icon: "💌",
      delay: 9000
    },
    {
      message: "Loving you hasn't just changed my life — it's changed me. You've helped me grow without even realizing it. And for that, I'm forever grateful.",
      icon: "💌",
      delay: 10500
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-romantic font-bold mb-6" style={{ color: 'hsl(320 40% 92%)' }}>
              <TypewriterText
                text="Happy Girlfriend's Day Morenikeji 💖"
                speed={120}
                onComplete={() => setTitleComplete(true)}
              />
            </h1>
          )}
          
          {titleComplete && (
            <div className="love-card-enter">
              
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
