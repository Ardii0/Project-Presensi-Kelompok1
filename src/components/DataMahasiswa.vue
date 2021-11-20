<template>
  <div class="app">
    <div class="border2">
      <h2>Tabel Statistik Mahasiswa {{ absens.username }}</h2>
      <table v-if="absens.role === 'mahasiswa' || absens.role === 'admin'">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Kuliah</th>
            <th>Absen</th>
          </tr>
        </thead>
        <tbody v-for="(mahasiswa, index) in absens.absen" :key="index">
          <tr>
            <td>{{ mahasiswa.id }}</td>
            <td>{{ mahasiswa.tanggal }}</td>
            <td>{{ mahasiswa.picked }}</td>
            <td v-if="absens.role === 'dosen' || absens.role === 'admin'">
              {{ mahasiswa.picked2 }}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>presentase {{ presentase }}</p>
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
        gambar: "",
      },
      info: "",
      presentase: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    absens() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
  },
  methods: {
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    load() {
      const kalender = new Date();
      this.presentase =
        Math.floor(
          (this.absens.absen.length /
            new Date(
              kalender.getFullYear(),
              kalender.getMonth(),
              0
            ).getDate()) *
            100
        ) + "%";

      axios
        .get("http://localhost:3000/info")
        .then((res) => {
          this.info = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    presntasiSiswa() {
      // const data = this.absens()
      // this.presentase =
    },
    add() {
      axios.post("http://localhost:3000/info/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.nama = ""),
          (this.form.tanggal = ""),
          (this.form.picked = ""),
          (this.form.gambar = "");
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

<style>
.app {
  border: 1px solid black none;
  /* background-color: rgb(97, 97, 97); */
  height: 1073px;
  /* color: white; */
}
/* .pr {
  display: flex;
}
.border1 {
  width: 30%;
  padding: 10px;
  background-color: none;
} */
.border2 {
  width: 40%;
  padding: 10px;
  margin-left: 30px;
}
table {
  text-align: center;
  border: 1px solid white;
  padding: 20px;
  width: 1270px;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  background-color: #333;
  color: white;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
}
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
  background-color: lightskyblue;
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