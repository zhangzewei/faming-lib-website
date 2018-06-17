import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/file/add',
    method: 'POST',
    config: {
      handler: controller.addFile,
      description: '新增文件',
      tags: ['api'],
      validate: {
        payload: {
          updater : Joi.string().required(),
          type : Joi.string().required(),
          title: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/file/list/{title}',
    method: 'GET',
    config: {
      handler: controller.getFileByTitle,
      tags: ['api'],
      description: '根据标题搜索文件',
      validate: {
        params: {
          title: Joi.string(),
        }
      }
    },
  },
  {
    path: '/file/delete/',
    method: 'POST',
    config: {
      handler: controller.deleteFileById,
      tags: ['api'],
      description: '删除文件',
      validate: {
        payload: {
          id: Joi.string(),
        }
      }
    },
  },
]