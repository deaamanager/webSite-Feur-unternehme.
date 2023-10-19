import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'firmaInfo',
  title: 'FirmaInfo',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),

      defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),

    defineField({
        name: 'image',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
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
        name: 'shortTitle1',
        title: 'Short Title1',
        type: 'string',
      }),
      defineField({
        name: 'shortTitle2',
        title: 'Short Title2',
        type: 'string',
      }),
     
  ],
   preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
