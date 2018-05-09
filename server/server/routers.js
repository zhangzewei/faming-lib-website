import LoginRouters from './login/routers';
import GoodsRouters from './goods/routers';
import OrdersRouters from './orders/routers';

export default [
  ...LoginRouters,
  ...GoodsRouters,
  ...OrdersRouters
];