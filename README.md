# Stupid Rich Text 2.0
_Even stupider than before!_

So, I don't mark markdown because then I have to do though the pain of markdown _parsers_, of which are complicated and heavy beasts. Plus: markdown is a little insane itself.

Also importantly: I want to be able to easily _extend_ the existing system with my own application-specific styles.

I don't like html because, well, at its core it's xml. And I def don't want to just _inject_ a pile of random html that the user has written into any page. And parsing xml is a pain, like xml.

So, I need a very simple way of storing rich text. There are probably a million other solutions, but I have a very stupid one right here, that is just JSON because, why not.

Its:
 - Simple: Nodes are three properties, by default we only support 2 style nodes (A paragraph and a text decoration)
 - Extensible: Just add more node types. Handle ones you don't know as null.
 - Safe: Its dumb json. You can't embed an executable script here, became there are not enough moving parts to do so.

 Included in this repo is an example react renderer.

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
  id: 'ff81a9a8-5f1e-4532-9ee1-2f270fe8703b',
  children: [],
};

const stringNode = {
  type: 'string',
  id: 'f5c65a4c-e27e-4363-9c34-aab636eb347d',
  content: 'A string!',
};

const paragraphNode = {
  type: 'paragraph',
  id: '7ef848e5-97cf-473a-81f7-02438a878104',
  children: [],
};

const emphasizedNode = {
  type: 'emphasized',
  id: '446eba9e-45ac-4fd4-889c-5adc747dd97f',
  method: 'bold',
  children: [],
};

```

An example tree might be:

```javascript
const nodeTree = {
  type: 'null',
  id: 'ff81a9a8-5f1e-4532-9ee1-2f270fe8703b',
  children: [
    {
      type: 'paragraph',
      id: '7ef848e5-97cf-473a-81f7-02438a878104',
      children: [
        {
          type: 'string',
          id: 'f5c65a4c-e27e-4363-9c34-aab636eb347d',
          content: 'First paragraph!',
        },
      ],
    },
    {
      type: 'paragraph',
      id: '7ef848e5-97cf-473a-81f7-02438a878104',
      children: [
        {
          type: 'string',
          id: 'f5c65a4c-e27e-4363-9c34-aab636eb347d',
          content: 'Second paragraph with a ',
        },
        {
          type: 'emphasized',
          id: '446eba9e-45ac-4fd4-889c-5adc747dd97f',
          method: 'bold',
          children: [
            {
              type: 'string',
              id: 'f5c65a4c-e27e-4363-9c34-aab636eb347d',
              content: 'BOLD',
            },
          ],
        },
        {
          type: 'string',
          id: 'f5c65a4c-e27e-4363-9c34-aab636eb347d',
          content: ' string!',
        },
      ],
    },
  ],
};

```

Which might render out to be:

---

First paragraph!

Second paragraph with a **BOLD** string!

---