/*
 * @Author: 一尾流莺
 * @Description:获取 sidebar
 * @Date: 2023-03-28 16:27:35
 * @LastEditTime: 2023-03-28 18:22:45
 * @FilePath: \warbler-js\docs\.vitepress\sidebar\index.ts
 */

import path from 'path';
import fs from 'fs';

const typeMap = {
  array: '数组',
  boolean: '布尔值',
  date: '日期',
  function: '函数',
  methods: '常用方法',
  number: '数字',
  object: '对象',
  reg: '正则',
  string: '字符',
};

class Sidebar {
  static sidebar: Sidebar = new Sidebar();

  // 获取 guide 所在目录
  getGuidePath() {
    return path.resolve(__dirname, '../', '../', 'guide');
  }

  // 获取 guide 目录下所有的类型
  getGuideTypes() {
    // 获取 guide 所在目录
    const guideDirPath = this.getGuidePath();
    // 获取 guide 目录下所有的类型
    const guideDirTypes = fs.readdirSync(guideDirPath);
    return guideDirTypes;
  }

  // 根据 guideType 获取该类型下的所有文档名称
  getFilesByGuideType(guideType: string) {
    // 获取 guide 所在目录
    const guideDirPath = this.getGuidePath();
    // 获取 guideType 所在目录
    const guideTypePath = path.resolve(guideDirPath, guideType);
    // 获取 guideTypePath 下的所有 md 文件
    const guideTypeFiles = fs.readdirSync(guideTypePath);
    // 去掉文件的后缀
    const fileNames = guideTypeFiles.map((fileName) => {
      const fullName = fileName.split('.')[0];
      return {
        link: `/guide/${guideType}/${fileName}`,
        text: fullName,
      };
    });
    // 返回该类型下的文档名称
    return fileNames;
  }

  // 获取所有的 guideType 以及对应的 guideType 的详情
  getAllGuideInfo() {
    // 获取 guide 目录下所有的类型
    const guideDirTypes = this.getGuideTypes();
    // 遍历获取所有的 guideType 以及对应的 guideType 的详情
    const allGuideInfo = guideDirTypes.map((guideType) => {
      // 获取 guideType 下所有的文档名称
      const files = this.getFilesByGuideType(guideType);
      return {
        // 文档类型
        guideType,
        // 文档
        files,
        // 文档数量
        quantity: files.length,
        // 文档中文名称
        guideName: typeMap[guideType],
      };
    });
    return allGuideInfo;
  }
  // 动态计算 sidebar
  getSidebar() {
    // 获取所有的 guideType 以及对应的 guideType 的详情
    const allGuideInfo = this.getAllGuideInfo();
    // 形成 sidebar 要求的格式
    const sidebar = allGuideInfo.map((info) => {
      // 形成 sidebar-item 要求的格式
      const items = info.files.map((item) => {
        return {
          text: item.text,
          link: item.link,
        };
      });
      return {
        text: `${info.guideName}(${info.quantity})`,
        collapsed: true,
        items,
      };
    });
    return sidebar;
  }
}
export default Sidebar.sidebar;
