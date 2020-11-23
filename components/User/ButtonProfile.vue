<template>
  <el-popover trigger="click">
    <div
      slot="reference"
      class="shadow-md rounded-lg cursor-pointer border outline-none px-2 py-1 border-gray-100 flex items-center"
    >
      <el-avatar :size="32"> </el-avatar>
      <div class="flex flex-col ml-2 justify-center">
        <strong class="text-black">Nguyễn Văn Thường</strong>
        <span class="text-gray-700 text-sm">Trang cá nhân</span>
      </div>
    </div>
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/lib/popover'
import ElAvatar from 'element-ui/lib/avatar'
export default {
  components: {
    ElPopover,
    ElAvatar,
  },
}
</script>
