<template>
  <div class="box-border relative">
    <div class="absolute top-0 right-0 left-0 z-50"><navbar-landing /></div>

    <div style="--aspect-ratio: 9/5" class="ratio-header-slider">
      <div
        class="header-slider flex items-center sm:bg-auto lg:bg-cover lg:bg-center md:bg-bottom sm:bg-left-bottom pt-24 sm:pt-20 lg:pt-0"
      >
        <div class="header-slide__content">
          <div class="nd px-6 xs:px-16 sm:px-32 md:px-48">
            <div class="w-full md:w-3/5 lg:w-2/5 flex flex-col justify-center">
              <div
                class="text-white font-bold tracking-normal text-4xl xs:text-5xl lg:text-6xl md:tracking-wide leading-tight md:leading-normal"
              >
                Kỹ năng mới mỗi ngày với
                <span class="font-bold" style="color: #ffc107">Learnova</span>
              </div>
              <div class="text-white sm:text-xl lg:text-2xl py-3 md:py-10">
                Để chúng tôi giúp bạn lựa chọn khóa học phù hợp nhất!
              </div>
              <div class="pt-2 xs:pt-4 pl-2">
                <button
                  class="b1 bg-white text-indigo-600 w-32 xs:w-40 font-semibold text-base xs:text-lg rounded-md mt-2 ml-4 py-2 xs:py-3"
                  style="outline: none"
                >
                  Tìm hiểu thêm
                </button>
                <button
                  class="b2 text-white w-32 xs:w-40 font-semibold text-base xs:text-lg rounded-md mt-2 ml-4 py-2 xs:py-3"
                  style="outline: none"
                >
                  Bắt đầu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLanding from './NavbarLanding.vue'
export default {
  components: { NavbarLanding },
}
</script>

<style lang="scss">
.header-slider {
  background-image: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.5)),
    url('~assets/image/top-banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  .nd {
    .b2 {
      background-image: linear-gradient(to right, #e208a3, #ff4698);
    }
  }
}

@media screen and(max-width: 768px) {
  .ratio-header-slider {
    &::before {
      padding-bottom: 80% !important;
    }
  }
}

@media screen and(max-width: 576px) {
  .ratio-header-slider {
    &::before {
      padding-bottom: 135% !important;
    }
  }
}
</style>
