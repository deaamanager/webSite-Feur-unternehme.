import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
     
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'shortTitle',
        title: 'Short Title',
        type: 'string',
      }),
      defineField({
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),   
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: "sliderImages",
        title: "Slider Images",
        type: "array",
        of: [{type: "image"}],
        
      }),   
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {media} = selection
      return {...selection, subtitle: media && `by ${media}`}
    },
  },
})
