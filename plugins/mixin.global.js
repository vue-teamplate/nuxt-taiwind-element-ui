import Vue from 'vue'
import get from 'lodash/get'
import set from 'lodash/set'

Vue.mixin({
  methods: {
    $getProp: get,
    $setProp: set,
    $createDynamicForm(config) {
      return config
    },
  },
})
