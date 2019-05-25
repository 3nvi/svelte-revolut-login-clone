<script>
  import { afterUpdate } from 'svelte';
  import { authStore } from 'stores/auth';
  import Logo from 'assets/img/logo.png';
  import { PASSWORD, nofifyUser } from 'utils';
  import InputView from './subcomponents/InputView';
  import Numpad from './subcomponents/Numpad';

  let nonAuthUserInput = '';
  const addDigit = digit => (nonAuthUserInput += digit);
  const clearDigits = () => (nonAuthUserInput = '');

  afterUpdate(() => {
    if (nonAuthUserInput.length === PASSWORD.length) {
      if (nonAuthUserInput === PASSWORD) {
        authStore.setAuthStatus(true);
      } else {
        nofifyUser('Oops! Wrong password!');
        clearDigits();
      }
    }
  });
</script>

<style>
  .logo {
    display: block;
    width: 85px;
    margin: 35px auto 60px auto;
  }
</style>

<svelte:head>
  <title>Revolut | Login</title>
</svelte:head>

<img alt="logo" class="logo" src={Logo} />
<InputView digitsEntered={nonAuthUserInput.length} />
<Numpad {addDigit} {clearDigits} isEmpty={!nonAuthUserInput} />
