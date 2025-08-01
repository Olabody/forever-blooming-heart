interface PulsingHeartProps {
  onClick: () => void;
}
export const PulsingHeart = ({
  onClick
}: PulsingHeartProps) => {
  return <div className="fixed bottom-8 right-8 z-40">
      <button onClick={onClick} className="btn-heart pulse-love relative group" aria-label="Click for a love message">
        <span className="text-3xl">💖</span>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 border border-love-pink-light rounded-lg opacity-100 transition-opacity whitespace-nowrap font-poppins text-sm bg-red-500">
          Click me! 💕
        </div>
        
        {/* Decorative sparkles */}
        <div className="absolute -top-2 -left-2 text-sparkle-gold text-sm sparkle">✨</div>
        <div className="absolute -bottom-2 -right-2 text-love-pink-light text-sm sparkle" style={{
        animationDelay: '0.7s'
      }}>💫</div>
      </button>
    </div>;
};