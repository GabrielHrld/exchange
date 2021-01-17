<template>
  <div>
    <px-assets-table v-bind:assets="assets"/>
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
      assets: [],
    };
  },

  created() {
    //le pasamos los datos a assets una vez los obtenemos
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
