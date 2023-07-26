import { instance } from "@/axios/config";


export const fetchProducts = () => async (dispatch: any) => {
    try {
        const data = await instance.get(`/carts`);
        dispatch({ type: "fetch", payload: data });
    } catch (error: any) {
    } finally {
    }
};

export const addProduct = (product: any) => async (dispatch: any) => {
    try {

        dispatch({ type: "add", payload: product.quantity = 1 });
    } catch (error: any) {
    } finally {
    }
};
export const removeProduct = (product: any) => async (dispatch: any) => {
    try {

        dispatch({ type: "delete", payload: product.id });
    } catch (error: any) {
    } finally {
    }
};
export const removeAllProduct = () => async (dispatch: any) => {
    try {
        dispatch({ type: "deleteAll" });
    } catch (error: any) {
    } finally {
    }
};
export const updateProduct = () => async (dispatch: any) => {
    try {

        dispatch({ type: "update", });
    } catch (error: any) {
    } finally {
    }
};