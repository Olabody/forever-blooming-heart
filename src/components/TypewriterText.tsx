import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypewriterText = ({ 
  text, 
  speed = 100, 
  onComplete, 
  className = "" 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
      // Hide cursor after completion
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`text-muted-foreground ${className}`}>
      {displayText}
      {showCursor && (
        <span className="inline-block w-1 bg-heart-red ml-1 animate-pulse">|</span>
      )}
    </span>
  );
};