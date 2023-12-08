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
    children: 'Text',
  },
}
export const SecondaryFill: StoryObj<typeof meta> = {
  args: {
    children: 'Text',
    variant: 'secondary',
    fill: true,
  },
}

export const Icon: StoryFn<typeof meta> = () => {
  return (
    <>
      <Button>
        <Menu />
        메뉴
      </Button>
      <Button variant="secondary" size="lg">
        <Write />
        수정
      </Button>
      <Button disabled>
        <Write />
        수정
      </Button>
      <Button fill>
        <Share />
        프로필 링크 복사
      </Button>
    </>
  )
}