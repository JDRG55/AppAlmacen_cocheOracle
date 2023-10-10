import { App } from './config/index';

  async function main() {
      const app = new App(6000);
    await app.listen();
}

main();
