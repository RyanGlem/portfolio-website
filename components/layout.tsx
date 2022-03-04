import Navbar from "../components/navbar";
import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      {" "}
      <Head>
        <title>
          Content Consortium
        </title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
