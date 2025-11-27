import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-white'
    } p-8`}>
      <div className="max-w-6xl mx-auto">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
              darkMode
                ? 'bg-slate-700/50 hover:bg-slate-700 text-cyan-400 border border-slate-600'
                : 'bg-white/60 hover:bg-white/80 text-slate-700 border border-white/40 shadow-lg'
            } backdrop-blur-sm`}
          >
            {darkMode ? (
              <>
                <Sun size={20} />
                <span>라이트 모드</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>다크 모드</span>
              </>
            )}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className={`mb-3 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            이누 로고
          </h1>
          <p className={`mb-2 transition-colors duration-500 ${
            darkMode ? 'text-cyan-300' : 'text-cyan-600'
          }`}>
            Information for University
          </p>
          <p className={`text-sm transition-colors duration-500 ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            브라이트 시안 에디션
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className={`h-px w-16 transition-all duration-500 ${
              darkMode 
                ? 'bg-gradient-to-r from-transparent to-cyan-500' 
                : 'bg-gradient-to-r from-transparent to-cyan-400'
            }`}></div>
            <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
              darkMode ? 'bg-cyan-400' : 'bg-cyan-500'
            }`}></div>
            <div className={`h-px w-16 transition-all duration-500 ${
              darkMode 
                ? 'bg-gradient-to-l from-transparent to-cyan-500' 
                : 'bg-gradient-to-l from-transparent to-cyan-400'
            }`}></div>
          </div>
        </div>

        {/* Main Logo Display */}
        <div className="mb-20 flex justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute inset-0 blur-3xl transition-all duration-500 ${
              darkMode 
                ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30' 
                : 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20'
            }`}></div>
            
            {/* Main logo container */}
            <div className={`relative rounded-[3rem] p-20 shadow-2xl border transition-all duration-500 ${
              darkMode
                ? 'bg-slate-800/50 backdrop-blur-xl border-slate-700/50 shadow-cyan-500/10'
                : 'bg-white/70 backdrop-blur-xl border-white/50 shadow-cyan-200/50'
            }`}>
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer glow ring */}
                <rect 
                  x="25" 
                  y="25" 
                  width="230" 
                  height="230" 
                  rx="58"
                  fill="none"
                  stroke="url(#mainGlowStroke)"
                  strokeWidth="2"
                  opacity={darkMode ? "0.6" : "0.4"}
                />
                
                {/* Main rounded square */}
                <rect 
                  x="40" 
                  y="40" 
                  width="200" 
                  height="200" 
                  rx="50"
                  fill="url(#mainGradient)"
                />
                
                {/* Inner decorative layers */}
                <rect 
                  x="55" 
                  y="55" 
                  width="170" 
                  height="170" 
                  rx="42"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                
                <rect 
                  x="70" 
                  y="70" 
                  width="140" 
                  height="140" 
                  rx="35"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.2"
                />
                
                {/* Center subtle glow */}
                <circle cx="140" cy="140" r="60" fill="url(#centerGlow)" opacity="0.15"/>
                
                {/* 이누 Text */}
                <text 
                  x="140" 
                  y="158" 
                  fontSize="56" 
                  fontWeight="600" 
                  fill="white" 
                  textAnchor="middle" 
                  fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
                  letterSpacing="-2"
                >
                  이누
                </text>
                
                {/* Corner accents */}
                <circle cx="70" cy="70" r="3" fill="white" opacity="0.6"/>
                <circle cx="210" cy="70" r="3" fill="white" opacity="0.6"/>
                <circle cx="70" cy="210" r="3" fill="white" opacity="0.6"/>
                <circle cx="210" cy="210" r="3" fill="white" opacity="0.6"/>
                
                {/* Top decorative element */}
                <path 
                  d="M 100 60 Q 140 55 180 60" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.4"
                  strokeLinecap="round"
                />
                
                <defs>
                  <linearGradient id="mainGradient" x1="40" y1="40" x2="240" y2="240" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#67E8F9"/>
                    <stop offset="50%" stopColor="#22D3EE"/>
                    <stop offset="100%" stopColor="#06B6D4"/>
                  </linearGradient>
                  <linearGradient id="mainGlowStroke" x1="25" y1="25" x2="255" y2="255" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#67E8F9"/>
                    <stop offset="100%" stopColor="#22D3EE"/>
                  </linearGradient>
                  <radialGradient id="centerGlow">
                    <stop offset="0%" stopColor="white"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className={`rounded-3xl p-12 shadow-xl border transition-all duration-500 mb-16 ${
          darkMode
            ? 'bg-slate-800/40 backdrop-blur-xl border-slate-700/50'
            : 'bg-white/60 backdrop-blur-xl border-white/40'
        }`}>
          <h2 className={`mb-10 text-center transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            크기별 적용 예시
          </h2>
          
          <div className="flex flex-wrap items-end justify-center gap-16">
            {/* Small */}
            <div className="flex flex-col items-center gap-4">
              <div className={`p-4 rounded-2xl transition-all duration-300 ${
                darkMode ? 'bg-slate-700/30' : 'bg-slate-50'
              }`}>
                <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="140" rx="35" fill="url(#size1)"/>
                  <text x="100" y="115" fontSize="40" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-1.5">이누</text>
                  <defs>
                    <linearGradient id="size1" x1="30" y1="30" x2="170" y2="170">
                      <stop offset="0%" stopColor="#67E8F9"/>
                      <stop offset="100%" stopColor="#22D3EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={`transition-colors duration-500 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>48px</span>
            </div>

            {/* Medium */}
            <div className="flex flex-col items-center gap-4">
              <div className={`p-6 rounded-2xl transition-all duration-300 ${
                darkMode ? 'bg-slate-700/30' : 'bg-slate-50'
              }`}>
                <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="140" rx="35" fill="url(#size2)"/>
                  <rect x="42" y="42" width="116" height="116" rx="29" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3"/>
                  <text x="100" y="115" fontSize="40" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-1.5">이누</text>
                  <defs>
                    <linearGradient id="size2" x1="30" y1="30" x2="170" y2="170">
                      <stop offset="0%" stopColor="#67E8F9"/>
                      <stop offset="100%" stopColor="#22D3EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={`transition-colors duration-500 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>80px</span>
            </div>

            {/* Large */}
            <div className="flex flex-col items-center gap-4">
              <div className={`p-8 rounded-2xl transition-all duration-300 ${
                darkMode ? 'bg-slate-700/30' : 'bg-slate-50'
              }`}>
                <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="140" rx="35" fill="url(#size3)"/>
                  <rect x="42" y="42" width="116" height="116" rx="29" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3"/>
                  <text x="100" y="115" fontSize="40" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-1.5">이누</text>
                  <circle cx="55" cy="55" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="145" cy="55" r="2.5" fill="white" opacity="0.6"/>
                  <defs>
                    <linearGradient id="size3" x1="30" y1="30" x2="170" y2="170">
                      <stop offset="0%" stopColor="#67E8F9"/>
                      <stop offset="100%" stopColor="#22D3EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={`transition-colors duration-500 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>120px</span>
            </div>

            {/* Extra Large */}
            <div className="flex flex-col items-center gap-4">
              <div className={`p-10 rounded-2xl transition-all duration-300 ${
                darkMode ? 'bg-slate-700/30' : 'bg-slate-50'
              }`}>
                <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="140" rx="35" fill="url(#size4)"/>
                  <rect x="42" y="42" width="116" height="116" rx="29" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3"/>
                  <text x="100" y="115" fontSize="40" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-1.5">이누</text>
                  <circle cx="55" cy="55" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="145" cy="55" r="2.5" fill="white" opacity="0.6"/>
                  <defs>
                    <linearGradient id="size4" x1="30" y1="30" x2="170" y2="170">
                      <stop offset="0%" stopColor="#67E8F9"/>
                      <stop offset="100%" stopColor="#22D3EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={`transition-colors duration-500 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>160px</span>
            </div>
          </div>
        </div>

        {/* Usage Examples in Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* App Icon Example */}
          <div className={`rounded-3xl p-10 shadow-xl border transition-all duration-500 ${
            darkMode
              ? 'bg-slate-800/40 backdrop-blur-xl border-slate-700/50'
              : 'bg-white/60 backdrop-blur-xl border-white/40'
          }`}>
            <h3 className={`mb-6 text-center transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              앱 아이콘
            </h3>
            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ width: '80px', height: '80px' }}>
                  <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="200" height="200" fill="url(#icon1)"/>
                    <rect x="20" y="20" width="160" height="160" rx="40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
                    <text x="100" y="118" fontSize="48" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-2">이누</text>
                    <defs>
                      <linearGradient id="icon1" x1="0" y1="0" x2="200" y2="200">
                        <stop offset="0%" stopColor="#67E8F9"/>
                        <stop offset="100%" stopColor="#22D3EE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className={`text-sm transition-colors duration-500 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>iOS</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: '80px', height: '80px' }}>
                  <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="200" height="200" fill="url(#icon2)"/>
                    <rect x="20" y="20" width="160" height="160" rx="40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
                    <text x="100" y="118" fontSize="48" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-2">이누</text>
                    <defs>
                      <linearGradient id="icon2" x1="0" y1="0" x2="200" y2="200">
                        <stop offset="0%" stopColor="#67E8F9"/>
                        <stop offset="100%" stopColor="#22D3EE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className={`text-sm transition-colors duration-500 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>Android</span>
              </div>
            </div>
          </div>

          {/* Navigation Bar Example */}
          <div className={`rounded-3xl p-10 shadow-xl border transition-all duration-500 ${
            darkMode
              ? 'bg-slate-800/40 backdrop-blur-xl border-slate-700/50'
              : 'bg-white/60 backdrop-blur-xl border-white/40'
          }`}>
            <h3 className={`mb-6 text-center transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              네비게이션 바
            </h3>
            <div className={`rounded-2xl p-4 transition-all duration-500 ${
              darkMode ? 'bg-slate-900/50' : 'bg-white/80'
            }`}>
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="140" rx="35" fill="url(#nav1)"/>
                  <text x="100" y="115" fontSize="40" fontWeight="600" fill="white" textAnchor="middle" fontFamily="-apple-system" letterSpacing="-1.5">이누</text>
                  <defs>
                    <linearGradient id="nav1" x1="30" y1="30" x2="170" y2="170">
                      <stop offset="0%" stopColor="#67E8F9"/>
                      <stop offset="100%" stopColor="#22D3EE"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex-1">
                  <p className={`transition-colors duration-500 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>이누</p>
                  <p className={`text-sm transition-colors duration-500 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>대학 정보 플랫폼</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
