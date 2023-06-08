<template>
  <div class="divGeneral" style="display: flex; justify-content: center;">
    <v-item-group selected-class="bg-primary">
      <v-container>
        <!-- Fila -->
        <v-row>
          <v-col cols="12" v-for="(card, index) in cards" :key="'card-' + index">
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
  props: ['cards'],
  data() {
    return {
      model: null,
    }
  },
  created() {
  console.log(this.cards);
},
};
</script>

<style>
.card-image {
  position: relative;
}

.card-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: white;
  background: linear-gradient(180deg, transparent, black);
}

</style>
