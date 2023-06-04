'use client';
import { useEffect, useState } from 'react';

import { Pixels } from '@/components/Pixels';
import { ToolBar } from '@/components/ToolBar';
import { Tool } from '@/types';

export default function Playground() {
  const [selectedMode, setSelectedMode] = useState<Tool>('paintBrush');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [eraseColor, setEraseColor] = useState('transparent');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [paintOrEraseColor, setPaintOrEraseColor] = useState('');

  useEffect(() => {
    const modeFunctions = {
      paintBucket: () => {
        setBackgroundColor(selectedColor);
        setSelectedMode('paintBrush');
      },
      paintBrush: () => {
        setSelectedColor(selectedColor);
        setPaintOrEraseColor(selectedColor);
      },
      eraser: () => {
        setEraseColor(eraseColor);
        setPaintOrEraseColor(eraseColor);
      },
      colorPicker: () => {
        setSelectedMode('paintBrush');
      },
      eraseAll: () => {
        /* not implemented */
      },
      download: () => {
        /* not implemented */
      },
    };
    modeFunctions[selectedMode] && modeFunctions[selectedMode]();
  }, [selectedMode, selectedColor, eraseColor]);

  return (
    <>
      {/* <p className='w-fit backdrop-blur-xl bg-white/30 rounded p-1 mx-auto mb-2'>{`mode :( ${selectedMode} ) | color :(${selectedColor}) | erase-color :( ${eraseColor}) | paint :(${paintOrEraseColor})`}</p> */}
      <ToolBar
        onModeSelected={setSelectedMode}
        selectedColor={setSelectedColor}
        selectedMode={selectedMode}
      />
      <Pixels onClick={() => setPaintOrEraseColor(selectedColor)} color={paintOrEraseColor} backgroundColor={backgroundColor} />
    </>
  );
}
