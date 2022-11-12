interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    }
}

export interface Project extends SanityBody {
    title: string;
    description: string;
    image: Image;
    summary: string[];
    tags: string[];
    linkToCode: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    about: string[];
    aboutPic: Image;
    projects: Project[];
}
