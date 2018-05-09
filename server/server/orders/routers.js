import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/order',
    method: 'POST',
    config: {
      handler: controller.addOneOrder,
      tags: ['api'],
      description: '生成一个订单',
      validate: {
        payload: {
          ownerId: Joi.string().required(), // 谁的订单
          createDate: Joi.any().required(),
          goods: Joi.array().required(), // 订单包含的商品Ids
          addrs: Joi.string().required(),
          status: Joi.string().required().valid(['created', 'finished', 'canceled']),
        }
      }
    },
  },
  {
    path: '/order',
    method: 'PUT',
    config: {
      handler: controller.changeOrderStatus,
      tags: ['api'],
      description: '更改订单状态',
      validate: {
        payload: {
          orderId: Joi.string().required(),
          status: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/order/{id}',
    method: 'GET',
    config: {
      handler: controller.getOrderDetail,
      tags: ['api'],
      description: '获取一个订单的详情',
      validate: {
        params: {
          id: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/orders',
    method: 'POST',
    config: {
      handler: controller.getAllOrders,
      tags: ['api'],
      description: '获取当前用户的所有订单',
      validate: {
        payload: {
          filter: Joi.object().required(),
        }
      }
    },
  },
  {
    path: '/orders',
    method: 'DELETE',
    config: {
      handler: controller.deleteOrdersByIds,
      tags: ['api'],
      description: '删除订单，根据传入的ids',
      validate: {
        payload: {
          orders: Joi.array().required(),
        }
      }
    },
  }
]