<template>
  <div>
    <q-input v-model="users" label="Username" />
    <q-input
      v-model="passwords"
      filled
      :type="isPwd ? 'password' : 'text'"
      hint="Password with toggle"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-btn
      color="white"
      text-color="black"
      label="Submit"
      @click="$router.push('/main')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: "",
      passwords: "",
      isPwd: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
