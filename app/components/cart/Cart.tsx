import { NavLink } from "@remix-run/react"

type Prop = {
  nbr: number,
  name: string,
  nameTr: string,
  nameAr: string,
  numberOfAyah: number
}

function Cart(props: Prop) {
  return (
    <NavLink to={`/quran/${props.name}`} className="cart">
        <div className="left">
          <div className="number">{ props.nbr }</div>
          <div className="right">
            <div className="surah-name">{ props.name }</div>
            <div className="helper-text">{ props.nameTr }</div>
          </div>
        </div>
        <div className="right">
          <div className="surah-name">{ props.nameAr }</div>
          <div className="helper-text">{ props.numberOfAyah } Ayahs</div>
        </div>
    </NavLink>
  )
}

export default Cart