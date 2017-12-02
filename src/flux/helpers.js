import {fluxConfig} from './flux_config.js';

// instantiate the Flux SDK with your appliation key
export const sdk = new FluxSdk(fluxConfig.flux_client_id, {
  redirectUri: fluxConfig.url,
  fluxUrl: fluxConfig.flux_url
});

export const helpers = new FluxHelpers(sdk);

// export const sdk = () => {}
// export const helpers = () => {}