import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ,
  dataset: 'production',
  useCdn: true, 
  // we use this to ignore the error related to the token in the browser console 
  ignoreBrowserTokenWarning: true,
  apiVersion: '2023-05-03', 
  token:import.meta.env.VITE_SANITY_TOKEN_SECRET_KEY
})