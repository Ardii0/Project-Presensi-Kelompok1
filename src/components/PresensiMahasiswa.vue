<template>
  <div class="all">
    <br />
    <div class="pr">
      <div class="border1 row">
        <h2>Form Presensi Mahasiswa</h2>

        <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" />
          <label for=""><b> Tanggal Kuliah : </b></label><br />
          <input
            required
            type="date"
            v-model="form.tanggal"
            placeholder="Masukkan Tanggal"
          /><br /><br />
          <label for=""><b> Absen : </b></label><br />
          <div id="app">
            <div id="m1">
              <input
                type="radio"
                id="Hadir"
                value="Hadir"
                v-model="form.picked"
              />
              <label style="padding-left: 640px" for="">Hadir</label>
              <br />
            </div>
          </div>
          <br />
          <button type="submit" v-show="!updateSubmit" style="margin: auto">
            <b> Add </b>
          </button>
          <!-- jika tidak update maka tombol update tidak muncul -->
          <button type="button" v-show="updateSubmit" @click="update(form)">
            <b> Update </b>
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        nama: "",
        tanggal: "",
        picked: "",
        picked2: "",
        gambar: "",
      },
      info: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    userAbse() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
  },
  methods: {
    load() {
      this.form.nama = this.userAbse.username;
    },
    add() {
      let absens = this.userAbse.absen;
      absens.push({
        id: absens.length + 1,
        tanggal: this.form.tanggal,
        picked: this.form.picked,
        gambar: this.form.gambar,
      });
      axios
        .put("http://localhost:3000/users/" + this.userAbse.id, {
          username: this.form.nama,
          password: this.userAbse.password,
          role: this.userAbse.role,
          absen: absens,
        })
        .then((res) => {
          var convertToString = JSON.stringify(res.data);
          sessionStorage.setItem("USER_DATA", convertToString);
          this.$router.push("/StatistikMahasiswa");
        });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.nama = user.nama;
      this.form.tanggal = user.tanggal;
      this.form.picked = user.picked;
      this.form.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/info/" + form.id, {
          nama: this.form.nama,
          tanggal: this.form.tanggal,
          picked: this.form.picked,
          gambar: this.form.gambar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.nama = "";
          this.form.tanggal = "";
          this.form.picked = "";
          this.form.gambar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/info/" + user.id).then((res) => {
        this.load();
        let index = this.info.indexOf(form.nama);
        this.info.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.all {
  border: 1px solid black none;
  /* background-color: rgb(97, 97, 97); */
  /* height: 1073px; */
  /* color: white; */
}
/* .pr {
  display: flex;
} */
.border1 {
  width: 100%;
  padding: 10px;
  background-color: none;
}
/* .border2 {
  width: 40%;
  padding: 10px;
  margin-left: 30px;
}
table {
  text-align: center;
  border: 1px solid white;
  padding: 20px;
  width: 750px;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  background-color: #333;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
} */
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 100%;
  background-color: silver;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>