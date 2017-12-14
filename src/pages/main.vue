<template>
  <section class="main">
    <table class="main-table" cellspacing="0" cellpadding="20">
      <tr>
        <th>Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
      <tr v-for="item in data" :key="item.id" @click="showDetails(item.id)">
        <td>{{item.name}}</td>
        <td>{{item.latitude}}</td>
        <td>{{item.longitude}}</td>
      </tr>
    </table>
    <modal v-if="showModal">
      <header slot="header" class="modal-header">
        {{detailedItem.name}}
      </header>
      <main slot="main" class="modal-main">
        <img :src="detailedItem.image" alt="">
        <div class="modal-main__body">
          <p>Description: {{detailedItem.description}}</p>
          <p>Latitude: {{detailedItem.latitude}}</p>
          <p>Longitude: {{detailedItem.longitude}}</p>
        </div>
      </main>
      <footer slot="footer">
        <button @click="closeModal(detailedItem.id)" class="modal-close-button">Закрыть</button>
      </footer>
    </modal>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import modal from '../components/modal'

  export default {
    computed: {
      ...mapState(['data', 'detailedItem']),
      showModal() {
        return !!this.$route.query.modal;
      }
    },
    methods: {
      ...mapActions(['getDetails', 'clearDetails']),
      showDetails(id) {
        this.$router.push({ path: `/details/${id}`, query: {modal: true} });
      },
      closeModal(id) {
        this.$router.push({ path: "/" });
      }
    },
    components: {
      modal
    },
    watch: {
      $route(newVal) {
        this.clearDetails();
        if (newVal.name === 'details') { this.getDetails(newVal.params.id) }
      }
    },
    beforeMount() {
      if (this.$route.name === 'details') { this.getDetails(this.$route.params.id) }
    }
  }
</script>

<style lang="scss">
  .main {
    &-table {
      margin: 50px auto;

      th {
        background-color: lighten(gray, 20%);
        color: white;
      }

      tr:hover {
        background-color: lightblue;
        cursor: pointer;
      }
    }
  }

  .modal {
    &-header {
      padding: 20px;
    }

    &-close-button {
      background-color: gray;
      width: 100%;
      color: white;
      border: 1px solid white;
      border-radius: 5px; 
      padding: 10px 0;
      cursor: pointer;

      &:hover {
        background-color: lighten(gray, 20%)
      }
    }

    &-main {
      &__body {
        padding: 20px;
      }
    }
  }
</style>
