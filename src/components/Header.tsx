'use client'

interface HeaderProps {
  viewMode: 'preview' | 'code'
  onModeChange: (mode: 'preview' | 'code') => void
}

export default function Header({ viewMode, onModeChange }: HeaderProps) {
  return (
    <header className="h-10 bg-[#333333] flex items-center justify-between px-4 select-none border-b border-[#1e1e1e] flex-shrink-0">
      <div className="flex items-center gap-2">
        {/* Traffic Light Buttons */}
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        <span className="ml-4 text-gray-400 text-xs hidden md:inline">
          portfolio — backend-engineer
        </span>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 mr-1 hidden sm:inline">Mode:</span>
        <button
          onClick={() => onModeChange('preview')}
          className={`px-3 py-1 text-xs rounded font-bold transition-all flex items-center gap-1 ${
            viewMode === 'preview'
              ? 'bg-[#569cd6] text-white'
              : 'bg-[#2d2d2d] text-gray-400 hover:text-white'
          }`}
        >
          <i className="fas fa-eye"></i>
          <span className="hidden sm:inline">Preview</span>
        </button>
        <button
          onClick={() => onModeChange('code')}
          className={`px-3 py-1 text-xs rounded font-bold transition-all flex items-center gap-1 ${
            viewMode === 'code'
              ? 'bg-[#569cd6] text-white'
              : 'bg-[#2d2d2d] text-gray-400 hover:text-white'
          }`}
        >
          <i className="fas fa-code"></i>
          <span className="hidden sm:inline">Source</span>
        </button>
      </div>
    </header>
  )
}