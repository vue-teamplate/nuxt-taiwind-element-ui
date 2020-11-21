<template>
  <div class="course-detail-container">
    <div class="px-32">
      <!-- tieu de -->
      <div>
        <h1 class="text-4xl font-semibold pb-3">
          Quản lý Tài chính Gia đình hiệu quả
        </h1>
        <hr />
      </div>
      <!-- ket thuc tieu de -->

      <!-- bat dau noi dung -->
      <div class="course-detail-thongtinkhoahoc-col flex pt-6 box-border">
        <!-- col1 -->
        <div class="w-1/2 pr-8">
          <!-- col1-nd -->
          <div class="h-full flex flex-col">
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
            <div class="flex-grow">
              <div
                class="flex border-gray-800 justify-between border-b py-8 h-full"
              >
                <!-- cot1 -->
                <div class="flex flex-col justify-between">
                  <h2 class="text-2xl font-medium pr-6">Thông tin khóa học</h2>
                  <!-- chọn heart & bookmark-->
                  <div class="flex">
                    <!-- heart -->
                    <div class="w-1/6">
                      <div class="inline-block text-center">
                        <svg-icon
                          name="heart-outline"
                          class="text-2xl text-gray-800"
                        ></svg-icon>
                        <p class="text-sm text-gray-600">5</p>
                      </div>
                    </div>
                    <!-- bookmark -->
                    <div class="w-2/6">
                      <div class="inline-block text-center">
                        <svg-icon
                          name="bookmark-outline"
                          class="text-2xl text-gray-800"
                        ></svg-icon>
                        <p class="text-sm text-gray-600">3 đã lưu</p>
                      </div>
                    </div>
                    <!-- so nguoi mua -->
                    <div class="w-3/6">
                      <div class="inline-block text-center">
                        <div class="flex justify-center">
                          <img
                            src="https://vova-public.s3.ap-southeast-1.amazonaws.com/default/profile-pic.png"
                            class="w-6 relative"
                            style="right: -11px"
                          />
                          <img
                            src="https://vova-public.s3.ap-southeast-1.amazonaws.com/default/profile-pic.png"
                            class="w-6 z-50"
                          />
                          <img
                            src="https://vova-public.s3.ap-southeast-1.amazonaws.com/default/profile-pic.png"
                            class="w-6 relative z-50"
                            style="left: -11px"
                          />
                        </div>
                        <p class="text-sm text-gray-600">25 người đã mua</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ket thuc cot1 -->

                <!-- cot2 -->
                <div class="flex flex-col justify-between items-end">
                  <div>
                    <button
                      class="rounded-sm py-1 px-2"
                      style="background-color: #1877f2"
                    >
                      <div class="items-center flex text-white text-sm">
                        <img
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/ps3LEjFUMch.png"
                        />

                        <p class="px-1 font-medium">Chia sẻ</p>
                        <p class="font-medium">0</p>
                      </div>
                    </button>
                  </div>
                  <!-- danh gia-->
                  <div>
                    <div class="flex">
                      <p>Đánh giá:</p>
                      <div class="flex text-gray-500 flex-wrap justify-center">
                        <svg-icon name="star" class="pb-2 text-2xl"></svg-icon>
                        <svg-icon name="star" class="pb-2 text-2xl"></svg-icon>
                        <svg-icon name="star" class="pb-2 text-2xl"></svg-icon>
                        <svg-icon name="star" class="pb-2 text-2xl"></svg-icon>
                        <svg-icon name="star" class="pb-2 text-2xl"></svg-icon>
                      </div>
                    </div>
                    <p class="text-right">0 đánh giá</p>
                  </div>
                </div>
                <!-- ket thuc cot2 -->
              </div>
            </div>
          </div>
        </div>
        <!-- col2 -->
        <div class="w-1/2 flex">
          <div class="w-1/2 pr-4">
            <div class="border p-5 rounded-md">
              <!-- giang vien -->
              <div class="flex justify-between text-xl">
                <p>Giảng viên</p>
                <p class="text-gray-600">TS. Đinh Thị Thanh Vân</p>
              </div>
              <!-- lo trinh hoc -->
              <div>
                <h5 class="pt-3 pb-2 text-base">Lộ trình học</h5>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p class="text-sm text-blue-600">Tổng giờ học</p>
                    <div class="text-indigo-600 font-bold text-3xl">3+</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p class="text-sm text-blue-600">Chứng chỉ đã nhận</p>
                    <div class="text-indigo-600 font-bold text-3xl">01</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p class="text-sm text-blue-600">Bài học</p>
                    <div class="text-indigo-600 font-bold text-3xl">07</div>
                  </div>
                  <div class="bg-gray-200 rounded-lg text-center p-4">
                    <p class="text-sm text-blue-600">Thực hành</p>
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
                class="text-white w-full py-4 rounded-lg font-bold text-tlg focus:outline-none"
                style="background-color: #4f67e1"
              >
                MUA NGAY
              </button>
              <p class="text-center text-gray-600 py-4 text-lg">hoặc</p>
              <button
                class="text-blue-700 border w-full py-4 rounded-lg font-bold text-lg mb-6 focus:outline-none"
                style="border-color: #4f67e1"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
          <div class="col2-2 w-1/2 pl-4">
            <div class="col2-2-nd rounded-md bg-gray-200 text-blue-700 h-full">
              <h1 class="p-5 text-2xl">Duy nhất học tại Learnova</h1>
              <hr class="ad" />
              <!-- list -->
              <div class="p-5">
                <ul>
                  <li class="flex items-center pb-4">
                    <svg-icon name="document-text-outline"></svg-icon>
                    <p class="text-lg px-2">Nội dung chất lượng cao</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="trending-up-outline"></svg-icon>
                    <p class="text-lg px-2">Hiệu quả thực tế</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="bulb-outline"></svg-icon>
                    <p class="text-lg px-2">Trải nghiệm học tập thuận tiện</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="mic-outline"></svg-icon>
                    <p class="text-lg px-2">
                      Tương tác trực tiếp với giảng viên
                    </p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="musical-note-outline"></svg-icon>
                    <p class="text-lg px-2">Cộng đồng học tập sôi động</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="tv-outline"></svg-icon>
                    <p class="text-lg px-2">Thực hành đa dạng</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="tv-outline"></svg-icon>
                    <p class="text-lg px-2">Giảng viên uy tín</p>
                  </li>
                  <li class="flex items-center pb-4">
                    <svg-icon name="key-outline"></svg-icon>
                    <p class="text-lg px-2">Cung cấp chứng chỉ</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ket thuc noi dung -->
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
