import axios from 'axios'
export const state = () => ({
  allData: null,
  userInfo: null,
  defaultData:
        null
        // { // for testing ofline
        //   id: '12334',
        //   mobile: '09100188928',
        //   first_name: 'یاسمن',
        //   last_name: 'گونه ای',
        //   national_code: '0024157171',
        //   photo: '',
        //   province: 'تهران',
        //   address: 'خ ویلا',
        //   school: 'شهدای هفتم تیر',
        //   major: 'ریاضی',
        //   grade: 'دوازدهم',
        //   gender: 'خانم',
        //   city: 'تهران'
        // }
})
export const getters = {
  userAllData: state => state.allData,
  userInfoData: state => state.userInfo,
  userDefaultData: state => state.defaultData

  // both formdialog and main form will get this
  // dailog compares the two objects in a method
}
export const mutations = {
  setUser: (state, user) => (state.userInfo = user),
  setAllData: (state, user) => (state.allData = user),
  setDefaultUser: (state, user) => {
    const defaultUser = { // this is for when user first logs in
      id: user.id === undefined ? null : user.id,
      mobile: user.mobile === undefined ? null : user.mobile,
      first_name: user.first_name === undefined ? null : user.first_name,
      last_name: user.last_name === undefined ? null : user.last_name,
      national_code: user.national_code === undefined ? null : user.national_code,
      photo: user.photo === undefined ? null : user.photo,
      province: user.province === undefined ? null : user.province,
      address: user.address === undefined ? null : user.address,
      school: user.school === undefined ? null : user.school,
      major: user.major === undefined ? null : user.major.title,
      grade: user.grade.id === undefined ? null : user.grade.id,
      gender: user.gender.title === undefined ? null : user.gender.title,
      city: user.shahr.title === undefined ? null : user.shahr.title
    }
    console.log(defaultUser)
    state.userInfo = defaultUser
  },
  updateCompleted: (state, data) => {
    const user = state.userInfo
    const updatedUser = {
      ...user, // we want the whole data
      ...data

    }
    state.userInfo = updatedUser
  }

// the user has the updated data with the properties that should be updated
}
export const actions = {
  // async fetchIds({ commit }) {
  //     const response = await axios.get(https://alaatv.com/api/v2/megaroute/getUserFormData);
  //     commit("setUser", response.data);
  //   },
  // this comes with a method to find the id that we want  major_id , grade_id: , gender_id, shahr_id
  async setAllData ({ commit }, allData) {
    const allUserData = allData.data.data.user
    console.log(allUserData)
    await commit('setDefaultUser', allUserData)
  },
  updateUser: async (context, user) => {
    const updatedData = {
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
      school: user.school,
      major_id: 0,
      grade_id: 0,
      gender_id: 0,
      shahr_id: 0
    }
    const userId = user.id
    console.log(userId)
    const response = await axios.put(
        `https://thingproxy.freeboard.io/fetch/https://alaatv.com/api/v2/user/${userId}`, updatedData // PUT link :/user/{userId}
    )
    console.log(response)
    await context.commit('updateCompleted', user)
  }
}
