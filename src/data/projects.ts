// 作品集数据：加/改项目只改这里
export interface Project {
  name: string;
  tagline: string;
  tech: string[];
  link?: string;
  /** live=已上线真实项目；placeholder=占位示例，待替换 */
  status: 'live' | 'wip' | 'placeholder';
  note?: string;
}

export const projects: Project[] = [
  {
    name: 'BareRecipe',
    tagline: 'Chrome 扩展：一键从任意 cooking 网站提取菜谱正文，无广告、无"小作文"',
    tech: ['Chrome MV3', 'TypeScript'],
    link: 'https://chromewebstore.google.com/detail/ichdblphkbpbajabhjcdpjjjabklcjlc',
    status: 'live',
    note: '$20 一次性买断',
  },
  {
    name: '示例项目 A',
    tagline: '占位：替换成你自己的项目一句话介绍',
    tech: ['占位'],
    status: 'placeholder',
  },
  {
    name: '示例项目 B',
    tagline: '占位：替换成你自己的项目一句话介绍',
    tech: ['占位'],
    status: 'placeholder',
  },
];
