import path from 'path';
import fs from 'fs';

const typeMap = {
  array: '简单数组',
  array_object: '对象数组',
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

  // 动态计算 sidebar
  getSidebar() {
    // 获取 guide 所在目录
    const guideDirPath = this.getGuidePath();
    // 自动根据目录生成树形结构
    const sidebar = generateTree(guideDirPath);
    return sidebar;
  }
}

// 生成侧边栏 Tree 结构
function generateTree(directory) {
  // 定义空的树
  const tree: any[] = [];
  // 读取目录下的文件
  const files = fs.readdirSync(directory);

  // 遍历文件
  files.forEach((file) => {
    // 获取文件的完整路径
    const filePath = path.join(directory, file);
    // 获取文件的状态信息
    const stats = fs.statSync(filePath);
    // 判断文件是否是一个目录
    if (stats.isDirectory()) {
      // 如果是一个目录，则递归遍历并生成子树
      const subTree = generateTree(filePath);
      // 获取当前目录下的子文件的数量
      const filesTotal = getTotalFiles(filePath);

      tree.push({
        text: `${typeMap[file]}(${filesTotal})`,
        collapsed: true,
        items: subTree,
      });
    } else {
      // 去掉文件的后缀
      const fileName = file.split('.')[0];
      const link = `/guide${filePath.split('guide')[1].replaceAll('\\', '/')}`;
      // console.log(`- [${fileName}](${link})`);
      // 如果是一个文件，则直接添加到当前层级的树中
      tree.push({
        text: fileName,
        link: link,
      });
    }
  });

  return tree;
}

// 获取指定目录下所有子目录中的文件数量总和
function getTotalFiles(directory) {
  // 获取指定目录下的文件数量,不包含子目录
  const items = fs.readdirSync(directory);
  // 初始化总数为 0
  let total = 0;
  // 遍历子目录
  items.forEach((item) => {
    // 拼接子目录路径
    const filePath = path.join(directory, item);
    // 获取子目录的状态
    const stats = fs.statSync(filePath);
    // 判断子目录是否是一个文件
    if (stats.isFile()) {
      // 如果是文件 总数加 1
      total += 1;
    }
    // 如果是一个目录 则递归遍历
    else if (stats.isDirectory()) {
      // 递归遍历
      const subTotal = getTotalFiles(filePath);
      // 总数累加
      total += subTotal;
    }
  });
  // 返回总数
  return total;
}

export default Sidebar.sidebar;
