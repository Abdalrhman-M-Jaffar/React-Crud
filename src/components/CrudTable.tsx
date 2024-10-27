import "../styles/CrudTable.css";

interface CrudTableInf {
    id: number;
    product: string;
    price: number;
    category: string;
}

interface CurdTableArr {
    CrudArr: CrudTableInf[];
    onDelete: (id: number) => void;
}

const CrudTable = ({ CrudArr, onDelete }: CurdTableArr) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Delete</td>
                    </tr>
                </thead>

                <tbody>
                    {CrudArr.map((arr) => (
                        <tr key={arr.id + 1}>
                            <td>{arr.product}</td>
                            <td>${arr.price}</td>
                            <td>{arr.category}</td>
                            <td>
                                <button onClick={() => onDelete(arr.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>
                            $
                            {CrudArr.reduce(
                                (acc, arr) => arr.price + acc,
                                0
                            ).toFixed(2)}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default CrudTable;
