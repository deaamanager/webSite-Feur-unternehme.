import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import Carousel from '@/components/Carousel';
import ServiceTypeWrite from '@/components/ServiceTypeWrite';
import ServiceBox from '@/components/ServiceBox';

type Props = {
  params: {
    slug: string;
  }
};


export const revalidate = 30; // revaildate  jeder 30 sekunden 

export async function generateStaticParams(){
  const query= groq`
  *[_type == 'services']
  {
    slug
  }
  `;
  const slugs : Services[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map(slug => ({
    slug,
  }));
}


async function Service({ params: { slug } }: Props) {

  const query = groq`
    *[_type == 'services' && slug.current == $slug][0]
    {
       ..., 
    } 
    `;
  const service: Services = await client.fetch(query, { slug });
  return <article className=' px-3 md:px-14 pb-28 overflow-x-hidden '>
    <section className='py-3'>
      <div >
        <Carousel loop>
          {service?.sliderImages.map(silderImage => {
            return (
              <div key={service._id} className='relative w-full left-0 right-0 h-80 flex-[0_0_100%] filter drop-shadow-lg backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200 '>
                <Image
                  className='object-cover '
                  src={urlFor(silderImage).url()}
                  alt='silderImage'
                  fill
                />
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
    <ServiceBox service={service} />
    <hr className='border-[#ffbf00] pb-7 ' />
    <div>
    </div>
    <section className='space-y-2 border-none  hover:scale-105 transition-transform duration-150 ease-out drop-shadow-md shadow-sm '>
      <div className='relative h-full  min-h-full flex flex-col md:flex-row justify-between  '>
        <div className='absolute top-2 w-full h-full opacity-50 p-10 blur   '>
          <Image
            className='object-cover object-center  mx-auto'
            src={urlFor(service?.mainImage).url()}
            alt={service?.slug.current}
            fill
          />
        </div>
        <section className='relative p-5 drop w-full h-full pt-20  '>
          <div className='flex flex-col justify-between md:px-14 lg:px-20  gap-y-5'>
            <div className='px-8 py-10 flex flex-row justify-between gap-x-5'>
              <div className='absolute text-black  left-5 md:left-24 py-5 w-full '>
                <ServiceTypeWrite services={service} />
              </div>
            </div>
            <div className=' mt-8' />
            <div className='space-y-16 pb-10'>
              <p className='text-black text-base font-semibold'>
                {service?.description}
              </p>
            </div>

          </div>
        </section>
      </div>
    </section>
  </article>
}

export default Service;


