<template>
  <div>
    <div class="relative py-6 px-4 sm:px-6 xl:mx-20 m-auto">
      <nav
        class="relative flex items-center justify-between lg:justify-start p-8 text-white font-thin rounded-3xl"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img
                src="~assets/svg/logo.learnova-white.svg"
                alt="Logo"
                class="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4">
          <a href="#" class="font-medium transition duration-150 ease-in-out">
            <button-explore-course class="bg-yellow-500 text-gray-900" />
          </a>
          <a
            href="#"
            class="ml-8 font-light tracking-wide transition duration-150 ease-in-out"
            >Giành cho bạn</a
          >
          <a
            href="#"
            class="ml-8 font-light tracking-wide transition duration-150 ease-in-out"
            >Thảo luận</a
          >
        </div>
        <div class="flex-grow justify-between md:flex">
          <div></div>
          <div class="hidden sm:flex">
            <div
              class="mr-2 rounded-3xl w-12 h-12 flex justify-center items-center text-white cursor-pointer"
              style="background-color: rgba(254, 247, 246, 0.18039)"
              @click="showModalSearch"
            >
              <svg-icon name="search-outline"></svg-icon>
            </div>

            <div
              class="mr-2 rounded-3xl w-12 h-12 flex justify-center items-center text-white cursor-pointer"
              style="background-color: rgba(254, 247, 246, 0.18039)"
            >
              <svg-icon name="basket-outline"></svg-icon>
            </div>

            <div
              class="rounded-3xl w-12 h-12 flex justify-center items-center text-white cursor-pointer"
              style="background-color: rgba(254, 247, 246, 0.18039)"
            >
              <svg-icon name="notifications-outline"></svg-icon>
            </div>
          </div>
          <div class="md:flex flex-col justify-center hidden">
            <div
              class="py-3 px-3 rounded-lg cursor-pointer"
              style="background-color: rgba(0, 0, 0, 0.2) !important"
            >
              <span>Đăng nhập </span>
              <svg-icon name="log-in-outline"></svg-icon>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            @click="toggleMenu"
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
    <div
      class="absolute top-0 inset-x-0 p-2 z-50 transition transform origin-top-right md:hidden"
      :class="{ hidden: !showMenu }"
    >
      <div class="rounded-lg shadow-md">
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
          class="rounded-lg bg-white shadow-xs overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt=""
                class="h-8 w-auto"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                aria-label="Close menu"
                class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                @click="toggleMenu"
              >
                <svg
                  stroke="currentColor"
                  fill=""
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <a
              href="#"
              role="menuitem"
              class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Product</a
            >
            <a
              href="#"
              role="menuitem"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Features</a
            >
            <a
              href="#"
              role="menuitem"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Marketplace</a
            >
            <a
              href="#"
              role="menuitem"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Company</a
            >
          </div>
          <div>
            <a
              href="#"
              role="menuitem"
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonExploreCourse from './ButtonExploreCourse.vue'
export default {
  components: { ButtonExploreCourse },
  data() {
    return {
      showMenu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    showModalSearch() {
      this.$nuxt.$emit('show-model-search')
    },
  },
}
</script>
