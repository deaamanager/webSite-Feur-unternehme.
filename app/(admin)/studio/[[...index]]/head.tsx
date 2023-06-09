
export { NextStudioHead } from 'next-sanity/studio/head'


import { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn.sanity.io/images/7n5v8za3/production/0e364800a83bff494b690520d1fe9543fa7fcd97-2048x2048.png"
      />
    </>
  )
}