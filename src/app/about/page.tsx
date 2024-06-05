export default function Page() {
    return (
        <div className="md:flex justify-center items-center min-h-screen">
            <div className="m-4 md:w-1/3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                    We are a team of passionate designers and developers who believe in creating beautiful
                    and functional
                    digital experiences. Our mission is to help businesses and individuals achieve their
                    goals through
                    innovative technology solutions.
                </p>
            </div>
            <div className="space-y-6 m-4 md:w-1/3">
                <div>
                    <h2 className="text-xl font-bold">Key Facts</h2>
                    <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                        <li>
                            <CheckIcon
                                className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50"/>
                            Founded in 2024
                        </li>
                        <li>
                            <CheckIcon
                                className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50"/>
                            Trusted by over 1,000 clients
                        </li>
                        <li>
                            <CheckIcon
                                className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50"/>
                            Awarded for excellence in design
                        </li>
                        <li>
                            <CheckIcon
                                className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50"/>
                            Committed to sustainability
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function CheckIcon(props: { className: string }) {
    return (
        <svg
            {...props}
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
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    )
}