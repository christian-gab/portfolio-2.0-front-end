<template>
    <input  :placeholder="placeholder" type="text" />
</template>

<script setup>
defineProps({
  placeholder:{
    type: String,
    required: true,
  }
})
</script>

<style scoped>
input{
  font-weight: 300;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-border);
  width: 50%;
  font-size: 15px;
  padding-bottom: 10px;
  color: var(--color-text);
  background-color: transparent;
  font-family: Poppins;
  transition: 0.2s ease-in-out;
  font-size: 16px;
}

input::placeholder{
  font-family: Poppins;
  color: var(--color-muted);
  font-weight: 300;
  font-size: 16px;
  transition: opacity 0.2s ease;
  opacity: 1;
}

input:focus {
  border-bottom: 1px solid  var(--color-secondary);
  color: var(--color-secondary);
}

input:focus::placeholder{
  opacity: 0;
}

</style>
