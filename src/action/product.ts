import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        try {
            const data = await instance.get(`/products`);
            return data;
        } catch (error) {

        }
    }
);
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product) => {
        try {
            const data = await instance.post(`/products`, product);
            return data;
        } catch (error) {

        }
    }
);
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product: any) => {
        try {
            const data = await instance.patch(`/products/` + product.id, product);
            return data;
        } catch (error) {

        }
    }
);
export const removeProduct = createAsyncThunk(
    'product/fetchProducts',
    async (id) => {
        try {
            await instance.delete(`/products/${id}`);
            return id;
        } catch (error) {

        }
    }
);