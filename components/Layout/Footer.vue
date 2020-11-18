<template>
  <div class="footer bg-white px-16">
    <div class="flex justify-between py-16">
      <div class="w-4/12">
        <div>
          <img
            src="https://learnova.vn/img/logo-learnova.svg"
            style="width: 200px"
          />
          <p class="pt-6 text-gray-600 leading-5" style="font-size: 17px">
            Learnova tiên phong cung cấp khóa học trực tuyến chất lượng cao trên
            nền tảng hoàn toàn đổi mới dành cho các bạn trẻ và gia đình trẻ Việt
            Nam.
          </p>
        </div>
      </div>
      <div class="w-6/12 flex">
        <div class="w-1/2">
          <h2 class="text-2xl font-semibold pb-5">Khám Phá Chủ Đề</h2>
          <div class="text-gray-600">
            <ul>
              <li class="text-lg py-1"><a href="#">Đời sống</a></li>
              <li class="text-lg py-1"><a href="#">Quản lý tài chính</a></li>
              <li class="text-lg py-1"><a href="#">Làm cha mẹ</a></li>
              <li class="text-lg py-1"><a href="#">Tình dục</a></li>
            </ul>
          </div>
        </div>
        <div class="w-1/2">
          <h2 class="text-2xl font-semibold pb-5">Thông Tin</h2>
          <div class="text-gray-600">
            <ul>
              <li class="text-lg py-1"><a href="#">Về chúng tôi</a></li>
              <li class="text-lg py-1"><a href="#">Điều khoản sử dụng</a></li>
              <li class="text-lg py-1"><a href="#">Làm cha mẹ</a></li>
              <li class="text-lg py-1"><a href="#">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-t border-gray-400" />
    <div
      class="flex text-gray-600 py-3 justify-between"
      style="font-size: 14px"
    >
      <div class="njj" style="width: 45%">
        <p class="font-semibold">© 2020 Learnova</p>
        <p>
          Trụ sở chính: Tầng 3, Thiên Sơn Plaza, Chương Dương Độ, Hoàn Kiếm, Hà
          Nội Bản quyền của Công ty Cổ phần Công nghệ Giáo dục Learnova Việt Nam
          (Learnova)
        </p>
      </div>
      <div class="flex items-center">
        <div>
          <p class="pr-8 pl-4">
            Giấy phép ĐKKD số 0109267298 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp
          </p>
        </div>
        <div>
          <ul class="flex">
            <li class="p-1">
              <a
                href="#"
                class="facebook w-12 h-12 rounded-full flex justify-center items-center bg-gray-200 text-lg"
              >
                <svg-icon name="logo-facebook"></svg-icon
              ></a>
            </li>
            <li class="p-1">
              <a
                href="#"
                class="youtube w-12 h-12 rounded-full flex justify-center items-center bg-gray-200 text-lg"
                ><svg-icon name="logo-youtube" class="w-full"></svg-icon
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.facebook:hover {
  background-color: rgb(46, 46, 185);
  color: white;
}
.youtube:hover {
  background-color: rgb(252, 102, 32);
  color: white;
}
</style>
