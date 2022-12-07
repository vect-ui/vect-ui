module.exports = {
  types: [
    { value: '✨feat', name: '✨feat:    新的内容' },
    { value: '🐛fix', name: '🐛fix:    修复一个Bug' },
    { value: '🦋daily', name: '🦋daily:    日常变更' },
    { value: '📝docs', name: '📝docs:    变更的只有文档' },
    { value: '💄style', name: '💄style:    空格, 分号等格式修复' },
    { value: '♻️refactor', name: '♻️ refactor:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️perf', name: '⚡️perf:    提升性能' },
    { value: '✅test', name: '✅test:    添加一个测试' },
    { value: '🔧chore', name: '🔧chore:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪revert', name: '⏪revert:    代码回退' }
  ],
  messages: {
    type: '选择一种你的提交类型:',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    breaking: '非兼容性说明 (可选):',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  skipEmptyScopes: true
}
