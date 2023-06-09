import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "platform for social media",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Color",
      description: "platform for social media color",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
  
    }),

  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
})
