<template>
  <div class="mt-10 m-auto w-64 text-blue-700">
    <div>
      <nuxt-link :to="{ path: '/course' }">Course detail</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="{ path: '/landing' }">Landing page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'empty',
}
</script>
