import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/carrousel/add',
    method: 'POST',
    config: {
      handler: controller.addImg,
      description: '新增图片',
      tags: ['api'],
      validate: {
        payload: {
          img: Joi.string().required(),
          articleTitle: Joi.string().required(),
          articleLinkId: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/carrousel/list/{articleTitle}',
    method: 'GET',
    config: {
      handler: controller.getImgByName,
      tags: ['api'],
      description: '根据名字搜索图片',
      validate: {
        params: {
          articleTitle: Joi.string(),
        }
      }
    },
  },
  {
    path: '/carrousel/delete/',
    method: 'POST',
    config: {
      handler: controller.deleteImgById,
      tags: ['api'],
      description: '删除图片',
      validate: {
        payload: {
          id: Joi.string(),
        }
      }
    },
  },
  {
    path: '/carousel/littleList',
    method: 'GET',
    config: {
      handler: controller.getCarsoul,
      description: '获取所有小轮播图',
      tags: ['api'],
    },
  },
  {
    path: '/carousel/little',
    method: 'POST',
    config: {
      handler: controller.addCarousel,
      description: '新增小轮播图配置',
      tags: ['api'],
      validate: {
        payload: {
          img: Joi.string().required(),
        }
      }
    },
  },
  {
    path: '/carousel/delete',
    method: 'POST',
    config: {
      handler: controller.deleteCarousel,
      description: '删除小轮播图',
      tags: ['api'],
      validate: {
        payload: {
          id: Joi.string().required(),
        }
      }
    },
  },
]