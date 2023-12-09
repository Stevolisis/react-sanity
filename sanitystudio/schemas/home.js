import { defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'link',
      // to: [{ type: 'callToAction' }],
    },
    {
      name: 'about',
      title: 'About Section',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
});
