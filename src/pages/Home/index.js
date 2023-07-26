import React from "react";
import { MainContainer } from "../../styles";
import { ProductsContainer, ItemContainer } from "./styled";
import SearchBar from "../../components/Header";

export default function Home() {
    return (
        <MainContainer>
            <SearchBar />
            <ProductsContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
                <ItemContainer>
                    <p>Product</p>
                    <p>Price</p>
                </ItemContainer>
            </ProductsContainer>
        </MainContainer>
    )
}