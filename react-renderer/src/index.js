// @flow
import React from 'react';
import { SRTEmphasizedNodeRenderer } from './SRTEmphasizedNodeRenderer';
import type { SRTMixedNode } from 'stupid-rich-text';

type Props = {
  rootNode: SRTMixedNode,
};

export const renderChildren = (children: Array<SRTMixedNode>): * => (
  children
    .map((child, index) => <SRTRenderer key={index} rootNode={child} />)
);

export const SRTRenderer = ({ rootNode }: Props) => {
  switch (rootNode.type) {
  case 'emphasized':
    return <SRTEmphasizedNodeRenderer rootNode={rootNode} />;
  default:
  case 'empty':
    return <span>{renderChildren(rootNode.children)}</span>;
  case 'paragraph':
    return <p>{renderChildren(rootNode.children)}</p>;
  case 'string':
    return <span>{rootNode.content}</span>;
  }
};
