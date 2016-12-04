import { Environment } from './models/support/environment.model';

const ENV = process.env.ENV;

const env = new Environment();
switch (ENV) {
    case 'dev':
        env.production = false;
        env.gatewayUrl = 'http://localhost:8082/';
        break;
    case 'production':
        env.production = true;
        env.gatewayUrl = '';
        break;
}

export const environment = env;
