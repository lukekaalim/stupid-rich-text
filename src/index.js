// @flow

export type UUID = string;
export const makeWeakUUID = (): UUID => {
  let uuid = '', i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += '-';
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
};
// SRT = StupidRichText

// Empty nodes do nothing.
export type SRTEmptyNode = {
  type: 'empty',
  id: UUID,
  children: Array<SRTMixedNode>,
};
export const buildSRTEmptyNode = (
  children?: Array<SRTMixedNode> = [],
  uuid?: string = makeWeakUUID(),
): SRTEmptyNode => ({
  type: 'empty',
  id: uuid,
  children,
});

// This node terminates a branch with a string, applying all nested effects.
export type SRTStringNode = {
  type: 'string',
  id: UUID,
  content: string,
};
export const buildSRTStringNode = (
  content: string,
  uuid?: string = makeWeakUUID(),
): SRTStringNode => ({
  type: 'string',
  id: uuid,
  content,
});

// Denotes a content separation.
export type SRTParagraphNode = {
  type: 'paragraph',
  id: UUID,
  children: Array<SRTMixedNode>,
};
export const buildSRTParagraphNode = (
  children?: Array<SRTMixedNode> = [],
  uuid?: string = makeWeakUUID(),
): SRTParagraphNode => ({
  type: 'paragraph',
  id: uuid,
  children,
});

// Indicates that the text should be highlighted in a manner, separating it from its surroundings
export type SRTEmphasizedNode = {
  type: 'emphasized',
  id: UUID,
  method: 'bold' | 'italics' | 'negate',
  children: Array<SRTMixedNode>,
};
export const buildSRTEmphasizedNode = (
  method: 'bold' | 'italics' | 'negate',
  children?: Array<SRTMixedNode> = [],
  uuid?: string = makeWeakUUID(),
): SRTEmphasizedNode => ({
  type: 'emphasized',
  method,
  id: uuid,
  children,
});


export type SRTMixedNode =
  | SRTEmptyNode
  | SRTStringNode
  | SRTParagraphNode
  | SRTEmphasizedNode

