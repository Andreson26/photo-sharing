import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
    children: ReactNode;
    title: String;
  }

export default function Layout({ children, title }: Props) {
  //const [year, setYear] = useState<Year | undefined>(undefined);
  const currentYear = new Date().getFullYear();

 /* useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
  }, []);*/

  return (
    <>
      <Head>
        <title>{title ? title + "-photo-sharing" : "photo-sharing"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between px-12">
        <Header />

        <main>{children}</main>

        <footer className="h-12 flex justify-center items-center shadow-inner">
            <p>Copyright © {currentYear} photo-sharing</p>
        </footer>
      </div>
    </>
  );
}
