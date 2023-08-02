
import Skeleton from "react-loading-skeleton";
import { Button } from "..";


import { useAddProductMutation, useGetProductsQuery, useRemoveProductMutation, useUpdateProductMutation } from "@/api/product";


const ProductList = () => {

    const { data: products, isLoading, error } = useGetProductsQuery()
    const [addProduct] = useAddProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const [removeProduct] = useRemoveProductMutation()

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) {
        if ('data' in error && 'status' in error) {
            return (
                <div>{error.status}-{JSON.stringify(error.data)}</div>
            )
        }
    };
    return (
        <div>
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <Button
                            type="primary"
                            onClick={() => { }}
                        >
                            Add to cart
                        </Button>
                    </div>
                );
            })}

            <Button type="primary" onClick={() => addProduct({ name: "Product C", price: 200 })}>
                Add Product
            </Button>

            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product C updated ", price: 200, id: 3 })}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => removeProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;