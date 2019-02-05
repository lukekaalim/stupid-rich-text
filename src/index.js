// @flow
// SRT = StupidRichText

// Empty nodes do nothing.
export type SRTEmptyNode = {
  type: 'empty',
  children: Array<SRTMixedNode>,
};
export const buildSRTEmptyNode = (
  children?: Array<SRTMixedNode> = [],
): SRTEmptyNode => ({
  type: 'empty',
  children,
});

// This node terminates a branch with a string, applying all nested effects.
export type SRTStringNode = {
  type: 'string',
  content: string,
};
export const buildSRTStringNode = (
  content: string,
): SRTStringNode => ({
  type: 'string',
  content,
});

// Denotes a content separation.
export type SRTParagraphNode = {
  type: 'paragraph',
  children: Array<SRTMixedNode>,
};
export const buildSRTParagraphNode = (
  children?: Array<SRTMixedNode> = [],
): SRTParagraphNode => ({
  type: 'paragraph',
  children,
});

// Indicates that the text should be highlighted in a manner, separating it from its surroundings
export type SRTEmphasizedNode = {
  type: 'emphasized',
  method: 'bold' | 'italics' | 'negate',
  children: Array<SRTMixedNode>,
};
export const buildSRTEmphasizedNode = (
  method: 'bold' | 'italics' | 'negate',
  children?: Array<SRTMixedNode> = [],
): SRTEmphasizedNode => ({
  type: 'emphasized',
  method,
  children,
});


export type SRTMixedNode =
  | SRTEmptyNode
  | SRTStringNode
  | SRTParagraphNode
  | SRTEmphasizedNode
