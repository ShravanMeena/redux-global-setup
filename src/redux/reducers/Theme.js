import {
  CHANGE_LOCALE,
  HEADER_NAV_COLOR_CHANGE,
  HIDE_APP_LAYOUT,
  NAV_TYPE_CHANGE,
  SIDE_NAV_STYLE_CHANGE,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_MOBILE_NAV,
  TOP_NAV_COLOR_CHANGE,
} from '../action-types';
import ThemeConfig from '../../configs/ThemeConfig';

const initTheme = { ...ThemeConfig };

const theme = (state = initTheme, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.navCollapsed,
      };
    case SIDE_NAV_STYLE_CHANGE:
      return {
        ...state,
        sideNavTheme: action.sideNavTheme,
      };
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    case NAV_TYPE_CHANGE:
      return {
        ...state,
        navType: action.navType,
      };
    case TOP_NAV_COLOR_CHANGE:
      return {
        ...state,
        topNavColor: action.topNavColor,
      };
    case HEADER_NAV_COLOR_CHANGE:
      return {
        ...state,
        headerNavColor: action.headerNavColor,
      };
    case TOGGLE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: action.mobileNav,
      };
    case HIDE_APP_LAYOUT:
      return {
        ...state,
        isAppLayoutHidden: true,
      };
    default:
      return state;
  }
};

export default theme;
