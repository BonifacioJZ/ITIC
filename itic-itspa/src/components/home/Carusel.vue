<template>
    <div>
        <v-carousel
            delimiter-icon="stop"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
        >
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        
    </div>
</template>

<script>
export default {
    name: 'carousel1',
    componets: {

    },
    data: ()=> {
        return {
            items: [
          {
            src: 'static/img/carrusel/background-3048816_1920.jpg'
          },
          {
            src: 'static/img/carrusel/businessman-3213659_1920.jpg'
          },
          {
            src: 'static/img/carrusel/geometric-1732847_1920.jpg'
          },
          {
            src: 'static/img/carrusel/laptop-3174729_1920.jpg'
          }
        ]
        }

    }
}
</script>