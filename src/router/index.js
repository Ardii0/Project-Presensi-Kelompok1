import Vue from "vue";
import Router from "vue-router";
import Beranda from "@/components/Beranda.vue"
import Kontak from "@/components/Kontak.vue"
import Login from "@/components/Login.vue"
import Register from "@/components/Register.vue"
import Tentang from "@/components/Tentang.vue"
import ProfMahaSiswa from "@/components/ProfMahaSiswa.vue"
import ProfDosen from "@/components/ProfDosen.vue"
import ProfAdmin from "@/components/ProfAdmin.vue"
import InfoMahasiswa from "@/components/InfoMahasiswa.vue"
import PresensiMahasiswa from "@/components/PresensiMahasiswa.vue"
import StatistikMahasiswa from "@/components/StatistikMahasiswa.vue"
import InfoDosen from "@/components/InfoDosen.vue"
import PresensiDosen from "@/components/PresensiDosen.vue"
import StatistikDosen from "@/components/StatistikDosen.vue"
import InfoAdmin from "@/components/InfoAdmin.vue"

Vue.use(Router)

function configRoutes() {
    return [{
            path: "/",
            name: "Beranda",
            component: Beranda
        },
        {
            path: "/contact",
            name: "Kontak",
            component: Kontak
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/about",
            name: "Tentang",
            component: Tentang
        },
        {
            path: "/ProfMahaSiswa",
            name: "ProfMahaSiswa",
            component: ProfMahaSiswa
        },
        {
            path: "/PresensiMahasiswa",
            name: "PresensiMahasiswa",
            component: PresensiMahasiswa
        },
        {
            path: "/StatistikMahasiswa",
            name: "StatistikMahasiswa",
            component: StatistikMahasiswa
        },
        {
            path: "/ProfDosen",
            name: "ProfDosen",
            component: ProfDosen
        },
        {
            path: "/ProfAdmin",
            name: "ProfAdmin",
            component: ProfAdmin
        },
        {
            path: "/Register",
            name: "Register",
            component: Register
        },
        {
            path: "/InfoMahasiswa",
            name: "InfoMahasiswa",
            component: InfoMahasiswa
        },
        {
            path: "/InfoDosen",
            name: "InfoDosen",
            component: InfoDosen
        },
        {
            path: "/InfoAdmin",
            name: "InfoAdmin",
            component: InfoAdmin
        },
        {
            path: "/PresensiMahasiswa",
            name: "PresensiMahasiswa",
            component: PresensiMahasiswa
        },
        {
            path: "/PresensiDosen",
            name: "PresensiDosen",
            component: PresensiDosen
        },
        {
            path: "/StatistikDosen",
            name: "StatistikDosen",
            component: StatistikDosen
        }
    ]
}


const link = new Router({
    mode: "history",
    routes: configRoutes(),
});
export default link;