import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Product } from '../../../app/models/product';
import ProductDetails from '../details/ProductDetails';
import ProductForm from '../form/ProductForm';
import ProductList from './ProductList';

interface Props {
    products: Product[];
    selectedProduct: Product | undefined;
    selectProduct: (id: string) => void;
    cancelSelectProduct: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (product: Product) => void;
    deleteProduct: (id: string) => void;
}

export default function ProductDashboard({products, selectedProduct, deleteProduct, 
    selectProduct, cancelSelectProduct, editMode, openForm, closeForm, createOrEdit}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ProductList products={products} 
                    selectProduct={selectProduct}
                    deleteProduct={deleteProduct}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedProduct && !editMode &&
                <ProductDetails 
                    product={selectedProduct} 
                    cancelSelectActivity={cancelSelectProduct}
                    openForm={openForm}
                />}
                {editMode &&
                <ProductForm closeForm={closeForm} product={selectedProduct} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}