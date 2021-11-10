<template>
  <Header />
  <div class="container mx-auto md:px-3 px-4 md:pb-32 pb-10">
    <h2 class="mt-5 text-2xl font-bold text-labelColor">Projects Dashboard</h2>
    <Tabs :tabsNames="tabNames" searchPlaceholder="subject or reference" @changed="getTabValue"/>
    <div class="tab-body">
      <div v-if="activeTab === 'Employees'" class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-5">
        <div class="first-column flex flex-col justify-between md:row-span-3">
          <div class="border border-gray-200 rounded-lg overflow-hidden">
              <p class="px-5 py-3 border-b border-gray-200 bg-boxBgColor">Working on</p>
              <div class="p-5 border-b border-gray-200">
                <PrimaryBox
                  :logo="require('../assets/img/tobacco.svg')"
                  :logoBg="variables.colors.greenColor"
                  :firstText="'scrum-test-2'"
                  :secondText="'USER STORY New'"
                  :thirdText="'#1'"
                  :fourthText="'ticket'"
                />
              </div>
              <div class="p-5 bg-boxBgColor">
                <PrimaryBox
                  :logo=" require('../assets/img/tobacco.svg')"
                  :logoBg=" variables.colors.yellowColor"
                  :firstText="'kanban-test'"
                  :secondText="'USER STORY'"
                  :thirdText=" '#1'"
                  :fourthText="'story'"
                  :fifthText="'Ready for test'"
                  :fifthTextColor="variables.colors.yellowColor"
                />
              </div>
          </div>
          <SecondBox
           :titleText="'scrum-test'"
           :logoText="'testing'"
           :favorCount="feedback['scrumTest']['favorCount']"
           :visitedCount="feedback['scrumTest']['visitedCount']"
           :userCount="feedback['scrumTest']['userCount']"
           @updateFeedback="updateFeedback"
          />
        </div>
        <div class="second-column md:row-span-3">
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <p class="px-5 py-3 border-b border-gray-200 bg-boxBgColor">Watching</p>
            <div class="py-4 px-11">
              <PrimaryBox
                :logo="require('../assets/img/customer-1.svg')"
                :logoBg=" variables.colors.yellowColor"
                :firstText=" 'kanban-test'"
                :secondText=" 'USER STORY'"
                :thirdText=" '#1'"
                :fourthText=" 'story'"
                :fifthText=" 'Ready for test'"
                :fifthTextColor="variables.colors.yellowColor"
              />
              <p class="content-text mt-3 mb-9 text-sm text-boxGrey font-normal leading-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
              <Button :value="'Manage projects'" :background="variables.colors.btnBlue" :fontColor="'white'" :padding="variables.spacing.md" class="mb-4"/>
              <Button :value="'Edit projects'" :background="variables.colors.btnGrey" :fontColor="variables.colors.btnBlue" :padding="variables.spacing.sm" />
            </div>
          </div>
          <div class="border border-gray-200 rounded-lg overflow-hidden py-5 px-10 mt-5">
            <div class="logo-box flex items-center mb-5">
              <div class="rounded-md w-12 h-12 flex items-center justify-center bg-yellowColor mr-3">
                <img src="../assets/img/tobacco.svg" alt="tobacco-img"/>
              </div>
              <div class="text-panel flex justify-center flex-col">
                <p class="title flex items-center text-labelColor text-sm font-bold">
                  <span class="mr-2">kanban-test</span><img src="../assets/img/star.svg" alt="tobacco-img"/>
                </p>
                <p class="mt-1 text-boxGrey text-sm font-normal">Description line here</p>
              </div>
            </div>
            <Button  :value="'Manage projects'" :background="variables.colors.btnGrey" :fontColor="variables.colors.btnBlue" :padding="variables.spacing.sm"/>
          </div>
        </div>
        <div class="third-column md:row-span-1">
          <SecondBox
           :titleText="'scrum-test-2'"
           :logoText="'blah'"
           :favorCount="feedback['secondScrumTest']['favorCount']"
           :visitedCount="feedback['secondScrumTest']['visitedCount']"
           :userCount="feedback['secondScrumTest']['userCount']"
           @updateFeedback="updateFeedback"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue'
import { variables } from '../services/variables'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Dashboard',
  setup () {
    const store = useStore()
    return {
      feedback: computed(() => store.state.feedback),
      updateFeedback: (scrumType: string, iconType: string) => {
        store.commit({
          type: 'updateFeedback',
          scrumType: scrumType === 'scrum-test' ? 'scrumTest' : 'secondScrumTest',
          iconType: iconType
        })
      }
    }
  },
  data: function () {
    return {
      activeTab: 'Employees',
      tabNames: ['Employees', 'Departments'],
      variables: variables
    }
  },
  methods: {
    getTabValue: function (value : string) {
      this.activeTab = value
    }
  },
  components: {
    Button: defineAsyncComponent(() => import('../components/Button.vue')),
    Header: defineAsyncComponent(() => import('../components/Header.vue')),
    Tabs: defineAsyncComponent(() => import('../components/Tabs.vue')),
    PrimaryBox: defineAsyncComponent(() => import('../components/PrimaryBox.vue')),
    SecondBox: defineAsyncComponent(() => import('../components/SecondBox.vue'))
  }
})
</script>
