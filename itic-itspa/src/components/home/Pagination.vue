<template>
    <div>
        <div class="text-xs-center">
            <v-pagination
            v-model="page"
            :length="6">
            </v-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:"Pagination",
    data() {
        return {
            page:1
        }
    },

}
</script>