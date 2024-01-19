<script>
  export let ButtonType, ButtonText, FormID;
</script>

<button type={ButtonType} form={FormID}>{ButtonText}</button>

<style>
button {
    height: fit-content;
    width: fit-content;
    padding: 0.5rem 1.2rem;
    border-radius: 50rem;
    background-color: #63c6a7;
    color: white;
    border: none;
    font-size: 1rem;
    box-shadow: var(--box-shadow);
    font-family: var(--primary-font-family);
  }

  button:hover {
    background-color: #118f67;
  }
</style>
