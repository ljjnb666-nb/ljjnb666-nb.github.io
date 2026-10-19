// 探索页数据：研究实验、学习笔记、未来方向
// 加/改条目只改这里。kind: experiment=研究实验 / note=学习笔记 / future=未来方向
export interface ExploreItem {
  title: string;
  kind: 'experiment' | 'note' | 'future';
  description: string;
  date: string;
  /** sample=true 为占位示例，待替换为真实内容 */
  sample: boolean;
}

export const kindLabel = {
  experiment: '研究实验',
  note: '学习笔记',
  future: '未来方向',
} as const;

export const exploreItems: ExploreItem[] = [
  {
    title: '示例：RAG 检索链路的最小实现',
    kind: 'experiment',
    description:
      '占位：记录一次技术实验——问题、实现思路、关键代码片段、实验结论。正式内容待替换。',
    date: '2026-10-19',
    sample: true,
  },
  {
    title: '示例：AI Agent 学习路线笔记',
    kind: 'note',
    description:
      '占位：学习过程中的结构化笔记——学了什么、关键概念、还没搞懂的点。正式内容待替换。',
    date: '2026-10-18',
    sample: true,
  },
  {
    title: '示例：想做的下一个小产品',
    kind: 'future',
    description:
      '占位：未来想探索的方向——灵感来源、要验证的假设、第一步行动。正式内容待替换。',
    date: '2026-10-17',
    sample: true,
  },
];
