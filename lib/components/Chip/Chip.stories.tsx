import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import Chip from '.'

const meta = {
  title: 'Component/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta

export const Contain: StoryObj<typeof meta> = {
  args: {
    text: 'Text',
    onDelete: undefined,
  },
}

export const OutlineGray: StoryObj<typeof meta> = {
  args: {
    text: 'Text',
    variant: 'outline',
    onDelete: undefined,
  },
}

export const OutlineBlack: StoryObj<typeof meta> = {
  args: {
    text: 'Text',
    variant: 'outline',
    colorScheme: 'black',
    onDelete: undefined,
  },
}

export const Icon: StoryFn<typeof meta> = () => {
  const handleClick = () => {
    console.log('click chip')
  }
  const handleDelete = () => {
    console.log('click delete icon')
  }
  return (
    <>
      <Chip text="text" onClick={handleClick} onDelete={handleDelete} />
    </>
  )
}
