<template>
<div>
  <div class="header">
            <h1>Personel</h1>
            <hr width="40px;">
        </div>
    <div class="persons-container">
      <div class="item" v-for="(person, index) in persons" :key="index">
        <div class="photo">
        </div>
          <div class="single-item">
            <h3>{{ person.name }}</h3>
            <hr width="20px;" />
            <div class="icons">
            </div>

            <p>{{ person.job }}</p>
          </div>
        </div>
    </div>
</div>
</template>


<script setup>
//import { ref } from "vue";
//import usePersonelData from "~/composables/usePersonelData";
const { persons } = usePersonelData();
</script>

<style scoped lang="css">
.persons-container{
    max-width:1152px;
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:10px;
    justify-content: space-around;
}
.item{
    width:280px;
}
.photo{
    height:400px;
    background-color:#f1f1f1;
    border-radius:6px;
}
.single-item{
    background: linear-gradient(to bottom, #e0f2fe, #f8fcff);
    border-radius:6px;
    padding:4px;
}
.header{
  margin:40px 0px;
}

</style>
