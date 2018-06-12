import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/user/add',
    method: 'POST',
    config: {
      handler: controller.addUser,
      description: '新增用户',
      tags: ['api'],
      validate: {
        payload: {
          name : Joi.string().required(),
          type : Joi.string().required(),
          authority: Joi.string().required(),
          password: Joi.string().required(),
          tel: Joi.string(),
        }
      }
    },
  },
  {
    path: '/user/list/{name}',
    method: 'GET',
    config: {
      handler: controller.getUserByName,
      tags: ['api'],
      description: '根据名字搜索人员',
      validate: {
        params: {
          name: Joi.string(),
        }
      }
    },
  },
  {
    path: '/user/delete/{id}',
    method: 'POST',
    config: {
      handler: controller.deleteUserById,
      tags: ['api'],
      description: '删除用户',
      validate: {
        payload: {
          id: Joi.string(),
        }
      }
    },
  },
]