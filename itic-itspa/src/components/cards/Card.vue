<template>
    <div>
       <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam commodi, consequuntur quos, quo assumenda enim natus architecto magni aut consequatur ullam saepe a eos esse 
              repellat magnam, nihil porro deleniti! </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
export default {
    name:"card",
    props:{
      datos:Array
    }
}
</script>
