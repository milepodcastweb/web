import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "80156512-c6c6-4e7d-b03c-5fcad287efb3", // Get this from tina.io
  token: "8f9af7d5efd0ebd715ee502892bb04344fd06308", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/img",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "layout",
            label: "layout",
            ui: {
              component: () => null
            }
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            ui: {
              component: () => null
            }
          },
          {
            type: "string",
            name: "meta_description",
            label: "Meta Description",
          },
          {
            type: "string",
            name: "site_name",
            label: "Website name",
          },
          {
            type: "string",
            name: "main_title",
            label: "Naslov (ime i prezime)",
          },
          {
            type: "rich-text",
            name: "hero_text",
            label: "Tekst ispod naslova",
          },
          {
            type: "image",
            name: "hero_image",
            label: "Slika pored texta",
          },
          {
            type: "image",
            name: "cta_image",
            label: "Pozadinska slika(pri skrolovanju)",
          },
          {
            type: "image",
            name: "spinning_logo",
            label: "Logo koji se okrece",
          },
          {
            type: "rich-text",
            name: "about_text",
            label: "Tekst ispod logo-a",
          },
          {
            type: "image",
            name: "podcast_cta_image",
            label: "Pozadinska slika",
          },  
          {
            type: "image",
            name: "podcast_cta_image_mobile",
            label: "Pozadinska slika mobilni",
          },  
          {
            type: 'rich-text',
            name: 'podcast_cta_text',
            label: 'Tekst'
          },
          {
            type: "string",
            name: "podcast_cta_link",
            label: "Link do podcasta",
          },
          {
            type: "string",
            name: "podcast_cta_button",
            label: "Tekst Dugmeta",
          },
          {
            type: "string",
            name: "shop_title",
            label: "Naslov sekcije za kupovinu",
          },
          {
            type: "image",
            name: "default_shop_image",
            label: "Defaultna slika za proizvod",
          },
          {
            type: "object",
            name: "products",
            label: "Proizvodi",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.title} - ${item?.price},00 RSD` }
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Naziv",
              },
              {
                type: "image",
                name: "image",
                label: "Slika",
              },
              {
                type: "number",
                name: "price",
                label: "Cena",
              },
            ],
          },
          {
            type: "string",
            name: "shirt_disclaimer",
            label: "Paragraf o majicama",
          },
          {
            type: "string",
            name: "first_disclaimer",
            label: "Paragraf ispod forme",
          },
          {
            type: "string",
            name: "second_disclaimer",
            label: "Paragraf ispod forme drugi",
          },
        ],
      },
    ],
  },
});
