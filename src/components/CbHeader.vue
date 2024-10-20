<script setup lang="ts"></script>

<template>
  <div class="cb-header-container">
    <div class="hidden md:block cb-gradient-top-left"></div>
    <div class="hidden md:block cb-gradient-right"></div>

    <div class="cb-header-wrapper container mx-auto">
      <header
        class="cb-header flex flex-col md:flex-row justify-between items-center"
      >
        <div class="cb-logo">
          <a class="uppercase poppins-bold md:text-white" href="#">
            Chilled grape
          </a>
        </div>

        <div
          class="cb-nav-container flex flex-col md:flex-row justify-between items-center"
        >
          <nav class="mb-[10px] md:mb-0" aria-label="Main Navigation">
            <ul class="cb-menu flex justify-between items-center list-none">
              <li><a href="#" class="poppins-semibold">Home</a></li>
              <li><a href="#" class="poppins-semibold">About</a></li>
              <li><a href="#" class="poppins-semibold">Blog</a></li>
              <li><a href="#" class="poppins-semibold">Pricing</a></li>
              <li class="lg:hidden">
                <a href="#" class="poppins-semibold">Login</a>
              </li>
            </ul>
          </nav>

          <a
            role="button"
            class="hidden lg:flex cb-button-primary cb-button-primary--small text-white"
            href="#"
          >
            Login
          </a>
        </div>
      </header>

      <div
        class="cb-hero-container px-5 md:px-0 flex justify-center items-center"
      >
        <div class="cb-hero">
          <h1 class="cb-heading-h1 cb-heading-h1--hero uppercase poppins-bold">
            Lorem ipsum dolor sit amet.
          </h1>

          <a
            role="button"
            class="cb-button-primary cb-button-primary--large text-white"
            href="#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
