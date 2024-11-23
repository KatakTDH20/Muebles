const inst = Vue.createApp({
    
    mounted(){
        console.log('Instancia Montada');
    },
    created(){
        this.cargarMuebles();
    },
    data(){
        return{
            muebles:[],
        }
    },
   methods:{
    cargarMuebles(){
            axios.get("https://www.course-api.com/react-store-products").then(
            respuesta => {this.muebles = respuesta.data.results;
            console.log(respuesta);
            })
        }
    }
});

const app = inst.mount("#contenedor")
