// @flow
import React from 'react';
import { renderChildren } from '../src';
import type { SRTEmphasizedNode } from 'stupid-rich-text';

type Props = {
  rootNode: SRTEmphasizedNode,
};

const methods = {
  bold: { fontWeight: 'bold' },
  italics: { fontStyle: 'italic' },
  negate: { color: 'white', backgroundColor: 'black' },
};

export const SRTEmphasizedNodeRenderer = ({ rootNode }: Props) => (
  <span style={methods[rootNode.method]}>
    {renderChildren(rootNode.children)}
  </span>
);