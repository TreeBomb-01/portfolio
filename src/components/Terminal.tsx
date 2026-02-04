'use client'

import { useState, useEffect } from 'react'

export default function Terminal() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const terminalText = "./contact_info.sh"

  useEffect(() => {
    let charIndex = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < terminalText.length) {
          setTypedText(terminalText.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setShowOutput(true)
          }, 400)
        }
      }, 80)
      
      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer 
      className={`bg-[#1e1e1e] border-t border-[#333] flex flex-col transition-all duration-300 ${
        isCollapsed ? 'h-8' : 'h-48'
      }`}
    >
      <div className="flex text-xs uppercase text-gray-400 bg-[#1e1e1e] border-b border-[#333] justify-between">
        <div className="flex">
          <div className="px-4 py-1 border-t-2 border-transparent hover:text-white cursor-pointer text-white border-b border-[#333]">
            Terminal
          </div>
          <div className="px-4 py-1 border-t-2 border-transparent hover:text-white cursor-pointer text-gray-500">
            Output
          </div>
        </div>
        <div 
          className="px-4 py-1 cursor-pointer hover:text-white flex items-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`fas fa-chevron-${isCollapsed ? 'up' : 'down'}`}></i>
        </div>
      </div>

      {!isCollapsed && (
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
          <div className="text-gray-400 mb-2">Microsoft Windows [Version 10.0.19045.3693]</div>
          
          {showOutput && (
            <>
              <div className="mb-2">
                <span className="text-[#98c379] mr-2">user@portfolio:~/backend$</span>
                <span>{terminalText}</span>
              </div>
              <div className="mb-1">
                <span className="text-[#e5c07b]">Name:</span>
                <span className="text-white ml-2">HurTaeBum</span>
              </div>
              <div className="mb-1">
                <span className="text-[#e5c07b]">Email:</span>
                <a href="mailto:htb010630@gmail.com" className="text-blue-400 hover:underline ml-2">
                  htb010630@gmail.com
                </a>
              </div>
              <div className="mb-1">
                <span className="text-[#e5c07b]">GitHub:</span>
                <a href="https://github.com/TreeBomb-01" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">
                  github.com/TreeBomb-01
                </a>
              </div>
              <div className="mt-2">
                <span className="text-[#98c379] mr-2">user@portfolio:~/backend$</span>
                <span className="cursor-blink"></span>
              </div>
            </>
          )}

          {!showOutput && (
            <div className="flex">
              <span className="text-[#98c379] mr-2">user@portfolio:~/backend$</span>
              <span>{typedText}</span>
              <span className="cursor-blink"></span>
            </div>
          )}
        </div>
      )}
    </footer>
  )
}
