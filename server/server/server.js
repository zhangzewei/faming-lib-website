'use strict';

import Hapi from 'hapi';

const app = Hapi.server({
    port: 4000,
    host: 'localhost',
});

export default app;