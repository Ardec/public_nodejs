<!-- Komponent Header.vue -->
<template>
<div>

  <div class="header-container">
    <div class="top-info">
      W trosce o jak najlepszą jakość usług, przypominamy o telefonicznym potwierdzaniu
      wizyt we wcześniejszym dniu roboczym. Jednocześnie informujemy, że brak
      potwierdzenia jest równoznaczny z anulowaniem wizyty.
    </div>
  </div>
  <div class="navigation-container">
    <div class="navigation">
      <div class="logo">
        <div class="logo1"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="logo2"><img src="/assets/logo-2.png" alt="Opis obrazu" /></div>
      </div>
      <div v-if="!isMenuOpen" class="menu">
        <div class="link"><NuxtLink to="/"> Strona Główna </NuxtLink></div>
        <div class="link"><NuxtLink to="/aktualnosci"> Aktualnosci </NuxtLink></div>
        <div class="link"><NuxtLink to="/galeria"> Galeria </NuxtLink></div>
        <div class="link"><NuxtLink to="/cennik"> Cennik </NuxtLink></div>
        <div class="link"><NuxtLink to="/kontakt"> Kontakt </NuxtLink></div>
        <div class="link_social">
          <div class="icon fb"><Icon name="bxl:facebook-circle" /></div>
          <div class="icon inst"><Icon name="bxl:instagram" /></div>
          <div class="icon google"><Icon name="bxl:google" /></div>
        </div>
      </div>
       <div class="mobile-trigger">
          <div v-if="!isMenuOpen" @click="toggleMenu" class="icon"><Icon name="icomoon-free:menu" /></div>
          <div v-if="isMenuOpen" @click="toggleMenu" class="icon"><Icon name="ep:close-bold" /></div>
        </div>
      <div class="contact">
        <div  class="icon secondary-color-background"><Icon size="30px" name="ic:baseline-mail" /></div>
      </div>
    </div>
    <Transition>
    <div v-if="isMenuOpen" class="mobile-navigation">
      <div class="mobile-menu">
        <div class="link"><NuxtLink to="/"> Strona Główna </NuxtLink></div>
        <div class="link"><NuxtLink to="/aktualnosci"> Aktualnosci </NuxtLink></div>
        <div class="link"><NuxtLink to="/galeria"> Galeria </NuxtLink></div>
        <div class="link"><NuxtLink to="/cennik"> Cennik </NuxtLink></div>
        <div class="link"><NuxtLink to="/kontakt"> Kontakt </NuxtLink></div>
        <div class="link_social">
          <div class="icon fb"><Icon name="bxl:facebook-circle" /></div>
          <div class="icon inst"><Icon name="bxl:instagram" /></div>
          <div class="icon google"><Icon name="bxl:google" /></div>
        </div>
      </div>
    </div>
    </Transition>
  </div>

</div>
</template>

<script setup>
import { ref } from 'vue';

// Tworzymy zmienną do przechowywania stanu otwarcia menu
const isMenuOpen = ref(false);

// Funkcja do przełączania stanu otwarcia/zamknięcia menu
const toggleMenu = () => {
  //isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  console.log("closemenu klikniety")
  isMenuOpen.value = false;
};
//const route = useRoute();
//watch(() => route.path, () => {
//  isMenuOpen.value = false;
//});

</script>
<style lang="css" scoped>

body{
  font-family: 'Times New Roman', Times, serif;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.header-container {
  width: 100vw;
  justify-content: center;
  background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
  position: relative; /* Upewnij się, że element jest w stosunku do cienia */
  z-index: 1; /* W przypadku stosowania w kontekście innych elementów */
}
.mobile-trigger{
  visibility: hidden;
}
.top-info {
  margin: 0 auto;
  max-width: 1152px;
  padding: 20px 10px;
  text-align: center;
}
.navigation-container {
  width: 100vw;
}
.navigation {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  max-width: 1152px;
  padding: 20px 10px;
}
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mobile-menu{
  display: flex;
  flex-direction: column;
  padding:15px 20px;
  background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
  justify-content: flex-start;
  align-items: center;
  font-size:20px;
  gap:10px;
}
.mobile-menu > .link_social {
  padding:0
}

.link {
  padding: 10px 10px;
  /* text-decoration: none!important;; */
}
a {
  text-decoration: none; /* Usunięcie podkreślenia */
  color: inherit; /* Dziedziczenie koloru tekstu z rodzica */
  transition: color ease-in-out 0.3s;
}
a:hover {
  opacity: 0.8;
  color: #01a8cb;
}
.link_social {
  display: flex;
  flex-direction: row;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo1 img {
  height: 36px;
  padding: 0px 10px;
}
.link_social {
  padding-left: 40px;
}
.logo2 img {
  height: 20px;
}
.contact > .icon {
  /* background: linear-gradient(to bottom, #e0f2fe, #f8fcff); */
  border-radius: 12px;
  border: solid #f0f9ff 1px;
  padding: 4px 24px;
}

.contact > .icon:hover {
  border-radius: 12px;
  border: solid #f0f9ff 1px;
  padding: 4px 24px;
}
.icon {
  /* color: #009eda; */
  transition: color 0.5s ease;
}
.icon:hover {
  cursor: pointer;
  color: #0ab1bc;
}
.contact {
  position: relative;
  transition: margin-top 0.4s;
}
.contact:hover {
  margin-top: -6px;
  opacity: 0.8;
}
.contact:hover .icon {
  color: #0ab1bc;
}
@media (max-width: 1000px) {
  .navigation {
    justify-content: space-between;
    padding: 20px 20px;
    align-items: center;
  }
  .contact {
    display:none;
  }
  .menu {
    display: none;
  }
  .mobile-trigger{
  margin-top:-5px;
  visibility: visible;
}
}
</style>
