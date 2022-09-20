import { NavLink } from "@remix-run/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Surah } from "~/types/Types";

function Aside() {
    
    const [ data, setData ] = useState([])

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <main className="aside-wrapper">
        {
            data.map((item: Surah) => <NavLink key={ Math.random() * Math.random() } to={ `/quran/${item.index}` } className="item">{item.titleAr}</NavLink>)
        }
        
    </main>
  )
}

export default Aside