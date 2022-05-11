import React from 'react';
import { Button, Card, Image} from 'semantic-ui-react';
import { Product } from '../../../app/models/product';

interface Props {
    product: Product;
    cancelSelectProduct: () => void;
    openForm: (id: string) => void;
}

export default function ProductDetails({product, cancelSelectProduct, openForm}: Props) {
    return (
        <Card>
            <Image src={`../publish/assets/categoryImages${propduct.category}.jpg`} />
            <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>
                <span>{product.date}</span>
            </Card.Meta>
            <Card.Description>
                {product.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(product.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectProduct} basic color='gray' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}