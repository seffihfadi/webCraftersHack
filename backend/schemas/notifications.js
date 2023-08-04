export default {
  name: 'notifications',
  title: 'Notifications',
  type: 'document',
  fields: [
    {
      name: 'receiverID',
      title: 'Receiver ID',
      type: 'string',
    },
    {
      name: 'sender',
      title: 'Sender',
      type: 'reference',
      to: [{type: 'users'}]
    },
    {
      name: 'msg',
      title: 'Message',
      type: 'string',
    },
  ],
}