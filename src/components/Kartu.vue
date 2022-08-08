<script>
export default {
    props: ["judul", "deskripsi"]
}
</script>
<template>

    
    <div class="card col-md-3 col-1 m-1">
        <div class="card-body">
            <h5 class="card-title">{{ judul }}</h5>
            <p class="card-text">{{ deskripsi }}</p>
            <a href="#" class="btn btn-info tombol-kanan">Pilih</a>
        </div>
    </div>
</template>