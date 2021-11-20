<template>
  <div>
    <h2>Profil Dosen <br />BINUSA UNIVERSITY</h2>
    <br />
    <div class="all">
      <div class="bungkus">
        <!-- Button trigger modal -->

        <div class="ones">
          <img
            src="https://info.stkipnu.ac.id/wp-content/uploads/2020/04/pp-Copy.jpg"
            width="190px"
            height="240px"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal8"
          />
          <div class="nama">
            <h4><b>Prof. Dr.Achmad Arman, M.S</b> <br />" Kedokteran"</h4>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal8"
          tabindex="-1"
          aria-labelledby="exampleModalLabel8"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel8">
                  Dosen Prof. Dr.Achmad Arman, M.S
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="bungkus" style="margin-left: 110px">
                <div class="one">
                  <p>Nama &nbsp;&nbsp;&nbsp;:</p>
                  <p>Fakultas&nbsp;&nbsp;&nbsp;:</p>
                  <p>Program Studi&nbsp;&nbsp;&nbsp; :</p>
                  <p>Jenjang&nbsp;&nbsp;&nbsp;:</p>
                  <p>Kode Dosen&nbsp;&nbsp;&nbsp; :</p>
                  <p>N.I.D.N&nbsp;&nbsp;&nbsp;:</p>
                </div>
                <div class="two">
                  <p>&nbsp;&nbsp;&nbsp;Prof. Dr.Achmad Arman, M.S</p>
                  <p>&nbsp;&nbsp;&nbsp;Kedokteran</p>
                  <p>&nbsp;&nbsp;&nbsp;Pendidikan Kedokteran</p>
                  <p>&nbsp;&nbsp;&nbsp;S2</p>
                  <p>&nbsp;&nbsp;&nbsp;07563</p>
                  <p>&nbsp;&nbsp;&nbsp;65745</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "ProfDosen",
};
</script>

<style scoped>
.bungkus {
  margin: auto;
  display: flex;
}
.all {
  border: 1px solid none;
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
