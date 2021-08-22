module.exports = {
  '/guide': [
    {
      text: '指南',
      children: [
        '/guide.md',
      ],
    }
  ],
  '/FE/': [
    {
      text: '前端工程化',
      children: [
        {
          text: '自动化部署',
          link: '/FE/自动化部署.md'
        }
      ],
    },
    {
      text: '微前端',
      children: [
        {
          text: '微前端-icestark初体验',
          link: '微前端icestark初体验.md'
        }
      ],
    },
    {
      text: '前端杂谈',
      children: [
        {
          text: '前端如何给图片添加水印?',
          link: '/FE/前端水印.md'
        }
      ]
    }
  ],
  '/LEETCODE/': [
    {
      text: '链表',
      children: [
        {
          text: '141-环形链表',
          link: '/LEETCODE/LINKEDLIST/141-环形链表.md'
        },
      ]
    },
    {
      text: '堆栈',
      children: [
        {
          text: '703-数据流中的第K大元素',
          link: '/LEETCODE/STACK/703-数据流中的第K大元素.md'
        },
      ]
    },
    {
      text: '哈希表',
      children: [
        {
          text: '1-双数之和',
          link: '/LEETCODE/HASH/1-双数之和.md'
        },
        {
          text: '15-三数之和',
          link: '/LEETCODE/HASH/15-三数之和.md'
        },
        {
          text: '242-有效的字母异位词',
          link: '/LEETCODE/HASH/242-有效的字母异位词.md'
        },
      ]
    },
    {
      text: '树',
      children: [
        {
          text: '98-验证二叉搜索树',
          link: '/LEETCODE/TREE/98-验证二叉搜索树.md'
        },
      ]
    },
  ]
}
