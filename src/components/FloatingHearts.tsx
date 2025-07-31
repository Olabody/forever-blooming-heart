import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          size: 0.5 + Math.random() * 1,
          delay: Math.random() * 2
        });
      }
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-love-pink opacity-60"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <div className="float-heart">💖</div>
        </div>
      ))}
      
      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 text-4xl text-sparkle-gold opacity-70">
        <div className="sparkle">✨</div>
      </div>
      <div className="absolute top-20 right-20 text-3xl text-love-pink-light opacity-60">
        <div className="sparkle" style={{ animationDelay: '0.5s' }}>💫</div>
      </div>
      <div className="absolute bottom-20 left-20 text-2xl text-romantic-purple-light opacity-50">
        <div className="sparkle" style={{ animationDelay: '1s' }}>⭐</div>
      </div>
      <div className="absolute bottom-32 right-32 text-3xl text-love-pink opacity-70">
        <div className="sparkle" style={{ animationDelay: '1.5s' }}>💝</div>
      </div>
    </div>
  );
};