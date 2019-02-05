# Stupid Rich Text

A simple rich text format. Describe your content using a tree of objects.

This project mostly just contains a set of flow-types for these objects, and some helper methods to create them.

## Installation

`npm i stupid-rich-text`

## Nodes

 There are four base nodes:
  1. Null Node
  2. String Node
  3. Paragraph Node
  4. Emphasized Node

They looks something like:
```javascript
const nullNode = {
  type: 'null',
  children: [],
};
```
```javascript
const stringNode = {
  type: 'string',
  content: 'A string!',
};
```
```javascript
const paragraphNode = {
  type: 'paragraph',
  children: [],
};
```
```javascript
const emphasizedNode = {
  type: 'emphasized',
  method: 'bold',
  children: [],
};
```

An example tree might be:

```javascript
const nodeTree = {
  type: 'null',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'string',
          content: 'First paragraph!',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'string',
          content: 'Second paragraph with a ',
        },
        {
          type: 'emphasized',
          method: 'bold',
          children: [
            {
              type: 'string',
              content: 'BOLD',
            },
          ],
        },
        {
          type: 'string',
          content: ' string!',
        },
      ],
    },
  ],
};

```

Which might render to the following markdown (if a markdown renderer is used):

```markdown
First paragraph!

Second paragraph with a **BOLD** string!
```