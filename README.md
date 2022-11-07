# FormKit element

<a href="https://element-plus.org/">Element plus</a> for <a href="https://formkit.com/">FormKit.</a>


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

## Usage

### elForm submit

```js
const data=ref({})
const form = ref({});
onMounted(() => {
  getNode("form1").on("submit", function () {
    console.log('node submit', data.value);
  });
})
```

```html
  <FormKit type="elForm" v-model="data" ref="form" id="form1">
    ...   
  </FormKit>
```



