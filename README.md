# Stupid Rich Text
**Rich Text React component that is Stupid**

Basically I wanted a really dumb way of embedding rich text into a web application. This zero effort application is the solution.

It supports:
  - Underlines
  - Boldness
  - Font Family changes
  - Grouping of paragraphs

It does this by receiving a node graph that represents the text. A typical graph might look like:
```
{
  type: 'group',
  children: [
    {
      type: 'text',
      text: 'Hello there, I am simple text, but now I am'
    },
    {
      type: 'style'
      style: { fontWidth: 'bold' },
      child: {
        type: 'text',
        text: ' BOLD!'
      },
    },
    {
      type: 'text',
      text: '\nAnd now I return to normal, on a new line.'
    },
  ]
}
```

Rendering as:

> Hello there, I am simple text, but now I am **BOLD!**
>
> And now I return to normal, on a new line.

It recursively renders itself with each node it traverses. It's not very special or fast or anything, its just that it fits in 100 lines or so. And it's flow typed for some reason.