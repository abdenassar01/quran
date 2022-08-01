import { useParams } from "@remix-run/react"

function Surah() {

    const surah = useParams();

  return (
    <div>
        $_surah = { surah?._surah }
    </div>
  )
}

export default Surah