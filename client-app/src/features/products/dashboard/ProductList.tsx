import React from "react";
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import {Product} from '../../../app/models/product';

interface Props {
    products: Product[];
    selectProduct: (id: string) => void;
    deleteProduct: (id: string) => void;
}

export default function ProductList({products, selectProduct, deleteProduct}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {products.map(product => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{product.title}</Item.Header>
                            <Item.Meta>{product.date}</Item.Meta>
                            <Item.Description>
                                <div>{product.description}</div>
                                <div>{product.address}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectProduct(product.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteProduct(product.id)} floated='right' content='Delete' color='red' />
                                <label basic content={product.category} 
                            />
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}