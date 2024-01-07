<template>
  <div class="header">
    <h1>Gabinety</h1>
    <hr width="40px;" />
  </div>
  <div class="gallery-container">
    <div class="items">
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
        <div class="gallery-item"><img src="/assets/logo-1.png" alt="Opis obrazu" /></div>
    </div>
  </div>
</template>

<style scoped>
.gallery-container{
    max-width:1152px;
}
.items {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin:40px 0px;
}

img{
    width:280px;
    height:280px;
    border-radius:6px;
    padding:4px;
}
.header{
  margin:40px 0px;
}
</style>
