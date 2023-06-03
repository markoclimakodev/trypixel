'use client';
import { useEffect, useState } from 'react';

import { Header } from '@/components/Header';
import { Pixels } from '@/components/Pixels';
import { ToolBar } from '@/components/ToolBar';
import { Tool } from '@/types';

export default function Playground() {
  const [selectedMode, setSelectedMode] = useState<Tool>('paintBrush');
  const [color, setColor] = useState('#000000');
  const [eraseColor, setEraseColor] = useState('transparent');
  const [paint, setpaint] = useState('');
  const [boardColor, setBoardColor] = useState('#ffffff');

  useEffect(() => {
    if (selectedMode === 'paintBucket') {
      setBoardColor(color);
      setSelectedMode('none');
    } else if (selectedMode === 'paintBrush') {
      setColor(color);
      setpaint(color);
    } else if (selectedMode === 'eraser') {
      setEraseColor(eraseColor);
      setpaint(eraseColor);
    } else if(selectedMode === 'colorPicker') {
      setSelectedMode('paintBrush' );
    }
  }, [
    selectedMode,
    color,
    setColor,
    setpaint,
    eraseColor,
    setBoardColor,
  ]);

  return (
    <>
      <Header />
      <p>{`-----mode :( ${selectedMode} ) | color :(${color}) | erase-color :( ${eraseColor}) | paint :(${paint})-----`}</p>
      <ToolBar
        onModeSelected={setSelectedMode}
        selectedColor={setColor}
        selectedMode={selectedMode}
      />
      <Pixels
        onClick={()=>paint}
        color={paint}
        boardColor={boardColor}
      />
    </>
  );
}
