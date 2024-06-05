import Post, {PostProps} from "@/app/components/post";
import fs from "fs";

async function getData() {
    const unparsed = fs.readFileSync("data/data.json", "utf-8");
    return JSON.parse(unparsed);
}

export default async function Page() {
    const data = await getData();

    return <div className="grid gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((post: PostProps) => {
                    return <Post key={post.id} author={post.author}
                          title={post.title}
                          description={post.description}
                          id={post.id}
                          date={post.date} />
                })
            }
        </div>
    </div>
}