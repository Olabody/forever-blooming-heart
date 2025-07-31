import { useEffect } from 'react';
import { X } from 'lucide-react';

interface LoveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoveModal = ({ isOpen, onClose }: LoveModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-love-pink-light rounded-2xl p-8 m-4 max-w-md w-full shadow-2xl love-card-enter">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>
        
        {/* Content */}
        <div className="text-center space-y-6">
          <div className="text-6xl animate-pulse">❤️</div>
          
          <h2 className="text-2xl font-romantic font-bold text-gradient">
            I love you
          </h2>
          
          <p className="text-lg font-poppins text-foreground leading-relaxed">
            Happy World Girlfriend's Day, my love. ✨
          </p>
          
          <p className="text-base font-poppins text-muted-foreground italic">
            You make every day feel like a celebration of love. 💕
          </p>
          
          <div className="flex justify-center space-x-4 text-2xl">
            <span className="sparkle">✨</span>
            <span className="float-heart">💖</span>
            <span className="sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};