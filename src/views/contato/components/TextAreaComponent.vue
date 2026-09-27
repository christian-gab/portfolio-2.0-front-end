<template>
  <label class="visually-hidden" for="contact-message">Descreva sua ideia ou projeto</label>
  <textarea
    id="contact-message"
    name="message"
    placeholder="Descreva sua ideia ou projeto aqui, com todos os detalhes necessários."
    rows="4"
  ></textarea>
</template>

<style scoped>
textarea {
  font-weight: 300;
  outline: none;
  padding: 10px 0 0;
  border: none;
  border-bottom: 1px solid var(--color-border);
  width: 100%;
  color: var(--color-text);
  background-color: transparent;
  resize: none;
  font-family: inherit;
  transition: 0.2s ease-in-out;
  font-size: 16px;
  line-height: 1.5;
}

textarea::placeholder {
  font-family: inherit;
  color: var(--color-muted);
  opacity: 1;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

textarea:focus::placeholder {
  opacity: 0;
}

textarea:focus {
  border-color: var(--color-primary-text);
  color: var(--color-primary-text);
}

textarea:focus-visible {
  outline: 2px solid var(--color-primary-text);
  outline-offset: 3px;
}

@media (max-width: 622px) {
  textarea {
    padding-bottom: 10px;
  }
}
</style>
