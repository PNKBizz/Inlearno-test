<template>
  <yandex-map 
    class="map"
    :coords="[54.62896654088406, 39.731893822753904]"
    @map-was-initialized="initHandler"
  >
    <ymap-marker
      v-for="item in data"
      :key="item.id"
      marker-type="placemark"
      :marker-id="item.id"
      :coords="[item.latitude, item.longitude]"
      :hint-content="item.description"
      :callbacks="{ click: getDetailsForBalloon }"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['data', 'detailedItem']),
      balloonTemplate() {
        return `
          <h3>${this.detailedItem.name}</h3>
          <img src="${this.detailedItem.image}" alt="">
          <p>Description: ${this.detailedItem.description}</p>
        `
      }
    },
    methods: {
      ...mapActions(['getDetails', 'clearDetails']),
      async getDetailsForBalloon(e) {
        const placemark = e.get('target');
        placemark.options.set('balloonContentLayout', ymaps.templateLayoutFactory.createClass('Загрузка...')) // for forse repaint
        await this.getDetails(placemark.properties.get('markerId'));
        placemark.options.set('balloonContentLayout', ymaps.templateLayoutFactory.createClass(this.balloonTemplate))
      },
      initHandler(map) {
        map.setBounds(map.geoObjects.getBounds());
      }
    },
    beforeMount() {
      this.clearDetails();
    }
  }
</script>

<style lang="scss">
  .map {
    flex-grow: 1;
    display: flex;
  }

  .ymap-body {
    width: 100%;
  }
</style>