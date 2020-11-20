<template>
  <div class="batdau flex justify-center">
    <div class="batdau-bg flex justify-center pt-48 pb-10 px-5 xs:px-10">
      <div
        class="text-center rounded-t-xl rounded-b-xl py-4 xs:py-8 px-6 xs:px-16 md:px-24 bg-indigo-100"
      >
        <h2 class="font-semibold text-xl xs:text-2xl md:text-3xl">
          Để chúng tôi giúp bạn lựa chọn khóa học phù hợp nhất!
        </h2>
        <button
          class="batdau-button px-10 py-2 rounded-full text-white font-bold mt-5"
          style="outline: none"
        >
          Bắt đầu
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.batdau-bg {
  background-image: url(https://learnova.vn/img/temp/bg-oo.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.batdau-button {
  font-size: 17px;
  background-image: url(https://learnova.vn/img/temp/bg-oo.png),
    linear-gradient(to right, #e208a3, #f72889);
}
</style>
