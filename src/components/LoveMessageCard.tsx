import { useState } from 'react';
import { TypewriterText } from './TypewriterText';

interface LoveMessageCardProps {
  message: string;
  delay?: number;
  icon?: string;
}

export const LoveMessageCard = ({ 
  message, 
  delay = 0, 
  icon = "💕" 
}: LoveMessageCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useState(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowMessage(true), 500);
    }, delay);
    
    return () => clearTimeout(timer);
  });

  if (!isVisible) return null;

  return (
    <div className="love-card love-card-enter love-card-glow mb-6 transform transition-all duration-500 hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className="text-4xl flex-shrink-0 animate-pulse">
          {icon}
        </div>
        <div className="flex-1">
          {showMessage ? (
            <TypewriterText
              text={message}
              speed={50}
              className="text-lg font-poppins leading-relaxed"
              style={{ color: 'hsl(275 80% 25%)' }}
            />
          ) : (
            <div className="h-6 bg-muted animate-pulse rounded"></div>
          )}
        </div>
      </div>
    </div>
  );
};