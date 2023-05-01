<template>
  <div class="divGeneral" style="display: flex;">
    <v-item-group selected-class="bg-primary">
      <v-container>
        <!-- Fila -->
        <v-row>
          <v-col cols="12" v-for="(card, index) in rows[1].cards" :key="'card-' + index">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="400px"
                width="100%"
                @click="toggle"
              >
                <div class="card-text">
                  {{ isSelected ? 'Selected' : card.text }}
                </div>
                <img :src="card.image" height="100%" width="100%">
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "cardHome",
  data() {
    return {
      rows: [
        {
          id: 1,
          cards: [
            { id: 1, image: 'https://www.dzoom.org.es/wp-content/uploads/2010/09/paisaje-profundidad-lineas-734x489.jpg', text: 'Hola' },
            { id: 2, image: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg', text: 'Adios' },
          ]
        },
        {
          id: 2,
          cards: [
            { id: 3, image: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/56117b2/2147483647/strip/true/crop/1240x930+0+0/resize/800x600!/format/jpg/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F1b%2Ff7%2F4aa3eed34488bdf8b20700c1c3b5%2Flrg-promo-rare-directory.jpg', text: 'Nombre del Libro' },
          ]
        },
      ],
      model: null,
    }
  },
};
</script>


<style>
.v-item-group {
  width: 100%;
}

.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  margin: 0px;
}

@media (min-width: 1264px){
  .container {
    max-width: 100%;
  }
}

.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
  text-align: center;
  width: 100%;
}
</style>
