<template>
  <el-popover
    class="inline-block rounded-lg"
    trigger="hover"
    placement="bottom-start"
    popper-class="button-explore"
  >
    <div class="button-explore__content">
      <div>
        <div class="text-lg font-bold py-2 border-b border-gray-300">
          Đời sống
        </div>
        <ul class="mt-2">
          <li class="p-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700">
            Nhiếp ảnh
          </li>
          <li class="p-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700">
            Tài chính gia đình
          </li>
        </ul>
      </div>
      <div>
        <div class="text-lg font-bold py-2 border-b border-gray-300">
          Đời sống
        </div>
        <ul class="mt-2">
          <li class="p-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700">
            Nhiếp ảnh
          </li>
          <li class="p-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700">
            Tài chính gia đình
          </li>
        </ul>
      </div>
    </div>
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
  margin-top: 2px !important;
  .popper__arrow {
    @apply hidden;
  }
  &__content {
    min-width: 200px;
  }
}
</style>
