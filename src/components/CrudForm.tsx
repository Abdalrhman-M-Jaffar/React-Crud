import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles/CrudForm.css";
import Categorys from "./CrudSelectOptionArr";

const schema = z.object({
    product: z
        .string()
        .min(3, { message: "Product name must be at least 3 Characters" })
        .max(50, {
            message: "Product name can not be more than 50 Characters",
        }),
    price: z
        .number({ message: "This field is required" })
        .nonnegative({ message: "Please Enter a valid number" }),
    category: z.string().min(1, { message: "This field is required" }),
});

type CrudFormData = z.infer<typeof schema>;

interface FormData {
    onSubmit: (data: CrudFormData) => void;
}

// component
const CrudForm = ({ onSubmit }: FormData) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CrudFormData>({ resolver: zodResolver(schema) });

    return (
        <>
            <div className="head-text">
                Product Management App <b>(Phones)</b>
            </div>
            <form
                onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    reset();
                })}
                className="Form"
            >
                <div className="input-con">
                    <label htmlFor="product" className="input-text">
                        Product
                    </label>
                    <input
                        {...register("product")}
                        type="text"
                        id="product"
                        className="input-field"
                        placeholder="Enter A Product Name"
                    />
                    <div className={errors.product && "errorMsg"}>
                        {errors.product?.message}
                    </div>
                </div>

                <div className="input-con">
                    <label htmlFor="Price" className="input-text">
                        Price
                    </label>
                    <input
                        {...register("price", { valueAsNumber: true })}
                        type="number"
                        id="Price"
                        className="input-field"
                        placeholder="Enter A Product Price"
                    />
                    <div className={errors.price && "errorMsg"}>
                        {errors.price?.message}
                    </div>
                </div>

                <div className="input-con">
                    <label htmlFor="Category" className="input-text">
                        Category
                    </label>
                    <select
                        {...register("category")}
                        id="Category"
                        className="select-input"
                    >
                        <option value=""></option>
                        {Categorys.map((Category) => (
                            <option key={Category} value={Category}>
                                {Category}
                            </option>
                        ))}
                    </select>
                    <div className={errors.category && "errorMsg"}>
                        {errors.category?.message}
                    </div>
                </div>

                <button className="SubmitBtn">Submit</button>
            </form>
        </>
    );
};

export default CrudForm;
