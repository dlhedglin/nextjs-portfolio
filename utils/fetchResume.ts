import { Resume } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'

const query = groq`
    *[_type == "resume"] {
        resumePdf,
        "fileUrl": resumePdf.asset->url
    }
`

export const fetchResume = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`)
    // const data = await res.json()
    // const resume: Resume = data.resume[0]
    // return resume
    const resume: Resume[] = await sanityClient.fetch(query)
    return resume[0]
}
