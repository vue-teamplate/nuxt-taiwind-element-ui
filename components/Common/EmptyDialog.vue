<template>
  <el-dialog
    custom-class="dialog-empty w-11/12 lg:w-1/2"
    :visible.sync="visible"
  >
    <div slot="header"></div>
    <slot></slot>
  </el-dialog>
</template>

<script>
import ElDialog from 'element-ui/lib/dialog'
export default {
  components: {
    ElDialog,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.dialog-empty {
  background-color: transparent !important;
  box-shadow: none !important;
  .el-dialog__header {
    display: none !important;
  }
  .el-dialog__body {
    padding: 0 !important;
    background-color: transparent;
  }
}
</style>
