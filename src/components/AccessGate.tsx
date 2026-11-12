import React, { useState, useEffect } from 'react';
import { Lock, Unlock, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface AccessGateProps {
  onUnlock?: () => void;
}

const ACCESS_KEY = 'yaglar_auth_unlocked_v1';
const CORRECT_CODE = '7777';

export const AccessGate: React.FC<AccessGateProps> = ({ onUnlock }) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ACCESS_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isUnlocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === CORRECT_CODE) {
      setError(false);
      setIsFading(true);
      try {
        sessionStorage.setItem(ACCESS_KEY, 'true');
      } catch {
        // ignore
      }
      setTimeout(() => {
        setIsUnlocked(true);
        if (onUnlock) onUnlock();
      }, 500);
    } else {
      setError(true);
    }
  };

  if (isUnlocked) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${
        isFading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: 'rgba(18, 25, 15, 0.94)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
      }}
    >
      {/* Subtle organic ambient lights behind the frosted curtain */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#607D4B]/25 rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#8CA675]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Access Card */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/40 text-center animate-fadeIn">
        
        {/* Brand Circular Logo with glowing ring */}
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full bg-[#607D4B]/20 blur-md animate-ping pointer-events-none" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#607D4B] ring-4 ring-[#E8EDE2] shadow-md">
            <img
              src="/images/yaglar-logo-square.png"
              alt="YAGLAR Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#37492A] text-white flex items-center justify-center border-2 border-white shadow-xs">
            <Lock className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Brand & Title */}
        <h1 className="font-serif text-3xl font-bold tracking-wider text-[#232B20] uppercase leading-none">
          YAGLAR
        </h1>
        <p className="text-[10px] tracking-[0.25em] text-[#607D4B] font-semibold uppercase mt-1.5">
          BOTANICAL HAIR CARE CR
        </p>

        <div className="my-6 border-t border-[#EAEFE6]" />

        <div className="space-y-1.5 mb-6">
          <h2 className="text-base font-bold text-[#232B20]">
            Acceso Privado
          </h2>
          <p className="text-xs text-[#5D6B57] leading-relaxed">
            Ingresa el código para visualizar la propuesta del sitio web.
          </p>
        </div>

        {/* Code Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Código de acceso"
              className={`w-full py-3.5 pl-4 pr-11 bg-[#F5F8F2] border text-center font-medium text-base rounded-xl text-[#232B20] focus:outline-none transition-all shadow-inner tracking-widest ${
                error
                  ? 'border-red-400 bg-red-50 text-red-900 focus:ring-2 focus:ring-red-200 animate-shake'
                  : 'border-[#CAD7C2] focus:border-[#4E673C] focus:ring-2 focus:ring-[#4E673C]/20'
              }`}
              autoFocus
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#71826B] hover:text-[#232B20] transition-colors p-1"
              aria-label={showPassword ? 'Ocultar código' : 'Ver código'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <p className="text-xs font-semibold text-red-600 animate-fadeIn">
              Código de acceso incorrecto. Intenta de nuevo.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#4E673C] hover:bg-[#384A2A] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 group cursor-pointer"
          >
            <span>INGRESAR A LA WEB</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#EAEFE6] flex items-center justify-center gap-2 text-[11px] text-[#768770]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#607D4B]" />
          <span>Yaglar Costa Rica • Propuesta Oficial</span>
        </div>

      </div>
    </div>
  );
};
