import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

// import Vue2Emoji from 'vuejs-emoji'
// Vue.use(Vue2Emoji)

Vue.use(iView, {
  locale
})

import { mapActions, mapGetters } from 'vuex';
// mixins for using common methods

Vue.mixin({
    computed: { 
        ...mapGetters({
            // authUser:'getAuthUser',
            // isLoggedIn:'isLoggedIn',
        }),
    },
  methods: {
      i(msg, i = 'Hey!') {
          this.$Notice.info({
              title: i,
              desc: msg
          });
      },
      s(msg, i = 'Great!') {
          this.$Notice.success({
              title: i,
              desc: msg
          });
      },
      w(msg, i = 'Hi!') {
          this.$Notice.warning({
              title: i,
              desc: msg
          });
      },
      e(msg, i = 'Oops!') {
          this.$Notice.error({
              title: i,
              desc: msg,

          });
      },
      swr() {
          this.$Notice.error({
              title: 'Oops',
              desc: 'Something went wrong, please try again later'
          });
      },
    //   async callApi(method, url, dataObj) {
    //       try {
    //           let data = await this.$axios({
    //               config: {
    //                 withCredentials: true
    //               },
    //               method: method,
    //               url: url,
    //               data: dataObj,

    //           })
    //           return data

    //       } catch (e) {

    //           return e.response
    //       }
    //   },
    async callApi(method, url, dataObj) {
        try {
            let data = await this.$axios({
                config: {
                  withCredentials: true
                },
                method: method,
                url: url,
                data: dataObj,
            })
            return data

        } catch (e) {

            return e.response
        }
    },


  }
})

