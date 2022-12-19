//FlatList
import { FlatList } from 'react-native';

//Styled-Components
import { ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCardButton,
} from './styles';

//Components
import { Text } from '../Text';
import { ProductModal } from '../ProductModal';

//Utils
import { formatCurrency } from '../../utils/formatCurrency';

//Images
import { PlusCircle } from '../Icons/PlusCircle';

//Hooks
import { useState } from 'react';

//Types
import { Product } from '../../types/Product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleProductModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (

          <ProductContainer onPress={() => handleProductModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
