//Styled-Components
import { Container, Content, OrderHeader, Table } from './styles';
import { TouchableOpacity } from 'react-native';

//Components
import { Text } from '../Text';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>

          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      )}
      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight='600'>Pedido</Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text weight='600' size={14} color='#D73035'>
              Cancelar Pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color='#666'>Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
}
