import PrimaryBox from '../components/PrimaryBox'
import { variables } from '../services/variables'

export default {
  title: 'Example/PrimaryBox',
  component: PrimaryBox,
  args: {
    logo: require('../assets/img/customer-1.svg'),
    logoBg: variables.colors.yellowColor,
    firstText: 'kanban-test',
    secondText: 'USER STORY',
    thirdText: '#1',
    fourthText: 'story',
    fifthText: 'Ready for test',
    fifthTextColor: variables.colors.yellowColor
  },
  argTypes: {
    logo: { control: { type: 'text' } },
    logoBg: { control: 'color' },
    firstText: { control: { type: 'text' } },
    secondText: { control: { type: 'text' } },
    thirdText: { control: { type: 'text' } },
    fourthText: { control: { type: 'text' } },
    fifthText: { control: { type: 'text' } },
    fifthTextColor: { control: { type: 'text' } }
  }
}

const ButtonTemplate = args => ({
  components: { PrimaryBox },
  setup () {
    return { args }
  },
  template: '<PrimaryBox />'
})

export const Primary = ButtonTemplate.bind({})
