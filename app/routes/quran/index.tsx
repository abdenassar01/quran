import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import axios from "axios";
import Cart from "~/components/cart/Cart"
import { Surah } from "~/types/Types";

export const loader: LoaderFunction = async () => {

  const res = await axios.get("https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json");
  
  return res.data
}; 

function index() {

  const data = useLoaderData();

  const transition = useTransition();

  if ( transition.state === "loading" ) return <div>loading ...</div>

  return (
    <div className="carts-wrappers">
      {
        data?.map(
          (surah: Surah) => 
            <Cart 
              key={ surah.index } 
              nbr={ surah.index } 
              name={ surah.title } 
              nameAr={ surah.titleAr } 
              nameTr={ surah.type } 
              numberOfAyah={ surah.count } 
            />
          )
      }  
    </div>
  )
}

export default index