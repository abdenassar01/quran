import { useParams } from "@remix-run/react"

function Surah() {

  const params = useParams();
  
  // https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${ index }.json

  return (
    <div>
        surah Name = { params?._surah }
    </div>
  )
}

export default Surah