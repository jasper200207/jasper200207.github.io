import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    subCategory: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `**/about.mdx`,
  contentType: "mdx",
  computedFields: {
    url: {
      type: "string",
      resolve: () => `/about`,
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: "src/markdowns",
  documentTypes: [Post, About],
});

export default contentSource;
