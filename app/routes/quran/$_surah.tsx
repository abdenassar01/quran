import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import axios from "axios";
import { SurahDetails } from "~/types/Types";
import surahStyles from "~/styles/surah.css";

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
      rel: "icon", 
      href: "https://i.imgur.com/WzmrQug.png",
      sizes: "16x16"
    }
  ];
}

function Surah() {

  const data: SurahDetails = useLoaderData();
  const ayahs: string[] = Object.values(data?.verse);

  return (
    <div>
      <div className="wrapper">
          <h2 className="title-heading">
            { data?.name }
            <div className="quran-text-wrapper">
              {
                ayahs.map(ayah => <span key={ ayah } className="quran-text">{ ayah + " ۝ " }   </span>)
              }
            </div>
          </h2>
      </div>
    </div>
  )
}

export default Surah