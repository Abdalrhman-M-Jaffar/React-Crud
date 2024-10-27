import "../styles/CrudFilter.css";
import Categorys from "./CrudSelectOptionArr";

interface CrudFilter {
    onSelectCategory: (category: string) => void;
}

const CrudFilter = ({ onSelectCategory }: CrudFilter) => {
    return (
        <>
            <div className="input-con-filter">
                <label htmlFor="Category" className="input-text-filter">
                    Search By Category
                </label>
                <select
                    id="Category"
                    className="select-input-filter"
                    onChange={(event) => onSelectCategory(event.target.value)}
                >
                    <option value="All Categorys">All Categorys</option>
                    {Categorys.map((Category) => (
                        <option key={Category} value={Category}>
                            {Category}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default CrudFilter;
