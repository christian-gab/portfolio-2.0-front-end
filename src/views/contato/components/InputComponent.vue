<template>
  <label class="visually-hidden" :for="id">{{ placeholder }}</label>
  <input
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :autocomplete="autocomplete"
  />
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
})
</script>

<style scoped>
input {
  font-weight: 300;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-border);
  width: 100%;
  padding-bottom: 10px;
  color: var(--color-text);
  background-color: transparent;
  font-family: inherit;
  transition: 0.2s ease-in-out;
  font-size: 16px;
}

input::placeholder {
  font-family: inherit;
  color: var(--color-muted);
  font-weight: 300;
  font-size: 16px;
  transition: opacity 0.2s ease;
  opacity: 1;
}

input:focus {
  border-bottom: 1px solid var(--color-secondary);
  color: var(--color-primary-text);
}

input:focus-visible {
  outline: 2px solid var(--color-primary-text);
  outline-offset: 3px;
}

input:focus::placeholder {
  opacity: 0;
}
</style>
