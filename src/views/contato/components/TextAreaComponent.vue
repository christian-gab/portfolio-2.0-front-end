<template>
  <textarea placeholder="Descreva sua ideia ou projeto aqui, com todos os detalhes necessários." name="" id=""></textarea>
</template>

<style scoped>
textarea {
  font-weight: 300;
  outline: none;
  padding: 10px 0 0 0;
  border: none;
  border-bottom: 1px solid var(--color-border);
  width: 100%;
  font-size: 15px;
  line-height: 1;
  color: var(--color-text);
  background-color: transparent;
  resize: none;
  font-family: Poppins;
  transition: 0.2s ease-in-out;
  font-size: 16px;

}

textarea::placeholder {
  font-family: Poppins;
  color: var(--color-muted);
  opacity: 1;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

textarea:focus::placeholder{
  opacity: 0;
}

textarea:focus {
  border-color: var(--color-primary);
  color: var(--color-primary);
}


</style>
