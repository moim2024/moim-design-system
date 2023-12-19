import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import Button from '.'
import { Menu, Share, Write } from '../../icons'

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const Primary: StoryObj<typeof meta> = {
  args: {
    text: 'Text',
  },
}
export const SecondaryFill: StoryObj<typeof meta> = {
  args: {
    text: 'Text',
    variant: 'secondary',
    fill: true,
  },
}

export const Icon: StoryFn<typeof meta> = () => {
  return (
    <>
      <Button text='메뉴' icon={<Menu />} />
      <Button text="수정" variant="secondary" size="lg" icon={<Write />} />
      <Button text="수정"icon={<Write />} disabled />
      <Button text='프로필 링크 복사' icon={<Share />} fill />
    </>
  )
}