import { defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        // Other fields for the header section
      ],
    },
    {
      name: 'content',
      title: 'Content Section',
      type: 'array',
      of: [
        { type: 'callToAction' },
      ],
    },
  ],
});
