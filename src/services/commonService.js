import { menuItems } from '../config/appConfig';

export const getLinkUrl = linkType => {
  const menuItem = menuItems.find(item => item.key === linkType);
  if (menuItem) return menuItem.link;
};
