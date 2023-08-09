'use client'
import { useEffect, useState } from 'react'

import { Pixels } from '@/components/Pixels'
import { ToolBar } from '@/components/ToolBar'
import { Tool } from '@/types'

export default function Playground() {
  const [selectedMode, setSelectedMode] = useState<Tool>('paintBrush')
  const [selectedColor, setSelectedColor] = useState('#000000')
  const [eraseColor, setEraseColor] = useState('transparent')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [paintOrEraseColor, setPaintOrEraseColor] = useState('')
  const [eraseAllPixels, setEraseAllPixels] = useState(false)

  useEffect(() => {
    const mode = {
      paintBucket: () => {
        setBackgroundColor(selectedColor)
        setSelectedMode('paintBrush')
      },
      paintBrush: () => {
        setSelectedColor(selectedColor)
        setPaintOrEraseColor(selectedColor)
      },
      eraser: () => {
        setEraseColor(eraseColor)
        setPaintOrEraseColor(eraseColor)
      },
      colorPicker: () => {
        setSelectedMode('paintBrush')
      },
      eraseAll: () => {
        setEraseAllPixels(!eraseAllPixels)
        setPaintOrEraseColor('transparent')
        setSelectedMode('paintBrush')
      },
      download: () => {
        /* not implemented */
      },
    }
    mode[selectedMode] && mode[selectedMode]()
  }, [selectedMode, selectedColor, eraseColor, eraseAllPixels])

  return (
    <>
      {/* <p className="w-fit backdrop-blur-xl bg-white/30 rounded p-1 mx-auto mb-2">{`mode :( ${selectedMode} ) | color :(${selectedColor}) | erase-color :( ${eraseColor}) | paint :(${paintOrEraseColor})`}</p> */}
      <ToolBar
        onModeSelected={setSelectedMode}
        selectedColor={setSelectedColor}
        selectedMode={selectedMode}
      />
      <Pixels
        pixelColor={eraseAllPixels ? 'transparent' : undefined}
        onClick={() => setPaintOrEraseColor(selectedColor)}
        color={paintOrEraseColor}
        backgroundColor={backgroundColor}
      />
    </>
  )
}
