<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: [],
            error: []
        }
    },

    // mendapatkan data dari server saat komponen di mount
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                //menyiapkan variabel untuk menampung array baru
                let arrayBaru = []
                //mengcopy array dari response ke array baru
                for (let i = 0; i < response.data.length; i++){
                    arrayBaru[i] = response.data[i]
                    //menghentikan proses copy jika jumlah sudah 20
                    if (i == 20) {
                        break;
                    }
                }
                console.log(arrayBaru)
                //mengisi data dengan array baru
                this.data = arrayBaru
            })

    }
}
</script>

<template>
    <!-- membuat halaman yang di tengah -->
    <div class="container">
        <h1>Photo</h1>

        <!-- membuat row baru untuk pembungkus -->
        <div class="row">
            <div class="col-12">
                <!-- list photo -->
                <div class="row">
                    <div v-for="item in data" :key="item.id" class="card col-3" style="width: 18rem;">
                        <img :src="item.thumbnailUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            
                            <p class="card-text">{{ item.title }}</p>
                            <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>