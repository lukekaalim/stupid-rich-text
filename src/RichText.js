// @flow
import { createElement as h } from 'react';
import type { Element } from 'react';

export type RichTextNode =
  | TextNode
  | StyleNode
  | GroupNode
  | ParagraphNode

export type TextNode = {
  type: 'text',
  text: string,
};

export type StyleNode = {
  type: 'style',
  style: {
    fontWeight?: 'bold' | 'normal',
    fontFamily?: string,
    textDecoration?: 'underline' | 'none',
    color?: string,
  },
  child: RichTextNode,
};

export type ParagraphNode = {
  type: 'para',
  child: RichTextNode,
};

export type GroupNode = {
  type: 'group',
  children: Array<RichTextNode>,
};

type Props = {
  node: RichTextNode,
};

export function UnknownNodeTypeError(unknownType: string) {
  return new Error(`Unknown Node Type: ${unknownType}: Rich text could not continue parsing`);
}

const RichText = ({ node }: Props) => {
  switch (node.type) {
    case 'text':
      return node.text;
    case 'style':
      return h('span', { style: node.style }, h(RichText, { node: node.child }));
    case 'group':
      return node.children.map((child: RichTextNode): Element<typeof RichText> => h(RichText, { node: child }));
    case 'para':
      return h('p', null, h(RichText, { node: node.child }));
    default:
      throw new UnknownNodeTypeError(node.type);
  }
};

export default RichText;
