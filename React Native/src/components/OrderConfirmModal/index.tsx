//Styled-Components
import { Modal } from 'react-native';
import { Container, OkButton } from './styles';

//Components
import { Text } from '../Text';

//Images
import { CheckCircle } from '../Icons/CheckCircle';

interface OrderConfirmModalProp {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmModal({ visible, onOk }: OrderConfirmModalProp) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle />
        <Text size={20} weight='600' color='#fff' style={{ marginTop: 12 }}>
          Pedido Confirmado
        </Text>
        <Text color='#fff' opacity={0.9} style={{ marginTop: 4 }}>
          O pedido ja entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color='#D73035' weight='600'>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
