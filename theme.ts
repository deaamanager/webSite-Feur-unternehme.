import { buildLegacyTheme } from "sanity";

const props = {
   "--my-white": "#fff",
   "--my-black": "#1a1a1a",
   "--my-deaa-color": "#ffbf00",
   "--my-red": "#db4437",
   "--my-green": "#0f9d58",
   "--my-yallow": "#ffff00",
};


export const myTHEME = buildLegacyTheme({
   "--black": props["--my-black"],
   "--white": props["--my-white"],

   "--gray": "#666",
   "--gray-base": "#666",

   "--component-bg": props["--my-black"],
   "--component-text-color": props["--my-white"],

   
   "--brand-primary": props["--my-deaa-color"],


   "--default-button-color": "#666",
   "--default-button-primary-color": props["--my-deaa-color"],
   "--default-button-success-color": props["--my-green"],
   "--default-button-warning-color": props["--my-yallow"],
   "--default-button-danger-color": props["--my-red"],

  
   "--state-success-color": props["--my-green"],
   "--state-warning-color": props["--my-yallow"],
   "--state-danger-color": props["--my-red"],
   "--state-info-color": props["--my-deaa-color"],

   "--main-navigation-color": props["--my-black"],
   "--main-navigation-color--inverted": props["--my-white"],
   "--focus-color": props["--my-deaa-color"],
 

});