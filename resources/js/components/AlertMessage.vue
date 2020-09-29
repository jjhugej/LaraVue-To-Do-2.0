<template>
  <article :class="msgClass" class="message">
    <div class="message-header">
      <p>{{ title }}</p>
      <button @click="removeMsg" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    title: function () {
      return this.$store.state.message.title;
    },
    body: function () {
      return this.$store.state.message.body;
    },
    msgClass: function () {
      return this.$store.state.message.class;
    },
  },
  methods: {
    removeMsg: function () {
      this.$store.dispatch("removeMessage");
    },
  },
};
</script>

<style scoped></style>
