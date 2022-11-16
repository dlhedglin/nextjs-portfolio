export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: "tech",
            title: "Tech",
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
    ]
}
