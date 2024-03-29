import { useDispatch } from "react-redux"
import css from "../SearchBox/SearchBox.module.css"
import { selectNameFilter } from "../../redux/filtersSlice"
export default function SearchBox({ value }) {
   const dispatch =  useDispatch()
    return (
        <div className={css.search}>
            <p>Find contacts by name </p>
            <input  className={css.input} type="text" value={value} onChange={(e)=>dispatch(selectNameFilter(e.target.value))}/>
    </div>
)
}

