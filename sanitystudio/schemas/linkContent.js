import { defineType} from 'sanity'

export default defineType({
    name: 'linkContent',
    title: 'LinkContent',
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
        type: 'string',
      },
    ],
});
