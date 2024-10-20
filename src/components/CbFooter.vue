<script setup lang="ts">
import CbIconTelegram from '@/components/svg/CbIconTelegram.vue';
import CbIconTwitter from '@/components/svg/CbIconTwitter.vue';
import CbIconYoutube from '@/components/svg/CbIconYoutube.vue';

import CbIconFacebook from '@/components/svg/CbIconFacebook.vue';
import CbIconInstagram from '@/components/svg/CbIconInstagram.vue';
import CbIconTiktok from '@/components/svg/CbIconTiktok.vue';
</script>

<template>
  <div class="cb-footer-container">
    <div class="hidden lg:block cb-gradient-bottom-left"></div>

    <div class="cb-footer-wrapper px-5 md:px-0 container mx-auto">
      <footer
        class="cb-footer flex flex-col lg:flex-row justify-between items-center lg:pt-[140px] 2xl:pt-[140px]"
      >
        <div class="cb-footer-copyrights lg:max-w-[300px] 2xl:max-w-[380px]">
          <a class="poppins-bold uppercase lg:text-white" href="#">
            Chilled grape
          </a>
          <p class="lg:text-white poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div
          class="cb-footer-navigation flex flex-col md:flex-row justify-between items-start"
        >
          <div>
            <h3 class="poppins-medium">Company</h3>
            <nav>
              <ul class="cb-footer-nav-lists list-none">
                <li><a class="poppins-regular" href="#">About</a></li>
                <li><a class="poppins-regular" href="#">Careers</a></li>
                <li><a class="poppins-regular" href="#">Our Work</a></li>
                <li><a class="poppins-regular" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 class="poppins-medium">Products</h3>
            <nav>
              <ul class="cb-footer-nav-lists list-none">
                <li><a class="poppins-regular" href="#">About</a></li>
                <li><a class="poppins-regular" href="#">Careers</a></li>
                <li><a class="poppins-regular" href="#">Our Work</a></li>
                <li><a class="poppins-regular" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 class="poppins-medium">Follow Us</h3>
            <nav>
              <ul class="cb-socials flex list-none">
                <li>
                  <a href="#">
                    <cb-icon-telegram width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <cb-icon-twitter width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <cb-icon-youtube width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <cb-icon-facebook width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <cb-icon-instagram width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <cb-icon-tiktok width="24" height="24" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
