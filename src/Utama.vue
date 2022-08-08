<script>
import Kartu from './components/Kartu.vue'
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'
export default {
    components: { Kartu, navbar, sidebar },


}



</script>
<template>
    <div class="container">
        <div class="row">
             <navbar />
        </div>

        <div class="row">
            <div class="col-3 bg-secondary">
                <sidebar />
            </div>

            <div class="col-8 row" id="konten">
                <Kartu judul="Soto Ayam" deskripsi="Ayam, telur, koya, kecambah" />
                <Kartu judul="Nasi Goreng Panjer" deskripsi="Nasi Goreng Terenak di Denpasar" />
                <Kartu judul="Mie Ayam Bangka" deskripsi="Makanan Wajib Sejuta Umat" />
                <Kartu judul="Ayam Geprek Pulau Kawe" deskripsi="Enak dan rame terus" />
                <Kartu judul="Es Teh" deskripsi="Apapun makanannya Minumnya ya es teh" />
                <Kartu judul="Es Jeruk" deskripsi="Hanya opsional, jarang yang beli" />
            </div>
        </div>
    </div>
</template>