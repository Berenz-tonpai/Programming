<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          menu admin
        </q-item-label>
        <q-item clickable="" @click="$router.push('/learn1')">
          learn1
        </q-item>
        <q-item clickable="" @click="$router.push('/learn2')">
          learn2
        </q-item>
        <q-item clickable="" @click="goToWeb()">learn3 </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    goToWeb() {
      window.open("http://ms.bsru.ac.th");
    }
  }
};
</script>
