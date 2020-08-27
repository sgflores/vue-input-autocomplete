# Vue Input Autocomplete Component


## Installation
```bash
# npm
npm install vue-input-autocomplete
```

## Usage
#### As component
```html
<template>
    <input-auto-complete  className="form-control"
		:value="input"
		id="id"  name="name"
		placeholder="Enter Names Here..."
		:options="options"
		:updateValueHandler="updateValue"></input-auto-complete>
</template>

<script>
    // Import component
    import  InputAutoComplete  from  'vue-input-autocomplete';
    export default {
        components: {
			InputAutoComplete,
		},
		data() {
			return {
				input:  'Default Value',
				options: ['Alex', 'Ben', 'James']
			}
		},
		methods: {
			updateValue(val) {
				this.input = val;
			}
		}
 }
</script>
```


## Available props
The component accepts these props:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
| value           | String             | `''`              | default value of the input component|
| updateValueHandler       | Function             | `()=>{}`              | updates the parent model value |
| id        | String| `inputId`             | id of the input component  |
| name    | String| `inputName`               | name of the input component |
| className       | String              | `''`               | class styling of the input component|
| placeholder            | String              | `Enter here...`               | placeholder of the input component |
| options           | Array              |  `[]`                    | dropdown options of the input component |

## License
[MIT](LICENSE.txt) License