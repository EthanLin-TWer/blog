# TASK-6 Support mermaid diagram as code

* [x] React-markdown somehow doesn't work with rehype/remark plugin with sync `unified()`
  * [x] yeah, remark-mermaid basically does nothing
  * [x] and rehype-mermaid is not working well with unified/rehype - it doesn't seem it's output-ing a hast that can be rehype-stringify-ed.
  * [x] So I ended up writing my own rehype-mermaid plugin to transfer the final hast
    * solution 1: ~~react-markdown only supports `runSync()` where `mermaid.render` runs async to output a svg tag~~
    * solution 2: ~~relying on mermaid to automatically process `pre.mermaid` - notable lagging~~
    * solution 3: generated hast is not being properly picked up and rendered as HTML by `ReactMarkdown.components` - after studying the internal it works: rehype-mermaid needs to update the parent node which contains mermaid, not only the child node
* [x] fuck, the solution stops working all of a sudden - maybe id generation, or delayed loading of mermaid causing this
  * [x] seems loading of image blocks the rendering of mermaid - trigger `mermaid.run()` explicitly
* [ ] solution refactor:
  * introducing mermaid at runtime causes a much larger sized bundle 188K -> 688K gzipped, insanely crazy
    * [x] do not include elk and crypto in webpack - it works!
    * fork mermaid@8 and update code to disable auto sorting
    * or fork mermaid@10 and fix the tree shaking
  * [x] ~~downgrade to mermaid@8~~ - bundle size way smaller, but pie chart doesn't work properly
  * [x] avoid the need for updating rehype-mermaid-plugin and `MermaidRenderer` in two places
    * [x] done by replacing the whole `pre` block in `ReactMarkdownComponent` instead of just handling `code`
    * [x] then the plugin becomes unnecessary
  * [x] add tests to rehype-mermaid-plugin if this turns out to be the final solution - no, it's removed
* [x] get a light-weighted JavaScript version of hash() - copied one from StackOverflow

## Others

Is there any other tools like mermaid that supports a wider range of diagrams? Currently, bar charts are not supported

> With mdast and hast, ideally we can develop our own: 1) syntax; 2) mdast parser (remark plugin); 3) hast renderer (rehype plugin);
