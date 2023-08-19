import { post, get } from './http'import { urlMap } from './mapping'function sendAdd(params) {  return post(urlMap('sendAdd'), params)}function sendGet(params) {  return get(urlMap('sendGet'), params)}function sendUpload(params) {  return post(urlMap('sendUpload'), params)}function articleBySelf(params) {  return get(urlMap('articleBySelf'), params)}function articleSort(params) {  return post(urlMap('articleSort'), params)}export { sendAdd, sendGet, sendUpload, articleBySelf, articleSort }