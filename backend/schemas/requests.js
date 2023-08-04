export default {
  name: 'requests',
  title: 'Requests',
  type: 'document',
  fields: [
    {
      name: 'farmer',
      title: 'farmer',
      type: 'reference',
      to: [{type: 'users'}]
    },
    {
      name: 'serviceProvider',
      title: 'Service Provider',
      type: 'reference',
      to: [{type: 'users'}]
    },
    {
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{type: 'service'}]
    },
    {
      name: 'isAccepted',
      title: 'Accepted',
      type: 'boolean',
    },
    
  ],
}