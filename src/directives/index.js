// export { default as tooltip } from './tooltip'// 自定义聚焦import selfFocus from './selfFocus'// 字体颜色import selfColor from './selfColor'export const initDirective = app => {  app.directive('self-focus', selfFocus)  app.directive('self-color', selfColor)}