import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white">
            <nav className="flex gap-4 justify-center text-center">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/aboutus">Sobre Nosotros</Link>
            </nav>
        </header>
    );
}
