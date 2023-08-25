/*
 * @Author: 一尾流莺
 * @Description:判断
 * @Date: 2021-09-10 11:46:49
 * @LastEditTime: 2023-08-25 15:19:59
 * @FilePath: \warbler-js\src\date\judge\index.js
 */

// 判断指定日期是不是今天
import isToday from './isToday';

// 判断指定日期是不是n天前
import isYesterday from './isYesterday';

// 判断指定日期是不是n天后
import isTomorrow from './isTomorrow';

// 判断是否达到指定时间
import isScheduled from './isScheduled';

export { isToday, isYesterday, isTomorrow, isScheduled };