<template>
  <div>
    <h2>Profil Mahasiswa <br />~BINUSA UNIVERSITY~</h2>
    <br />
    <div class="all">
      <!-- awal profil mahaSiswa -->
      <div class="bungkus">
        <!-- Button trigger modal -->
        <div class="ones">
          <img
            src="https://lh5.googleusercontent.com/proxy/83OwKhGtIo-KXl2waqBt-uXdLLG7mQIvVEI10vwahW4sihjt5itnLuqxu6EI1koRIVKymdqOzKazh-uDa92Iiqe-7hWyjA1kz4tPoXYEVrjrvWnOvxg9UotrH0AMhArIRpZkACd_PPnNiEVG3MY=s0-d"
            width="190px"
            height="240px"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          />
          <div class="nama">
            <h4><b>AULIA ANNISA</b> <br />"Jurusan kedokteran"</h4>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal4"
          tabindex="-1"
          aria-labelledby="exampleModalLabel4"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel4">
                  Profil Aulia Annisa
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="bungkus" style="margin-left: 50px">
                <div class="one">
                  <p>Nama &nbsp;&nbsp;&nbsp;:</p>
                  <p>Nomor Induk Mahasiswa&nbsp;&nbsp;&nbsp;:</p>
                  <p>Perguruan Tinggi&nbsp;&nbsp;&nbsp; :</p>
                  <p>Jenis Kelamin&nbsp;&nbsp;&nbsp;:</p>
                  <p>Status Mahasiswa Saat ini&nbsp;&nbsp;&nbsp; :</p>
                  <p>Status Awal MahaSiswa&nbsp;&nbsp;&nbsp;:</p>
                </div>
                <div class="two">
                  <p>&nbsp;&nbsp;&nbsp;Aulia Annisa</p>
                  <p>&nbsp;&nbsp;&nbsp;09274619014</p>
                  <p>&nbsp;&nbsp;&nbsp;Universitas BINUSA</p>
                  <p>&nbsp;&nbsp;&nbsp;Perempuan</p>
                  <p>&nbsp;&nbsp;&nbsp;Aktif</p>
                  <p>&nbsp;&nbsp;&nbsp;Peserta Didik Baru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "ProfMahaSiswa",
};
</script>

<style scoped>
.bungkus {
  margin: auto;
  display: flex;
}
.all {
  border: 1px solid black;
  width: 345px;
  margin: auto;
}
h2 {
  background-color: #dadada;
  text-align: center;
  font-family: Geneva;
}

img {
  width: 340px;
  height: 400px;
  padding: 70px;
}
.ones {
  border: 1px solid none;
  background-color: rgb(236, 236, 236);
}
.nama {
  border: 1px solid none;
  margin-top: -70px;
  width: 342px;
  text-align: center;
  background-color: #dadada;
}
.one {
  text-align: right;
}
.two {
  text-align: left;
}
</style>
