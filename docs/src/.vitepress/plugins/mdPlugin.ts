import tablePlugin from './tablePlugin'
import MarkdownIt from 'markdown-it'

const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

export const mdPlugin = (md: MarkdownIt) => {
  md.use(tablePlugin)
}
