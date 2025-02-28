import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-8 px-0 border-t border-dashed border-zinc-400">
            <div className="container">
                <p className="flex items-center gap-3 m-0 text-sm"

                >
                    {/* IMAGE */}
                    <div className="size-6 rounded-full bg-gradient-to-r from-teal-400 to-yellow-200" />

                    <span>
                        Made by{' '}
                        <Link href="https://github.com/psparwez/" className="font-medium text-blue-500 after:content-['_↗']" target='_blank'>psparwez</Link>
                    </span>
                </p>
            </div>
        </footer>
    );
};