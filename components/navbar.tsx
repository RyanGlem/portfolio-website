import Link from "next/link";

export default function Navbar({}) {
  const style = "transition duration-300 text-white hover:text-black ease-in-out"
  return (
    <div className="flex justify-center w-full space-x-4 py-6 bg-gradient-to-r from-cyan-500 to-sky-600">
      <Link href="/">
        <a className={style}>Home</a>
      </Link>
      <Link href="/fractus">
        <a className={style}> Fractus </a>
      </Link>
      <Link href="/complex">
        <a className={style}> Complex </a>
      </Link>
      <Link href="/experimental">
        <a className={style}> Experimental </a>
      </Link>
      <Link href="/example">
        <a className={style}> Isobar </a>
      </Link>
    </div>
  );
}
