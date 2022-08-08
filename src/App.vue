<script>
import { shallowReactive } from 'vue'

  export default {
    data(){
      return {
        nama : "Dio",
        alamat : "Denpasar",
        show : true,
        ulang : 5,
        masukan : ""
      }
    },

    methods:{
      gantiNama(){
        this.nama = "Agus"
        this.alamat = "Badung"
      }

    }

  }
</script>

<template>
  <div>
    <h1>Halo Apa Kabar</h1>
    <p>Saya Sedang Belajar Vue</p>

    <span>Nama : {{nama}}</span> <br>
    <span>Alamat : {{alamat}}</span> <br>

    <button class="btn btn-info" @click="gantiNama">Ganti Orang</button>

    <p>
      {{5 + 3}}
    </p>

    <div v-if="show == true">
      Kelihatan true
    </div>
    <div v-else>
      Kelihatan false
    </div>

    <div v-for="item in ulang">
      <input type="checkbox">
      <label>Halo</label>
    </div>

    <form>
      <input type="text" v-model="masukan"> <br>
      <span>{{masukan}}</span>
    </form>
    <button class="btn btn-success">Mantap</button>




  </div>
</template>

<style scoped>
</style>
