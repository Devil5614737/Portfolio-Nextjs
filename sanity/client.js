import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_USE_CDN,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
