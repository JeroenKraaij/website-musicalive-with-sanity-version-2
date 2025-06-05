import page from "./pages/page";
import homepage from "./pages/homepage";
import siteSettings from "./siteSettings";
import blog from "./blog";
import author from "./author";
import category from "./category";
import footerSettings from "./footerSettings";
import globalSeo from "./globalSeo";
import showcase from "./showcase";
import events from "./events";
import heroSection from "./blocks/heroSection";
import videoSection from "./blocks/videoSection";


export const schemaTypes = [
    siteSettings,
    footerSettings,
    globalSeo,
    author,
    homepage,
    page,
    blog,
    category,
    events,
    showcase,
    heroSection,
    videoSection
    ,



    // When you add more schemas, import them here and include them in this array:
    // import author from "../schemas/author";
    // import category from "../schemas/category";
    // ...
    // then:
    // author,
    // category,
    // etc.
];
