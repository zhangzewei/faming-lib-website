import app from './server'
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const init = async () => {
  try {
    const swaggerOptions = {
      info: {
        title: 'Test API Documentation',
      },
    };
    await app.register([
      Inert,
      Vision,
      {
          plugin: HapiSwagger,
          options: swaggerOptions
      },
      {
        plugin: require('hapi-router'),
        options: {
          routes: 'server/routers.js'
        }
      }
    ])
  } catch (err) {
    throw err
  }
  await app.start();
  console.log(`Server running at: ${app.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();