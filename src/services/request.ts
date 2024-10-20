import superagent from 'superagent';
import type { SuperAgentRequest } from 'superagent';

// Initialize the superagent instance
const request = superagent.agent();

// Set default headers
request.set('Accept', 'application/json');
request.set('Content-Type', 'application/json');

// Request interceptor to modify the request URL
request.use((req: SuperAgentRequest) => {
  req.url = `https://my-json-server.typicode.com/TomSearle/cb-devtest-api/${req.url}`;
  return req;
});

export default request;
