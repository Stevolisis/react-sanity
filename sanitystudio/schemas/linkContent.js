import { defineType} from 'sanity'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'blockContent',
      },
    ],
});
