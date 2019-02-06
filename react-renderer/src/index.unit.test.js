import React from 'react';
import { SRTRenderer } from '../src';
import TestRenderer from 'react-test-renderer';

const findSrtEl = (tree) => (
  tree.root.findByType(SRTRenderer)
);

const getSrtElOnlyChild = (srtEl) => {
  expect(srtEl.children.length).toEqual(1);
  return srtEl.children[0];
};

const getSrtRootNodeProp = (srtEl) => (
  srtEl.props.rootNode
);

describe('<SRTRenderer />', () => {
  it('should render an empty span when given a empty node', () => {
    const rootNode = {
      type: 'empty',
      children: [],
    };

    const tree = TestRenderer.create(<SRTRenderer rootNode={rootNode} />);
    const srtChildEl = getSrtElOnlyChild(findSrtEl(tree));

    expect(srtChildEl.type).toEqual('span');
    expect(srtChildEl.children).toEqual([]);
  });
  it('should render children for empty and paragraph nodes', () => {
    const childNode = {
      type: 'empty',
      children: [],
    };
    const children = [childNode, childNode];

    const expectToHaveRenderedChildren = (tree) => {
      getSrtElOnlyChild(findSrtEl(tree)).children.forEach(child => {
        expect(getSrtRootNodeProp(child)).toEqual(childNode);
      });
    };

    const emptyNode = { type: 'empty', children };
    expectToHaveRenderedChildren(TestRenderer.create(<SRTRenderer rootNode={emptyNode} />));

    const paragraphNode = { type: 'paragraph', children };
    expectToHaveRenderedChildren(TestRenderer.create(<SRTRenderer rootNode={paragraphNode} />));
  });
});