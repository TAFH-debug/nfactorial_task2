import Link from "next/link";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <MountainIcon className="h-6 w-6"/>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="/blogs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Blogs
                </Link>
            </nav>
        </header>
    )
}

function MountainIcon(props: { className: string }) {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}