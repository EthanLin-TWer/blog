// @ts-nocheck
function traverseTreeAndReplaceNode(node, isNodeMatchingCondition, replacer) {
  if (isNodeMatchingCondition(node)) {
    return replacer?.(node) || node
  }

  if (node.children?.length > 0) {
    const children = node.children.map((each) => traverseTreeAndReplaceNode(each, isNodeMatchingCondition, replacer))
    return { ...node, children }
  }

  return node
}

function hash(content: string): string {
  // less serious but effective version, same hash will be generated for same content (indicates same length)
  return (content.length * 4096 ^ 3).toFixed(12).toString()
}

export default function rehypeMermaid() {
  return function (tree: any) {
    return traverseTreeAndReplaceNode(
      tree,
      node => {
        if (node.children?.length === 0) {
          return false
        }

        if (node.tagName !== 'pre' || node.children[0].tagName !== 'code') {
          return false
        }

        return node.children[0].properties?.className?.[0] === 'language-mermaid';
      },
      // todo: this might not work well if inside ```mermaid``` other things are nested, but less likely though
      (node) => ({
        ...node,
        tagName: 'mermaid',
        properties: { className: ['mermaid'], id: hash(node.children[0].children[0].value) },
        children: node.children[0].children,
      })
    )
  }
}
