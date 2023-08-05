export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'uname',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'tel',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'uniqID',
      title: 'uniqID',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'isProvider',
      title: 'Service Provider',
      type: 'boolean',
    },
    {
      name: 'rate',
      title: 'rate',
      type: 'number',
    },
    {
      name: 'service',
      title: 'Service Type',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{type: 'service'}]
      }],
    },
  ],
}