<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img
          src="https://rekreartive.com/wp-content/uploads/2018/10/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png"
          alt=""
          width="80"
          height="54"
          class="d-inline-block align-text-center"
        />
        Binusa University
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Beranda</a>
          </li>
          <div class="w3-dropdown-hover w3-right">
            <button v-if="logout !== null" class="w3-button">
              Informasi Perkuliahan
            </button>
            <div
              class="w3-dropdown-content w3-bar-block w3-border"
              style="right: 0"
            >
              <a
                v-if="roles === 'mahasiswa'"
                href="/InfoMahasiswa"
                class="w3-bar-item w3-button"
                >Mahasiswa</a
              >
              <a
                v-if="roles === 'dosen'"
                href="/InfoDosen"
                class="w3-bar-item w3-button"
                >Dosen</a
              >
              <a
                v-if="roles === 'admin'"
                href="/InfoAdmin"
                class="w3-bar-item w3-button"
                >Admin</a
              >
            </div>
            <div class="w3-clear"></div>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="/about">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">kontak</a>
          </li>
          <div class="w3-dropdown-hover">
            <button class="w3-button" v-if="logout !== null">Profile</button>
            <div class="w3-dropdown-content w3-bar-block w3-border">
              <a
                v-if="roles === 'mahasiswa'"
                href="/ProfMahaSiswa"
                class="w3-bar-item w3-button"
                >Mahasiswa</a
              >
              <a
                v-if="roles === 'dosen'"
                href="/ProfDosen"
                class="w3-bar-item w3-button"
                >Dosen</a
              >
              <a
                v-if="roles === 'admin'"
                href="/ProfAdmin"
                class="w3-bar-item w3-button"
                >Admin</a
              >
            </div>
          </div>
        </ul>
        <a
          class="btn btn-outline-danger my-2 my-sm-0"
          style="margin-left: 490px"
          v-if="logout === null"
          href="/login"
        >
          Login</a
        >

        <a
          class="btn btn-outline-danger my-2 my-sm-0"
          style="margin-left: 490px"
          v-if="logout !== null"
          @click="out"
          href="/"
        >
          Logout</a
        >
      </div>
    </nav>

    <router-view></router-view>

    <footer>
      <div class="footer-clean">
        <div class="footer">
          <a href="/">
            <img
              src="https://4.bp.blogspot.com/-9NSyk-NjN4M/WqCvAnGcYdI/AAAAAAAAJGg/xWyTPUUgXCskF0Kl0TziY6ah26Gw6MrJgCLcBGAs/w1200-h630-p-k-no-nu/Binus%2BUniversity.png"
              style="width: 400px; height: 300; background-size: cover"
            />
          </a>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Menu</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Created By:</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://www.instagram.com/rd_0.9/"
                    >Muhammad Ardi Setiawan</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/malafilla_/"
                    >Mala Fillatunnida</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/fzatsdv/"
                    >Faza Tsania Devi</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a target="_blank" href="https://m.facebook.com/binusbekasi/"
                ><i class="icon ion-social-facebook"></i></a
              ><a target="_blank" href="https://mobile.twitter.com/BINUS_Bekasi"
                ><i class="icon ion-social-twitter"></i></a
              ><a target="_blank" href="https://www.instagram.com/binusbekasi/"
                ><i class="icon ion-social-instagram"></i
              ></a>
              <p class="copyright">Binusa University © 2021</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  // computed: {
  //   logout() {
  //     return JSON.parse(sessionStorage.getItem("USER_DATA"));
  //   },
  // },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
  userRole() {
    return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
  },
};
</script>

<style>
.footer {
  position: absolute;
  margin-top: -70px;
  margin-left: -290px;
}
.footer-clean {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 290px;
  margin-top: 20px;
  background-color: #fff;
  color: #4b4c4d;
}

.footer-clean h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-clean ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-clean ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-clean ul a:hover {
  opacity: 1;
}

.footer-clean .item.social {
  text-align: right;
}

@media (max-width: 767px) {
  .footer-clean .item {
    text-align: center;
    padding-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align: center;
  }
}

.footer-clean .item.social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 22px;
  color: inherit;
  opacity: 0.75;
}

.footer-clean .item.social > a:hover {
  opacity: 0.9;
}

@media (max-width: 991px) {
  .footer-clean .item.social > a {
    margin-top: 40px;
  }
}

@media (max-width: 767px) {
  .footer-clean .item.social > a {
    margin-top: 10px;
  }
}

.footer-clean .copyright {
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 13px;
  opacity: 0.6;
}
</style>