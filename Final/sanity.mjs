import {createClient} from './node_modules/@sanity/client';

const client = createClient({
  projectId: 'xmf58cl9',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-12-12', // use current date (YYYY-MM-DD) to target the latest API version
})

const data = await client.fetch(`count(*)`);
console.log(`Number of documents: ${data}`);