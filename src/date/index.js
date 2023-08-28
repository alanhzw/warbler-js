/*
 * @Author: 一尾流莺
 * @Description:操作日期
 * @Date: 2021-09-10 11:46:49
 * @LastEditTime: 2023-08-25 15:21:27
 * @FilePath: \warbler-js\src\date\index.js
 */

// 判断指定日期是不是今天
import isToday from './isToday';

// 判断指定日期是不是n天前
import isYesterday from './isYesterday';

// 判断指定日期是不是n天后
import isTomorrow from './isTomorrow';

// 判断是否达到指定时间
import isScheduled from './isScheduled';

// 获取指定日期是所在年份的第几天
import dayOfYear from './dayOfYear';

// 获取两个日期之间以天为单位的差值
import getDayDiff from './getDayDiff';

export { isToday, isYesterday, isTomorrow, isScheduled, dayOfYear, getDayDiff };
