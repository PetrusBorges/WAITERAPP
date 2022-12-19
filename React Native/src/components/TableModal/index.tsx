//Styled-Components
import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { Modal, TouchableOpacity, Platform } from 'react-native';

//Images
import { Close } from '../Icons/Close';

//Components
import { Text } from '../Text';
import { Button } from '../Button';

//Hooks
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {

  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >

      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close  color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              value={table}
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={value => setTable(value)}
            />

            <Button
              onPress={handleSave}
              disabled={table.length === 0}
            >
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
