# FormKit element

## Setup

Create formkit.config.ts
```typescript
import { DefaultConfigOptions } from '@formkit/vue'

import * as FormkitElement from 'formkit-element'

const config: DefaultConfigOptions = {
    inputs: {
        ...FormkitElement,
    }
}

export default config
```

