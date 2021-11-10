import { users } from '../../services/user'

export default {
  state: {
    accessToken: ''
  },
  getters: {
    getAccessToken: (state: any): string => state.accessToken
  },
  mutations: {
    setAccessToken: (state: any, value: string): void => {
      state.accessToken = value
    }
  },
  actions: {
    async loginWithToken (context: any) {
      const token = localStorage.getItem('user')
      //   check token
      const loggedInUser = users.find(
        fakeInfo => token === fakeInfo.accessToken.toString()
      )

      if (loggedInUser) {
        await context.commit('setAccessToken', loggedInUser.accessToken)
      } else {
        localStorage.setItem('user', '')
      }
    },
    loginWithEmail (
      context: any,
      userInfo: { email: string; password: string }
    ): any {
      const registeredUser = users.find(fakeInfo => {
        return (
          userInfo.email === fakeInfo.email
        )
      })
      let loggedInUser
      if (registeredUser) {
        if (userInfo.password === registeredUser?.password) {
          loggedInUser = registeredUser
        } else {
          return { status: 400, message: 'Password is incorrect.' }
        }
      } else {
        return { status: 400, message: 'User is not registered yet.' }
      }
      if (loggedInUser) {
        localStorage.setItem('user', loggedInUser.accessToken)
        context.commit('setAccessToken', loggedInUser.accessToken)
        return { status: 200, message: 'Success.' }
      }
      return { status: 500, message: 'Unknown Issue.' }
    }
  }
}
