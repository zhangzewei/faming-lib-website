import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/news/add',
    method: 'POST',
    config: {
      handler: controller.addNews,
      description: '新增新闻',
      tags: ['api'],
      validate: {
        payload: {
          creator : Joi.string().required(),
          type : Joi.string().required(),
          title: Joi.string().required(),
          msg : Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/news/list/{title}',
    method: 'GET',
    config: {
      handler: controller.getNewByTitle,
      tags: ['api'],
      description: '根据标题搜索新闻',
      validate: {
        params: {
          title: Joi.string(),
        }
      }
    },
  },
  {
    path: '/news/{id}',
    method: 'GET',
    config: {
      handler: controller.getNewsById,
      tags: ['api'],
      description: '根据id获取新闻',
      validate: {
        params: {
          id: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/news/delete/',
    method: 'POST',
    config: {
      handler: controller.deleteNewsById,
      tags: ['api'],
      description: '根据id删除新闻',
      validate: {
        payload: {
          id: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/news/update/',
    method: 'POST',
    config: {
      handler: controller.updateNewsById,
      tags: ['api'],
      description: '根据id更新新闻',
      validate: {
        payload: {
          id: Joi.string().required(),
          creator : Joi.string().required(),
          type : Joi.string().required(),
          title: Joi.string().required(),
          msg : Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/news/count',
    method: 'POST',
    config: {
      handler: controller.updateNewsById,
      tags: ['api'],
      description: '根据id上传观看次数',
      validate: {
        payload: {
          id: Joi.string().required(),
          visitTimes : Joi.number().required()
        }
      }
    },
  },
  {
    path: '/news/image/upload',
    method: 'POST',
    config: {
      handler: controller.uploadImageByNews,
      tags: ['api'],
      description: '上传图片在新闻编辑中',
      validate: {
        payload: {
          file: Joi.any().required(),
        }
      }
    }
  },
  {
    path: '/news/file/upload',
    method: 'POST',
    config: {
      handler: controller.uploadFileByNews,
      tags: ['api'],
      description: '上传文件在新闻编辑中',
      payload: { // hapi可以解析上传的form-data
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      },
      validate: {
        payload: {
          file: Joi.any().required(),
        }
      }
    }
  },
  {
    path: '/news/listByType/{type}',
    method: 'GET',
    config: {
      handler: controller.getNewByType,
      tags: ['api'],
      description: '根据类型搜索新闻',
      validate: {
        params: {
          type: Joi.string().required(),
        }
      }
    },
  },
]