# FormKit element

<a href="https://element-plus.org/">Element plus</a> for <a href="https://formkit.com/">FormKit.</a>


## Preview

<img src="https://raw.githubusercontent.com/mathsgod/formkit-element/main/preview/ui.png" alt="preview" width="500" />

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

### Basic

```html
  <FormKit type="form" v-model="data">

      <FormKit type="elInput" name="input4" label="elInput" validation="required" />

      <FormKit type="elInput" name="input5" label="elInput (placeholder)" validation="required"
        placeholder="this is a placeholder" clearable />

      <FormKit type="elPassword" name="password1" label="elPassword" validation="required" show-password clearable
        placeholder="this is a password" />

      <FormKit type="elTextarea" name="textarea" label="elTextarea" placeholder="this is a textarea" />

      <FormKit type="elSelect" name="select2" label="elSelect" clearable :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune'
      }" />

      <FormKit type="elSelect" name="select2" label="elSelect (multiple)" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune'
      }" multiple />

      <FormKit type="elRate" name="rate2" label="elRate" />

      <FormKit type="elSwitch" name="switch3" label="elSwitch" />

      <FormKit type="elDatePicker" name="date3" label="elDatePicker" />
      <FormKit type="elTimePicker" name="time2" label="elTimePicker" />
      <FormKit type="elColorPicker" name="color12" label="elColorPicker" />
    </FormKit>
```

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





