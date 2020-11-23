<template>
  <div>
    <header-landing></header-landing>
    <Nuxt />
    <ModalSearch ref="modalSearch" />
  </div>
</template>

<script>
import ModalSearch from '@/components/Layout/ModalSearch'
export default {
  components: {
    ModalSearch,
  },
  methods: {},
}
</script>
