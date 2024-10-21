<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div
      class="cb-info-card cb-info-card--first flex flex-col md:flex-row px-5 md:px-0 justify-between 2xl:mt-[280px]"
    >
      <div class="order-2 md:order-1">
        <h2
          class="cb-heading-h2 cb-heading-h2--info-card uppercase poppins-bold"
        >
          Lorem ipsum dolor sit amet.
        </h2>
        <p class="poppins-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <a
          role="button"
          class="flex cb-button-primary cb-button-primary--small text-white"
          href="#"
        >
          Read More
        </a>
      </div>
      <div class="order-1 md:order-2 cb-info-card-image-wrapper">
        <img
          src="@/assets/images/plant.png"
          width="524px"
          alt="Image"
          title="Image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
