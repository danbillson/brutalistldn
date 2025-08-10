import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const Building = defineDocumentType(() => ({
  name: "Building",
  filePathPattern: `buildings/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    borough: { type: "string", required: true },
    address: { type: "string", required: false },
    coordinates: { type: "json", required: false },
    architect: { type: "string", required: false },
    year: { type: "number", required: false },
    buildingType: { type: "string", required: true },
    status: { type: "string", required: false },
    materials: { type: "list", of: { type: "string" }, required: false },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: true },
    gallery: { type: "list", of: { type: "string" }, required: false },
    references: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/buildings/${doc.slug}`,
    },
    decade: {
      type: "string",
      resolve: (doc) => (doc.year ? `${Math.floor(doc.year / 10) * 10}s` : "Unknown"),
    },
  },
}));

export const PageDoc = defineDocumentType(() => ({
  name: "PageDoc",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: false },
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/${doc.slug}` },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Building, PageDoc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  disableImportAliasWarning: true,
});