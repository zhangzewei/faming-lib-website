import {
  getAllSubjects,
  updateOneInDB
} from '../utils/dbUtils';

export const updateMenu = request => updateOneInDB({ 
  index: 'menus',
  id: request.payload.id,
  doc: { menus: request.payload.menus }
})

export const getMenus = () => getAllSubjects(null, 'menus');