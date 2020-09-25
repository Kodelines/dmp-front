import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: "Fira Sans", "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  
  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none;
    overflow-x: hidden;
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: solid 4px #ff6d7f;
  }

  /* .ant-menu-item .anticon, .ant-menu-submenu-title .anticon {
    position: relative;
    top: -3px;
  } */

  .anticon {
    position: relative;
    top: -3px;
  }

  .ant-dropdown-menu {
    padding: 10px 10px;
  }

  .ant-form-item .anticon {
    position: relative;
    top: -1px;
  }

  .ant-input-prefix {
    margin-right: 8px;
  }

  .ant-modal-title {
    font-size: 1.2rem;
  }

  .ant-modal-close-x {
    font-size: 18px;
  }

  .ant-form-item-control-input .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: auto;
    padding: 8px 11px;
  }

  .ant-list-vertical .ant-list-item {
    margin-bottom: 20px;
  }

  .ant-list-split .ant-list-item {
    border-bottom: 1px solid #ddd;
  }

  .d-block {
    display: block;
    width: 100%;
  }

  .mt-4 {
    margin-top: 40px;
  }

  .ant-timeline-item-content {
    top: -7px;
  }
`;
