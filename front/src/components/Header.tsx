import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white">
            <nav className="flex gap-4 justify-center text-center">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/aboutus">Sobre Nosotros</Link>
            </nav>
        </header>
    );
}
