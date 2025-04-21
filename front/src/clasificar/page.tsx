import Link from "next/link";// como los link del react normal que estás acostumbrado

export default function Home() {
  return (
    <main>
      <h1>Landing  de aredia</h1>
      <Link href="/dashboard">Ir al Dashboard</Link>
      <Link href="/aboutus">Sobre Nosotros</Link>
    </main>
  );
}
