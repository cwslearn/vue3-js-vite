import { get } from './http'const outpai1 = '/uomg/'// 获取情话function getQinghua() {  return get(outpai1 + 'rand.qinghua?format=json')}// 获取手机壁纸function getPhoneImg() {  // let sort = ['美女', '二次元']  return get(outpai1 + 'rand.img2?format=json')}// 获取电脑壁纸function getPCImg() {  // let sort = ['美女', '汽车', '二次元', '背景', '动漫']  return get(outpai1 + 'rand.img1?format=json')}export { getQinghua, getPhoneImg, getPCImg }