<template>
    <v-card class="mx-auto" max-width="344" color="#f35c6e" hover >
        <v-card-title class="text-h5 font-weight-bold"> Rate this app </v-card-title>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="font-weight-medium">
                If you enjoy using this app, please take a few seconds to rate your
                experience. It really helps!

                <div class="text-center mt-12">
                <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                ></v-rating>
                </div>
            </v-card-text>
            <v-divider></v-divider>
        </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
  data: () => ({ show: false }),
};
</script>


