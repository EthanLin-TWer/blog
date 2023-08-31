# TASK-6 Support mermaid diagram as code

* [x] React-markdown somehow doesn't work with rehype/remark plugin with sync `unified()`
  * [x] yeah, remark-mermaid basically does nothing
  * [x] and rehype-mermaid is not working well with unified/rehype - it doesn't seem it's output-ing a hast that can be rehype-stringify-ed.
  * [x] So I ended up writing my own rehype-mermaid plugin to transfer the final hast
    * solution 1: ~~react-markdown only supports `runSync()` where `mermaid.render` runs async to output a svg tag~~
    * solution 2: ~~relying on mermaid to automatically process `pre.mermaid` - notable lagging~~
    * solution 3: generated hast is not being properly picked up and rendered as HTML by `ReactMarkdown.components` - after studying the internal it works: rehype-mermaid needs to update the parent node which contains mermaid, not only the child node
* fuck, the solution stops working all of a sudden - maybe id generation, or delayed loading of mermaid causing this
* [ ] solution refactor:
  * avoid the need for updating rehype-mermaid-plugin and `MermaidRenderer` in two places
  * introducing mermaid at runtime causes a much larger sized bundle 188K -> 688K gzipped, insanely crazy
* [ ] get a light-weighted JavaScript version of hash() - as long as it outputs same result for same content instantly
* [ ] add tests to rehype-mermaid-plugin if this turns out to be the final solution

## Others

Is there any other tools like mermaid that supports a wider range of diagrams? Currently, bar charts are not supported

> With mdast and hast, ideally we can develop our own: 1) syntax; 2) mdast parser (remark plugin); 3) hast renderer (rehype plugin);
