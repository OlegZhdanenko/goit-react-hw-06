import { useDispatch, useSelector } from "react-redux"
import css from "../SearchBox/SearchBox.module.css"
import { selectNameFilter } from "../../redux/filtersSlice"
import { useId } from "react"
export default function SearchBox() {
    const elementId = useId()
    const dispatch = useDispatch()
    const phonebookName = useSelector((state) => state.filters.name)
    const handleChange=(e)=>dispatch(selectNameFilter(e.target.value))

    return (
        <div className={css.search}>
            <label className={css.label} htmlFor={elementId}>
                Find contacts by name
            </label>
            <input className={css.input}
                type="text"
                value={phonebookName}
                onChange={handleChange}
                id={elementId}
                placeholder="Search"
            />
        </div>
    );
}

