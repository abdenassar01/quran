import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react"
import axios from "axios";
import { SurahDetails } from "~/types/Types";
import surahStyles from "~/styles/surah.css";
import asideStyles from "~/styles/aside.css";
import Aside from "~/components/aside/Aside";

export const loader: LoaderFunction = async ({ params }) => {
  const surah: string = params?._surah
  const index = parseInt(surah);

  const res = await axios.get(`https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${ index }.json`);

  return res.data
}

export const links: LinksFunction = () => {
  return [
    { 
      rel: "stylesheet", 
      href: surahStyles
    },
    { 
      rel: "stylesheet", 
      href: asideStyles
    } 
  ];
}

function Surah() {

  const data: SurahDetails = useLoaderData();
  const ayahs: string[] = Object.values(data?.verse);

  const transition = useTransition()

  if(transition.state === "loading") return <div>loading...</div>

  return (
    <div>
      <div className="wrapper">
        <Aside />
        <div className="content">
          <h2 className="title-heading">
              { data?.name }
            </h2>
            <div className="quran-text-wrapper">
              {
                ayahs.map(ayah => <span key={ ayah } className="quran-text">{ ayah + " ۝ " }   </span>)
              }
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Surah