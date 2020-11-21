<template>
  <el-popover
    class="inline-block rounded-lg"
    trigger="hover"
    popper-class="button-explore"
  >
    <div>abcd</div>
    <div slot="reference" class="px-3 py-1">
      <span class="font-medium text-lg">Khám phá khoá học</span>
      <svg-icon name="chevron-down-outline"></svg-icon>
    </div>
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/lib/popover'
export default {
  components: {
    ElPopover,
  },
}
</script>

<style lang="scss">
.button-explore {
  .popper__arrow {
    @apply hidden;
  }
}
</style>
