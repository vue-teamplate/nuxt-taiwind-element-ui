<template>
  <div>
    <div class="box-border relative">
      <div
        class="header-slider items-center sm:bg-auto lg:bg-cover lg:bg-center md:bg-bottom sm:bg-left-bottom"
      >
        <Navbar />
        <div class="header-slide__content w-full flex pt-20 md:pt-0">
          <div class="nd w-full md:w-5/12 flex justify-center md:justify-end">
            <div class="w-5/6 md:w-3/4 flex flex-col justify-center">
              <div
                class="text-white font-bold text-5xl tracking-normal sm:text-6xl md:5xl lg:text-6xl md:tracking-wide md:leading-normal"
              >
                Kỹ năng mới mỗi ngày với
                <div class="font-bold" style="color: #ffc107">Learnova</div>
              </div>
              <div class="text-white text-2xl py-10">
                Để chúng tôi giúp bạn lựa chọn khóa học phù hợp nhất!
              </div>
              <div class="pt-4 flex justify-center">
                <button
                  class="b1 bg-white text-indigo-600 w-40 font-semibold text-lg rounded-md mx-4 py-3"
                  style="outline: none"
                >
                  Tìm hiểu thêm
                </button>
                <button
                  class="b2 text-white w-40 font-semibold text-lg rounded-md py-3"
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
    <div class="content2">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Batdau />
      <Uudiem />
      <Chiase />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
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
  height: 755px;

  .nd {
    .b2 {
      background-image: linear-gradient(to right, #e208a3, #ff4698);
    }
  }
}
.content2 {
  background-color: #2a3065;
}
</style>
