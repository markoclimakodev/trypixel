import { Tool } from '@/types'
import * as Icon from '@phosphor-icons/react'

interface ToolBarProps {
  selectedColor: (color: string) => void
  onModeSelected: (mode: Tool) => void
  selectedMode: Tool
}

export function ToolBar({
  selectedColor,
  onModeSelected,
  selectedMode,
}: ToolBarProps) {
  return (
    <section className='w-fit flex m-auto gap-2 bg-white p-2 rounded-md shadow-lg'>
      <input
        type='color'
        name='colorPicker'
        id='colorPicker'
        className='w-8 h-8'
        onChange={(event) => selectedColor(event.currentTarget.value)}
        onClick={() => onModeSelected('colorPicker')}
      />

      <Icon.PaintBucket
        weight='fill'
        className={
          selectedMode === 'paintBucket'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='paintBucket'
        onClick={() => onModeSelected('paintBucket')}
      />
      <Icon.PaintBrush
        weight='fill'
        className={
          selectedMode === 'paintBrush'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='paintBrush'
        onClick={() => {
          onModeSelected('paintBrush')
        }}
      />
      <Icon.Eraser
        weight='fill'
        className={
          selectedMode === 'eraser'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='eraser'
        onClick={() => onModeSelected('eraser')}
      />

      <Icon.ChalkboardSimple
        weight='fill'
        className={
          selectedMode === 'eraseAll'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='eraseAll'
        onClick={() => onModeSelected('eraseAll')
        }
      />

      {/* <Icon.DownloadSimple
        weight='fill'
        className={
          selectedMode === 'download'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='download'
        onClick={(event) => onModeSelected('download')}
      /> */}
    </section>
  )
}
