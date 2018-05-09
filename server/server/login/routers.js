import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/user/regist',
    method: 'POST',
    config: {
      handler: controller.register,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string().required(),
          password : Joi.string().required(),
          // 身份类型，卖家和买家，buyer代表买家，seller代表卖家，但是卖家账号可以登录商城和管理界面
          type: Joi.string().valid(['buyer', 'seller']).required(),
          tel : Joi.string(),
          email : Joi.string(),
          gender : Joi.string(),
        }
      }
    },
  },
  {
    path: '/user/login',
    method: 'POST',
    config: {
      handler: controller.logIn,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
          password : Joi.string()
                  .required(),
        }
      }
    },
  },
  {
    path: '/user',
    method: 'DELETE',
    config: {
      handler: controller.deleteUser,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
        }
      }
    },
  },
  {
    path: '/user/changePassword',
    method: 'POST',
    config: {
      handler: controller.changePassword,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
          password : Joi.string()
                  .required(),
        }
      }
    },
  }
]