import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTHEME } from './theme';
import SanityNavbar from './components/SanityNavbar';
import SanityLogo from './components/SanityLogo';
import {getDefaultDocumentNode} from "./structure"


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'SYR-services-CMS',
  title: 'SYR Services Studio',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode, 
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio : {
    components:{
      logo: SanityLogo   ,
      navbar: SanityNavbar ,
    },
  },
  theme: myTHEME
})
