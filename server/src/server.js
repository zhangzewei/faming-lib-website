'use strict';
import path from 'path';
import Hapi from 'hapi';

const app = Hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: path.join(__dirname, 'public')
        }
    }
});

export default app;