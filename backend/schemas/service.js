export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'providerID',
      title: 'Provider ID',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
    },
  ],
}