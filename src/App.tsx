import CrudForm from "./components/CrudForm";
import CrudFilter from "./components/CrudFilter";
import CrudTable from "./components/CrudTable";
import { useState } from "react";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [FormData, setFormData] = useState([
        { id: 0, product: "", category: "", price: 0 },
    ]);

    const visibleFormData =
        selectedCategory == "All Categorys"
            ? FormData
            : selectedCategory
            ? FormData.filter((e) => e.category === selectedCategory)
            : FormData;

    return (
        <>
            <CrudForm
                onSubmit={(data) => {
                    setFormData([
                        ...FormData,
                        { ...data, id: FormData.length + 1 },
                    ]);
                    console.log(FormData);
                }}
            />
            <CrudFilter
                onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <CrudTable
                CrudArr={visibleFormData}
                onDelete={(id) =>
                    setFormData(FormData.filter((e) => e.id !== id))
                }
            />
        </>
    );
};

export default App;
