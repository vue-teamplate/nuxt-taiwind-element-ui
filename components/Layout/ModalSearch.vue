<template>
  <EmptyDialog ref="modal">
    <div class="p-5 rounded-xl bg-white">
      <div class="flex border border-gray-200 p-1 rounded-lg">
        <div class="flex items-center p-2 flex-grow">
          <svg-icon
            name="search-outline"
            class="text-2xl text-blue-600 font-bold mr-1"
          ></svg-icon>
          <input class="w-full outline-none" placeholder="Tìm khoá học" />
        </div>
        <div
          class="cursor-pointer p-1 m-1 border border-gray-400 rounded-md bg-gray-100 text-gray-600"
          @click="hideModal"
        >
          esc
        </div>
      </div>
      <div class="flex space-x-5">
        <div class="w-full sm:w-2/3">
          <div class="mt-2 text-gray-600">Tìm thấy 200 khoá học</div>
          <div class="w-full flex mt-5">
            <div style="--aspect-ratio: 1/1" class="w-20">
              <img
                class="object-cover rounded-sm"
                src="https://vova-public.s3.ap-southeast-1.amazonaws.com/courses/tai-chinh-gia-dinh/anh/tai_chinh_gia_dinh_thumbnail1.jpg"
              />
            </div>
            <div class="flex flex-col ml-2">
              <div class="text-ellipsis-2 text-lg cursor-pointer">
                Quản lý Tài chính Gia đình hiệu quả
              </div>
              <div class="text-gray-600">600.000đ</div>
              <div class="text-gray-600">
                <span>Phân loại: </span>
                <span class="text-gray-700">Mọi trình độ</span>
              </div>
            </div>
          </div>
          <div class="w-full flex mt-5">
            <div style="--aspect-ratio: 1/1" class="w-20">
              <img
                class="object-cover rounded-sm"
                src="https://vova-public.s3.ap-southeast-1.amazonaws.com/courses/tai-chinh-gia-dinh/anh/tai_chinh_gia_dinh_thumbnail1.jpg"
              />
            </div>
            <div class="flex flex-col ml-2">
              <div class="text-ellipsis-2 text-lg cursor-pointer">
                Quản lý Tài chính Gia đình hiệu quả
              </div>
              <div class="text-gray-600">600.000đ</div>
              <div class="text-gray-600">
                <span>Phân loại: </span>
                <span class="text-gray-700">Mọi trình độ</span>
              </div>
            </div>
          </div>
          <div class="w-full flex mt-5">
            <div style="--aspect-ratio: 1/1" class="w-20">
              <img
                class="object-cover rounded-sm"
                src="https://vova-public.s3.ap-southeast-1.amazonaws.com/courses/tai-chinh-gia-dinh/anh/tai_chinh_gia_dinh_thumbnail1.jpg"
              />
            </div>
            <div class="flex flex-col ml-2">
              <div class="text-ellipsis-2 text-lg cursor-pointer">
                Quản lý Tài chính Gia đình hiệu quả
              </div>
              <div class="text-gray-600">600.000đ</div>
              <div class="text-gray-600">
                <span>Phân loại: </span>
                <span class="text-gray-700">Mọi trình độ</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex-shrink-0 hidden sm:block">
          <div>
            <div class="text-lg font-bold py-2 border-b border-gray-300">
              Đời sống
            </div>
            <ul class="mt-2">
              <li class="p-2 cursor-pointer">
                <el-checkbox label="Nhiếp ảnh"></el-checkbox>
              </li>
              <li class="p-2 cursor-pointer">
                <el-checkbox label="Tài chính gia đình"></el-checkbox>
              </li>
            </ul>
          </div>
          <div>
            <div class="text-lg font-bold py-2 border-b border-gray-300">
              Đời sống
            </div>
            <ul class="mt-2">
              <li class="p-2 cursor-pointer">
                <el-checkbox label="Nhiếp ảnh"></el-checkbox>
              </li>
              <li class="p-2 cursor-pointer">
                <el-checkbox label="Tài chính gia đình"></el-checkbox>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </EmptyDialog>
</template>

<script>
import ElCheckbox from 'element-ui/lib/checkbox'
import EmptyDialog from '@/components/Common/EmptyDialog'
export default {
  components: {
    EmptyDialog,
    ElCheckbox,
  },
  created() {
    this.$nuxt.$on('show-model-search', () => {
      this.$refs.modal.show()
    })
  },
  methods: {
    show() {
      this.$refs.modal.show()
    },
    hideModal() {
      this.$refs.modal.hide()
    },
  },
}
</script>
