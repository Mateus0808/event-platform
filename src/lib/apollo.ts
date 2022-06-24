import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qe9pfh3sbl01xtcwlze5wa/master',
  cache: new InMemoryCache()
})