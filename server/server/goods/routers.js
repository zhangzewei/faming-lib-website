import * as controller from './controller';
import Joi from 'joi';
import { empty } from 'rxjs/Observer';

export default [
  {
    path: '/good',
    method: 'POST',
    config: {
      handler: controller.addGood,
      tags: ['api'],
      description: '新增商品',
      validate: {
        payload: {
          name: Joi.string().required(),
          // tag为商品类型，作为可能会作为过滤器
          tag: Joi.string().required(),
          imgUrl: Joi.string().required(),
          price: Joi.string().required(),
          desc: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/goods',
    method: 'POST',
    config: {
      handler: controller.getAllGoods,
      description: '获取所有商品，可以带参数作为filter',
      tags: ['api'],
      validate: {
        payload: {
          filter: Joi.object(),
        }
      }
    },
  },
  {
    path: '/good/{goodId}',
    method: 'GET',
    config: {
      handler: controller.getGoodDetails,
      description: '通过商品ID获取商品详细信息',
      tags: ['api'],
      validate: {
        params: {
          goodId : Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/goods',
    method: 'DELETE',
    config: {
      handler: controller.deleteGoods,
      description: '通过传入的Ids删除对应的商品',
      tags: ['api'],
      validate: {
        payload: {
          goodIds: Joi.array().required(),
        }
      }
    },
  },
  {
    path: '/good',
    method: 'PUT',
    config: {
      handler: controller.updateGood,
      description: '更新某个商品',
      tags: ['api'],
      validate: {
        payload: {
          goodId: Joi.string().required(),
          name: Joi.string().required(),
          tag: Joi.string().required(),
          imgUrl: Joi.string().required(),
          price: Joi.string().required(),
          desc: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/good/sellNum',
    method: 'PUT',
    config: {
      handler: controller.addSellNum,
      description: '更新某个商品的销量',
      tags: ['api'],
      validate: {
        payload: {
          goodId: Joi.string().required(),
          sellNum: Joi.number().required(),
        }
      }
    },
  }
]