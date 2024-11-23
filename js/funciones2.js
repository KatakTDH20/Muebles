const app = Vue.createApp({
  data() {
    return {
      muebles: []
    };
  },
  mounted() {
    console.log("Instancia Montada");
    this.cargarMuebles();
  },
  methods: {
    cargarMuebles() {
      axios.get("https://www.course-api.com/react-store-products")
        .then(response => {
          console.log("Datos recibidos de la API:", response.data);  // Verificar si los datos se reciben

          // Filtra los muebles específicos y agrega las cantidades correctas
          this.muebles = response.data.filter(mueble => {
            if (mueble.name === 'accent chair') {
              mueble.stock = 5;
            } else if (mueble.name === 'albany sectional') {
              mueble.stock = 10;
            } else if (mueble.name === 'albany table') {
              mueble.stock = 15;
            }
            return ['accent chair', 'albany sectional', 'albany table'].includes(mueble.name);
          });
          console.log("Muebles filtrados:", this.muebles);  // Verificar si el filtrado se realiza correctamente
        })
        .catch(error => {
          console.error("Error cargando los muebles:", error);
        });
    }
  }
});

app.mount("#app");



