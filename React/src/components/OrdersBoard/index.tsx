//Styled-Components
import { Board, OrdersContainer } from './styles';

//Types
import { Order } from '../../types/Order';

//Components
import { OrderModal } from '../../components/OrderModal';

//Utils
import { api } from '../../utils/api';

//Hooks
import { useState } from 'react';

//Toasttify
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onRefreshOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onRefreshOrder,
  onChangeOrderStatus }: OrdersBoardProps) {

  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    const newStatus = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.patch(`/orders/${selectedOrder._id}`, { status: newStatus });

    toast.success(`O pedido da mesa ${selectedOrder.table} teve o status alterado com sucesso!`);
    onChangeOrderStatus(selectedOrder._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.delete(`/orders/${selectedOrder._id}`);

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado com sucesso!`);
    onRefreshOrder(selectedOrder._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
