import { defineField,defineType}  from 'sanity'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
      defineField({
        name: 'field',
        title: 'Field',
        type: 'array',
        of: [{ type: 'linkContent' }],
      }),
    ],
  });