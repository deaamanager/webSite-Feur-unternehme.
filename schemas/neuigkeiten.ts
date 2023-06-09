import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'neuigkeiten',
    title: 'Neuigkeiten',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField ({
            title: 'Release Date',
            name: 'releaseDate',
            type: 'date'
        })
        ],
        preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
    }
)

