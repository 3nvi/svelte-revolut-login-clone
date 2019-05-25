<script>
  import { onMount } from 'svelte';
  import ArrowSVG from 'assets/icon/arrow.svg';
  import TouchIdSVG from 'assets/icon/touchID.svg';
  import { PASSWORD, nofifyUser } from 'utils';

  export let addDigit;
  export let clearDigits;
  export let isEmpty;

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleDigitClick = digit => () => addDigit(digit);
  const handleArrowClick = () => clearDigits();
  const handleTouchIdClick = () => nofifyUser('This is not a mobile device buddy ;)');
  const handleForgotPasswordClick = () => nofifyUser(`The password is ${PASSWORD}`);

  onMount(() => {
    const keyboardHandler = e => {
      const isNumber = /^[0-9]$/i.test(e.key);
      if (isNumber) {
        addDigit(Number(e.key));
      }
    };

    document.body.addEventListener('keyup', keyboardHandler);
    return () => document.body.removeEventListener('keyup', keyboardHandler);
  });
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 5px;
  }

  .numpadKey {
    transition: 0.1s background-color linear;
    border: none;
    width: 100%;
    background: var(--default-background-color);
    height: 75px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .numpadKey.font-lg {
    font-size: 30px;
  }

  .numpadKey.font-sm {
    font-size: 15px;
  }

  .numpadKey:hover {
    background: var(--primary-background-color);
  }
</style>

<div class="wrapper">
  {#each digits as digit (digit)}
    {#if digit === 0}
      <button on:click={handleForgotPasswordClick} class="numpadKey font-sm">Forgot?</button>
    {/if}

    <button on:click={handleDigitClick(digit)} class="numpadKey font-lg">{digit}</button>

    {#if digit === 0}
      <button
        on:click={() => (isEmpty ? handleTouchIdClick() : handleArrowClick())}
        class="numpadKey">
        {@html isEmpty ? TouchIdSVG : ArrowSVG}
      </button>
    {/if}
  {/each}

</div>
