import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
  token: process.env.SANITY_SECRET_TOKEN
})