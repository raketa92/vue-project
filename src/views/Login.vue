<template>
  <div class="mt-5 p-5">
    <mdb-container fluid grid-list-xl>
      <mdb-row>
        <mdb-col col="4"></mdb-col>
        <mdb-col col="4">
          <form>
            <p class="h4 text-center mb-4">Sign in</p>
            <div class="grey-text">
              <mdb-input v-model="email" label="Your email" icon="envelope" type="email" />
              <mdb-input v-model="password" label="Your password" icon="lock" type="password" />
            </div>
            <div class="text-center">
              <mdb-btn @click.native.prevent="login">Login</mdb-btn>
            </div>
          </form>
        </mdb-col>
        <mdb-col col="4"></mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from "mdbvue";
export default {
  name: "login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
  },
};
</script>
