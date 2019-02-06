# Stupid Rich Text React Renderer

## Install

`npm i stupid-rich-text-react-renderer`

## Use

### Source

```javascript
import React from 'react';
import { SRTRenderer } from 'react';

const MyComponent = () => {
  const rootNode = {
    type: 'paragraph',
    children: [
      {
        type: 'string',
        content: 'This is a Rich text node',
      },
    ],
  };

  return (
    <SRTRenderer rootNode={rootNode} />
  )
};

```

### React Output
```xml
<MyComponent>
  <SRTRenderer>
    <p>
      <SRTRenderer>
        <span>This is a Rich text node</span>
      </SRTRenderer>
    </p>
  </SRTRenderer>
</MyComponent>
```

### HTML Output
```html
<p>
  <span>This is a Rich text node</span>
</p>
```

## Build

`npx rollup -c`

## Test

`npx jest`