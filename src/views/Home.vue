<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#4299e1'" :size="100" />
    <px-assets-table v-if="isLoading === false" v-bind:assets="assets" />
  </div>
</template>

<script>
import api from "../api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },

  //generamos la propiedad assets donde guardar la data
  data() {
    return {
      isLoading: false,

      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    //le pasamos los datos a assets una vez los obtenemos
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
