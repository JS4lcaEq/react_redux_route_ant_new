import { DatePicker } from 'antd';
import { Tree } from 'antd';

export default function Ant() {
    const dig = (path = '0', level = 3) => {
        const list = [];
        for (let i = 0; i < 10; i += 1) {
          const key = `${path}-${i}`;
          const treeNode = {
            title: key,
            key,
          };
          if (level > 0) {
            treeNode.children = dig(key, level - 1);
          }
          list.push(treeNode);
        }
        return list;
      };
      const treeData = dig();

    return (
        <>
            <h2>Ant</h2>
            <div>
                <DatePicker />
            </div>
            <div>
            <Tree treeData={treeData} height={233} defaultExpandAll className="tree-box" />
            </div>
        </>

    );
}