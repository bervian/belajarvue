<script>
export default {
    data() {
        return {
            userPremium: true
        }
    },

    methods: {
        cekPremium() {
            if (this.userPremium == false) {
                alert("Anda belum terdaftar sebagai member Premium")
            } else {
                document.location.href = "https://google.com"
            }
        }
    }
}
</script>



<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1"> <img src="https://i.ebayimg.com/images/g/B6UAAOSwAX9e~Q4i/s-l300.jpg" alt="" width="30"
                    height="24">
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Utama</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profil</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pilihan
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Bantuan</a></li>
                            <li><a class="dropdown-item" href="#">Kontak</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">FAQ</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" @click="cekPremium()" class="nav-link">Premium</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Cari</button>
                </form>
            </div>
        </div>
    </nav>
</template>