import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/menus/update',
    method: 'POST',
    config: {
      handler: controller.updateMenu,
      description: '更新菜单',
      tags: ['api'],
      validate: {
        payload: {
          id: Joi.string().required(),
          menus : Joi.object().required(),
        }
      }
    },
  },
  {
    path: '/menus/',
    method: 'GET',
    config: {
      handler: controller.getMenus,
      description: '获取菜单',
      tags: ['api'],
    },
  }
]