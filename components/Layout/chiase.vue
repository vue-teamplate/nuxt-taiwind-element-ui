<template>
  <div class="chiase text-center">
    <!-- tieu de -->
    <h1 class="text-4xl xs:text-5xl font-semibold text-white pt-12 pb-10">
      Chia sẻ về Learnova
    </h1>
    <!-- /tieu de -->
    <div class="px-4 xs:px-20 sm:px-10 py-10">
      <div class="flex">
        <!-- col1 -->
        <div class="w-full sm:w-1/3 px-3">
          <div
            class="bg-white p-5 pt-0 text-gray-700 rounded-t-2xl rounded-b-2xl"
          >
            <div class="image flex justify-center relative">
              <img
                src="https://learnova.vn/img/temp/avatar48-5.png"
                class="rounded-full"
              />
            </div>
            <div
              class="flex justify-between items-center flex-col xs:flex-row sm:flex-col lg:flex-row"
            >
              <div>
                <p class="font-bold text-lg">-Trung Hiếu -</p>
                <div
                  class="flex justify-center xs:justify-start sm:justify-center lg:justify-start"
                  style="color: #ffc107"
                >
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                </div>
              </div>
              <p class="text-sm font-normal pt-2 lg:pt-0">
                20 tháng 10, 10:22 AM
              </p>
            </div>
            <p
              class="py-3 leading-5 font-normal italic text-justify text-sm md:text-base"
            >
              "Nội dung của những khóa học trên Learnova dễ hiểu và dễ ứng dụng.
              Giảng viên luôn có ví dục thực tế và phân tích cụ thể trong từng
              bài học. Mình khá bất ngờ khi website có thể hiển thị 2 phiên bản
              sáng tối, giúp xem video và theo dõi thông tin tập trung hơn."
            </p>
            <div class="text-right uppercase text-sm font-medium">
              Khóa học Quản lý Tài chính Gia đình
            </div>
          </div>
        </div>
        <!-- /col1 -->

        <!-- col2 -->
        <div class="w-1/3 hidden sm:block px-3">
          <div
            class="bg-white p-5 pt-0 text-gray-700 rounded-t-2xl rounded-b-2xl"
          >
            <div class="image flex justify-center relative">
              <img
                src="https://learnova.vn/img/temp/avatar48-4.png"
                class="rounded-full"
              />
            </div>
            <div
              class="flex justify-between items-center flex-col xs:flex-row sm:flex-col lg:flex-row"
            >
              <div>
                <p class="font-bold text-lg">-Thương Thương-</p>
                <div
                  class="flex justify-center xs:justify-start sm:justify-center lg:justify-start"
                  style="color: #ffc107"
                >
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                </div>
              </div>
              <p class="text-sm font-normal pt-2 lg:pt-0">
                20 tháng 10, 10:22 AM
              </p>
            </div>
            <p
              class="text-justify py-3 leading-5 font-normal italic text-sm md:text-base"
            >
              " Giao diện web thông minh, style trẻ trung hiện đại, dễ hiểu dễ
              sử dụng, không kiểu quá học thức như các website học trực tuyến
              khác. Thông tin của 1 khóa học cũng rõ ràng, từ nội dung đến thông
              tin giảng viên. Mình rất ấn tượng với phần trailer của khóa nhiếp
              ảnh, rất nghệ và hấp dẫn, xem là thấy hào hứng học rồi. "
            </p>
            <div class="text-right uppercase text-sm font-medium">
              Khóa học Nhiếp ảnh Smartphone
            </div>
          </div>
        </div>
        <!-- /col2 -->

        <!-- col3 -->
        <div class="w-1/3 hidden sm:block px-3">
          <div
            class="bg-white p-5 pt-0 text-gray-700 rounded-t-2xl rounded-b-2xl"
          >
            <div class="image flex justify-center relative">
              <img
                src="https://learnova.vn/img/temp/avatar48-x.png"
                class="rounded-full"
              />
            </div>
            <div
              class="flex justify-between items-center flex-col xs:flex-row sm:flex-col lg:flex-row"
            >
              <div>
                <p class="font-bold text-lg">- Việt Hà -</p>
                <div
                  class="flex justify-center xs:justify-start sm:justify-center lg:justify-start"
                  style="color: #ffc107"
                >
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                  <svg-icon name="star"></svg-icon>
                </div>
              </div>
              <p class="text-sm font-normal pt-2 lg:pt-0">
                20 tháng 10, 10:22 AM
              </p>
            </div>
            <p
              class="text-justify py-3 leading-5 font-normal italic text-sm md:text-base"
            >
              " Các khoá học mà Learnova cung cấp đều rất chỉn chu, chuyên
              nghiệp, là những kiến thức quan trọng và thực sự thiết thực trong
              xã hội hiện đại, năng động, rất đáng tiền. Giảng viên đều là những
              chuyên gia mà mình đã theo dõi từ lâu, những người có uy tín và
              tầm ảnh hưởng trong lĩnh vực của họ. "
            </p>
            <div class="text-right uppercase text-sm font-medium">
              Khóa học Mang bầu không âu lo
            </div>
          </div>
        </div>
        <!-- /col3 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.chiase {
  background-image: linear-gradient(to right, #e208a3, #ff4698);
  .image {
    top: -24px;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
