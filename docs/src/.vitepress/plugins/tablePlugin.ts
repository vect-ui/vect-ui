import type MarkdownIt from 'markdown-it'

export default (md: MarkdownIt): void => {
  md.renderer.rules.table_open = () => '<div class="vp-table__wrapper"><table>'
  md.renderer.rules.table_close = () => '</table></div>'
}
