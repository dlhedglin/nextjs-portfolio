export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "aboutPic",
      title: "AboutPic",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "skillsNovice",
      title: "SkillsNovice",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "skillsCompetent",
      title: "skillsCompetent",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "skillsProficient",
      title: "SkillsProficient",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }
  ]
}
