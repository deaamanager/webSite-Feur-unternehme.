
type Base ={
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface  Services extends Base {
    title: string;
    slug: Slug;
    mainImage: Image;
    shortTitle: string;
    description: string;
    sliderImages: Image[]; 
    }

interface Social extends Base {
            //_type: "social";
            title: string;
            url: string;  
            color: string; 
        };
interface FirmaInfo extends Base {  
        //_type: "firmaInfo"; 
            name: string;
            title: string;
            image: Image;
            logo: Image;
            description: string;
            phone: string;
            address: string;
            email: string;
            descriptionImage: Image;
            shortTitle1: string;
            shortTitle2: string;
            shortTitle3: string;
            trustTitle: string;
            zertifikatImage: Image;
            trustImage: Image;
        };
    
interface Neuigkeiten extends Base {
            //_type: "neuigkeiten";
            title: string;
            slug: Slug;
            description: string;
            mainImage: Image;
            releaseDate: number;
            
}

interface Image {
            _type: "image";
            asset: Referance;
}

interface Referance { 
    _ref: string;
    _type: "reference";
    }
interface Slug  {   
    _type: "slug";
    current: string;
    }
interface Block  {   // aktuell ich benutze es nicht
        _key: string;
        _type: "block";
        children: Span[];
        markDefs: any[];
        style: "normal"| "h1"| "h2"| "h3"| "h4"| "blockquote"| "code"| "quote"|"bullet"|"number";
        }
interface Span  { 
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
    }

