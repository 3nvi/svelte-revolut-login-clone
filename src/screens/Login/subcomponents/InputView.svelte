<script>
  export let digitsEntered;
</script>

<style>
  .input {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--accent-color);
    margin: 0 15px;
  }

  .input.empty {
    opacity: 0.2;
  }

  .input.filled {
    opacity: 1;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
</style>

<div class="wrapper">
  <div class={`input ${digitsEntered > 0 ? 'filled' : 'empty'}`} />
  <div class={`input ${digitsEntered > 1 ? 'filled' : 'empty'}`} />
  <div class={`input ${digitsEntered > 2 ? 'filled' : 'empty'}`} />
  <div class={`input ${digitsEntered > 3 ? 'filled' : 'empty'}`} />
</div>
