import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4riirwq126j01zc6xkl79ae/master',
  cache: new InMemoryCache()
})