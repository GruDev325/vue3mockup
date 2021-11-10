import SecondBox from '../components/SecondBox'

export default {
  title: 'Example/SecondBox',
  component: SecondBox,
  args: {
    titleText: 'scrum-test-2',
    logoText: 'blah',
    favorCount: 0,
    visitedCount: 1,
    userCount: 1
  },
  argTypes: {
    titleText: { control: { type: 'text' } },
    logoText: { control: { type: 'text' } },
    favorCount: { control: { type: 'number' } },
    visitedCount: { control: { type: 'number' } },
    userCount: { control: { type: 'number' } }
  }
}

const ButtonTemplate = args => ({
  components: { SecondBox },
  setup () {
    return { args }
  },
  template: '<SecondBox />'
})

export const Primary = ButtonTemplate.bind({})
