// MyDocument.js
export default {
  name: 'myDocument',
  title: 'My Document',
  type: 'document',
  fields: [
    // Fields for the "All fields" section
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    // Fields for the "Content" section
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    // Fields for the "Meta" section
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'link',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'link',
    },
    // Fields for the "Settings" section
    {
      name: 'published',
      title: 'Published',
      type: 'callToAction',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'callToAction',
    },
  ],
};
