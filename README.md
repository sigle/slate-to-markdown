# @sigle/slate-to-markdown

This package converts a Sigle story Slate 0.47 JSON representation to a Markdown document. Before storing plain markdown, Sigle used to store stories in a JSON format.

## Usage

```ts
import { convert } from '@sigle/slate-to-markdown';

const slateJSON = [
  // ... Slate Sigle nodes JSON
];

const markdown = convert(slateJSON);
```
