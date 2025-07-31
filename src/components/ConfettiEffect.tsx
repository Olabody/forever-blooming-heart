import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
  trigger?: boolean;
}

export const ConfettiEffect = ({ trigger = true }: ConfettiEffectProps) => {
  
  const launchConfetti = () => {
    // Heart-shaped confetti
    const heartConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFB6C1', '#DDA0DD', '#DA70D6', '#FF1493'],
        shapes: ['heart'],
        scalar: 1.2
      });
    };

    // Regular colorful confetti
    const colorConfetti = () => {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#9B59B6', '#E91E63', '#FF69B4', '#DDA0DD', '#FFB6C1', '#F8BBD9'],
        gravity: 0.8
      });
    };

    // Sparkle effect
    const sparkleEffect = () => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#FFD700', '#FFF8DC', '#FFFFE0'],
        shapes: ['star'],
        scalar: 0.8,
        gravity: 0.5
      });
    };

    // Launch sequence
    colorConfetti();
    setTimeout(heartConfetti, 300);
    setTimeout(sparkleEffect, 600);
    
    // Additional bursts
    setTimeout(colorConfetti, 1000);
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { x: 0.2, y: 0.8 },
        colors: ['#9B59B6', '#E91E63'],
      });
    }, 1300);
    
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { x: 0.8, y: 0.8 },
        colors: ['#FF69B4', '#DDA0DD'],
      });
    }, 1600);
  };

  useEffect(() => {
    if (trigger) {
      // Delay to allow page to load
      const timer = setTimeout(launchConfetti, 500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return null;
};