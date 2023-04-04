export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username',
      name: 'username',
      tyle: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      tyle: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      tyle: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      tyle: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      tyle: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Followers',
      name: 'followers',
      tyle: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
}
