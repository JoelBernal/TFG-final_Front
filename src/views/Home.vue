<template>
  <div>
    <Navbar />
    <Carrusel />

    <div style="display: flex; justify-content: space-evenly; flex-direction: column;">
      <div style="display: flex; justify-content: center; margin-top: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 20px;">
        <h1>LO MAS VENDIDO</h1>
      </div>
      <div style="display: flex; text-decoration: solid;">
    
        <CardHome :cards="rows1" @click.native="products" style="width: 33%" />
        <CardHome :cards="rows2" @click.native="products" style="width: 33%" />
        <CardHome :cards="rows4" @click.native="products" style="width: 33%" /> 
      </div>
      <div style="display: flex; justify-content: center; margin-top: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 20px;">
        <h1>TE PODRÍA INTERESAR</h1>
      </div>
      <div style="margin-left: 25px;">
        <CardHome  :cards="rows3" @click.native="products" style="width: 100%; " />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";
import Footer from "../components/Footer.vue";
import CardHome from '../components/CardHome.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Footer,
    CardHome,
  },
  data() {
    return {
      rows1: [
        { id: 1, image: 'https://http2.mlstatic.com/D_NQ_NP_982635-MLU42193367521_062020-O.webp', text: 'El Gran Libro de la Fantasía | Gerónimo Stilton' },
        { id: 2, image: 'https://www.elprogreso.es/media/elprogreso/images/2023/03/29/2023032901380526758.jpg', text: 'Bad Bunny | Times' },
        
      ],
      rows2: [
        { id: 3, image: 'https://i.pinimg.com/originals/f9/92/50/f99250d55ffa9be45174fac6f4f4e400.png', text: 'Asesinato en el Orient Express | Agatha Christie' },
        { id: 7, image: 'https://infoliteraria.com/wp-content/uploads/2018/04/los-juegos-del-hambre-10-aniversario-1024x682.jpg', text: 'Hunger Games Saga' },
      ],
      rows3: [
        { id: 5, image: 'https://pbs.twimg.com/media/E-CYW3OWYAc_3Zq.jpg:large', text: 'Literatura Juvenil' },
        { id: 6, image: 'https://www.actualidadliteratura.com/wp-content/uploads/2021/02/los-mejores-libros-de-novela-negra.jpg', text: 'Novela Negra' },
      ],
      rows4: [
      { id: 8, image: 'https://www.roc21.com/blog/wp-content/uploads/2020/06/portadas-libros-de-Harry-Potter-1.jpg', text: 'Harry Potter Edición Especial 20 años | J.K Rowling' },
      { id: 9, image: 'https://cdn.shopify.com/s/files/1/0567/3648/1446/products/La-Recopa-libro-Yo-no-vivi-la-Recopa-Portada_1024x.jpg?v=1631814758', text: 'La Recopa' },
      ]
    };
  },

methods:{
  products(){
    this.$router.push('/products');
  }
}

};
</script>


<style>
.card-text {
  font-weight: bold;
}
</style>