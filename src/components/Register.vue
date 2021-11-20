<template>
  <div class="a">
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan Registrasi</p>
      <br />
      <form>
        <label>Nama Lengkap</label>
        <input
          required
          type="text"
          name="Nama Lengkap"
          v-model="username"
          class="form_login"
          placeholder="Username.."
        />
        <br />
        <label>NISN</label>
        <input
          required
          type="text"
          name="nisn"
          v-model="nisn"
          class="form_login"
          placeholder="Masukan NISN.."
        />
        <br />
        <label>Email</label>
        <input
          required
          type="text"
          name="email"
          v-model="email"
          class="form_login"
          placeholder="Masukan Email.."
        />
        <br />

        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        /><br />

        <div
          @click="login"
          style="
            background-color: black;
            text-align: center;
            height: 40px;
            padding-top: 10px;
            margin-left: 40px;
            margin-right: 40px;
            border-radius: 15px;
            color: white;
          "
        >
          <bottom>Registrasi</bottom>
        </div>

        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script >
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      nisn: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        nisn: this.nisn,
        email: this.email,
        password: this.password,

        role: "mahasiswa",
      };
      const registrasi = await axios.post(
        "http://localhost:3000/users",
        payload
      );
      var convertToString = JSON.stringify(registrasi.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
};
</script>
<style>
.a {
  margin-top: 100px;
}
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}

.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}

.kotak_login {
  width: 350px;
  background: silver;
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
  margin-top: 0px;
  border-radius: 15px;
}

label {
  font-size: 11pt;
}

.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.tombol_login {
  background: #2e2e2e;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}

.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>