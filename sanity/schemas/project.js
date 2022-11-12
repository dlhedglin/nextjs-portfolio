export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "linkToCode",
      title: "LinkToCode",
      type: 'url'
    },
  ]
}
