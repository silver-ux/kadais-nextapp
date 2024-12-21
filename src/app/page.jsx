import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {

  const sites = ["kadai1", "kadai2", "kadai3"];

  return (
    <>
      <Header />
      <div className="xl:container mx-auto px-5 text-center">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 ">
          {sites.map((site) => (
            <Link href={`/${site}`} className="hover:bg-red-100 transition-all border border-black duration-300 rounded-lg bg-red-50 block p-6" key={site}>
              <h5 className="text-red-500 font-bold border-b border-solid border-black ~md:~text-xl/2xl">{site}</h5>
              <p className="~md:~text-base/lg pt-4 ">完成品はこちら。</p>
            </Link>
          ))}
        </div>
      </div >
    </>
  );
}
