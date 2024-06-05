import Link from "next/link";

export type PostProps = {
    author: string,
    title: string,
    description: string,
    id: string,
    date: string
}

export default function Post(props: PostProps) {
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

    const parsed = props.date.split('-');
    const year = parseInt(parsed.shift() as string);
    const month = parseInt(parsed.shift() as string);
    const day = parseInt(parsed.shift() as string);

    return (
        <div className="relative group overflow-hidden rounded-lg m-4">
            <Link href={"/blogs/" + props.id} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">Read more</span>
            </Link>
            <img
                src="/default.jpg"
                alt="Blog Post Image"
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:scale-105 transition-transform"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">{props.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">By {props.author} - {monthToName[month]} {day}, {year}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {props.description}
                </p>
            </div>
        </div>
    )
}