import { create } from "domain";
import React, {ChangeEvent, useState} from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Product } from '../../../app/models/product';

interface Props {
    product: Product | undefined;
    closeForm: () => void;
    createOrEdit: (product: Product) => void;
}

export default function ProductForm({product: selectedProduct, closeForm, createOrEdit}: Props) {

    const initialState = selectedProduct ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        address: '',
        count: 0,
    }

    const [product, setProduct] = useState(initialState);

    function handleSubmit() {
        console.log(product);
        createOrEdit(product);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder="Title" value={product.title} name='title' onChange={handleInputChange}/>
                <Form.Input placeholder="Description" value={product.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder="Category" value={product.category} name='category' onChange={handleInputChange}/>
                <Form.Input placeholder="Count" value={product.count} name='count' onChange={handleInputChange}/>
                <Form.Input placeholder="Date" value={product.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder="Address" value={product.address} name='address' onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}