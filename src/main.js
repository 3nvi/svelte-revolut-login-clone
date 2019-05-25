import App from 'App';

const app = new App({
  target: document.body,
});

if (process.env.NODE_ENV === 'development') {
  window.app = app;
}

export default app;
