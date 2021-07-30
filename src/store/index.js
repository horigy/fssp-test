import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import news from './news'
import articles from './articles'
import filials from './filials'

export default new Vuex.Store({
  modules: {
    news,
    articles,
    filials
  }
})