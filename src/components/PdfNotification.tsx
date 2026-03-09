'use client'

import { useState, useEffect } from 'react'

interface PdfNotificationProps {
  onClose: () => void
}

export default function PdfNotification({ onClose }: PdfNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 애니메이션을 위한 딜레이
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) // 애니메이션 후 닫기
  }

  const handlePdfClick = () => {
    window.open('https://drive.google.com/drive/folders/1C-vLUE3FZvoG96A0vxW4WoGb-j6AXIZe?usp=drive_link', '_blank')
    handleClose()
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative bg-[#252526] border border-[#007acc] rounded-lg shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#333] bg-[#007acc]/20 rounded-t-lg">
          <div className="flex items-center gap-2">
            <i className="fas fa-info-circle text-[#007acc]"></i>
            <span className="text-white font-medium">포트폴리오 안내</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors w-6 h-6 flex items-center justify-center rounded hover:bg-[#333]"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-[#007acc]/20 rounded-lg flex items-center justify-center">
              <i className="fas fa-file-pdf text-2xl text-[#f14c4c]"></i>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                PDF 버전도 준비되어 있어요!
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                깔끔하게 정리된 PDF 포트폴리오를 Google Drive에서 확인해보세요.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handlePdfClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#007acc] hover:bg-[#005f9e] text-white rounded-lg transition-colors font-medium"
            >
              <i className="fas fa-external-link-alt"></i>
              PDF로 보기
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-3 bg-[#333] hover:bg-[#444] text-gray-300 rounded-lg transition-colors"
            >
              웹에서 볼게요
            </button>
          </div>
        </div>

        {/* Footer hint */}
        <div className="px-6 py-3 border-t border-[#333] bg-[#1e1e1e] rounded-b-lg">
          <p className="text-xs text-gray-500 text-center">
            <i className="fas fa-keyboard mr-1"></i>
            ESC 키를 눌러 닫을 수 있습니다
          </p>
        </div>
      </div>
    </div>
  )
}
