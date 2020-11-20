<template>
  <div class="course-detail-container">
    <div class="course-detail-thongtinkhoahoc px-32">
      <!-- tieu de -->
      <div>
        <p>Quản lý Tài chính Gia đình hiệu quả</p>
        <hr class="my-5" />
      </div>
      <!-- /tieu de -->
      <div class="course-detail-thongtinkhoahoc-col flex">
        <div class="col1 w-1/2 pr-3">
          <div class="col1-nd">
            <!-- anh -->
            <div style="--aspect-ratio: 9/5">
              <div
                class="w-full rounded-xl"
                style="
                  background-image: url(https://vova-public.s3.ap-southeast-1.amazonaws.com/courses/tai-chinh-gia-dinh/anh/tai_chinh_gia_dinh_thumbnail1.jpg);
                  width: 100%;
                  height: 100%;
                  background-size: cover;
                  background-position: center;
                "
              ></div>
            </div>
            <!-- Chan -->
            <div class="bg-red-200 flex border-b border-gray-800">
              <div>
                <h2>Thông tin khóa học</h2>
                <!-- chọn trái tim -->
                <div class="flex"></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col2 w-1/2">
          <div class="col2-1 w-1/2">
            <div class="col2-1-nd border p-6 rounded-md">
              <!-- giang vien -->
              <div class="flex justify-between">
                <p>Giảng viên</p>
                <p>TS. Đinh Thị Thanh Vân</p>
              </div>
              <!-- lo trinh hoc -->
              <div>
                <h5 class="py-2">Lộ trình học</h5>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p>Tổng giờ học</p>
                    <div class="text-indigo-600 font-bold text-3xl">3+</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p>Tổng giờ học</p>
                    <div class="text-indigo-600 font-bold text-3xl">01</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p>Tổng giờ học</p>
                    <div class="text-indigo-600 font-bold text-3xl">07</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p>Tổng giờ học</p>
                    <div class="text-indigo-600 font-bold text-3xl">00</div>
                  </div>
                </div>
              </div>
              <!-- gia tien -->
              <div class="text-right pt-4 pb-8">
                <p class="line-through text-gray-600">880.000đ</p>
                <div
                  style="color: #ff5a8d"
                  class="text-4xl font-bold leading-7"
                >
                  880.000đ
                </div>
              </div>
              <!-- mua -->
              <button
                class="text-white w-full py-4 rounded-lg font-bold text-lg"
                style="background-color: #4f67e1"
              >
                MUA NGAY
              </button>
              <p class="text-center text-gray-600 py-4 text-lg">hoặc</p>
              <button
                class="text-blue-700 border w-full py-4 rounded-lg font-bold text-lg"
                style="border-color: #4f67e1"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
          <div class="col2-2">
            <div class="col2-2-nd"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'landing-layout',
}
</script>

<style lang="scss">
.test123 {
  color: red;
}
</style>
