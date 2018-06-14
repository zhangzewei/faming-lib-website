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
          authority: Joi.string().required(),
          password: Joi.string().required(),
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
    path: '/user/delete/',
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
  {
    path: '/user/{id}',
    method: 'GET',
    config: {
      handler: controller.getUserById,
      tags: ['api'],
      description: '根据id获取用户',
      validate: {
        params: {
          id: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/user/update',
    method: 'POST',
    config: {
      handler: controller.updateUserById,
      tags: ['api'],
      description: '根据id上传',
      validate: {
        payload: {
          id: Joi.string().required(),
          name: Joi.string().required(),
          password: Joi.string().required()
        }
      }
    },
  }
]