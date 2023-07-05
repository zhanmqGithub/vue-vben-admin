/**
 * 卡片项
 */
export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}
/**
 * 卡片列表
 */
export const growCardList: GrowCardItem[] = [
  {
    title: '访问数',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '月',
  },
  {
    title: '成交额',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '月',
  },
  {
    title: '下载数',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '周',
  },
  {
    title: '成交数',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '年',
  },
];

/**
 * tab页配置
 */
export interface TabItem {
  key: string;
  tab: string;
}

/**
 * tab页配置数据
 */
export const tabListTitle: TabItem[] = [
  {
    key: '01',
    tab: '流量趋势',
  },
  {
    key: '02',
    tab: '访问量',
  },
];
