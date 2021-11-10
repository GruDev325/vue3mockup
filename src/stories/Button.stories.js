import Button from '../components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    value: 'Manage projects',
    background: '#24599C',
    fontColor: 'white',
    padding: '10'
  },
  argTypes: {
    background: { control: 'color' },
    value: { control: { type: 'text' } },
    fontColor: { control: 'color' },
    padding: { control: { type: 'text' } }
  }
}

const ButtonTemplate = args => ({
  components: { Button },
  setup () {
    return { args }
  },
  template: '<Button />'
})

export const Primary = ButtonTemplate.bind({})
