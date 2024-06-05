import fs from 'fs';
import { PostProps } from '../../components/post';
import {Metadata} from "next";

export async function generateMetadata({ params: { slug }}: { params: { slug: string }}): Promise<Metadata> {
    const data = await getPostData(slug)

    return {
        title: data.title,
        description: data.description
    }
}

async function getPostData(id: string) {
    const unparsed = fs.readFileSync("data/data.json", "utf-8");
    return JSON.parse(unparsed).filter((i: PostProps) => id == i.id)[0];
}

export default async function Page({ params: { slug }}: { params: { slug: string }}) {
    const data = await getPostData(slug);

    const monthToName = [
        'None',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const parsed = data.date.split('-');
    const year = parseInt(parsed.shift() as string);
    const month = parseInt(parsed.shift() as string);
    const day = parseInt(parsed.shift() as string);

    return (
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
            <div className="space-y-2 not-prose">
                <h1 className="text-4xl font-extrabold tracking-tight">{data.title}</h1>
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <img
                        src="/default.jpg"
                        alt="Featured Image"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src="/default.jpg" alt="Author Avatar" width={32} height={32}
                             className="rounded-full"/>
                        <span className="text-sm font-medium">{data.author}</span>
                    </div>
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400">Published on {monthToName[month]} {day}, {year}</span>
                </div>
            </div>
            <h3 className="m-3 font-bold">
                {data.description}
            </h3>
            <p className="m-3">
                Some content here
            </p>
        </article>
    )
}