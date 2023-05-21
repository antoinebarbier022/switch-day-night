# Switch Day/Night

`switch-day-night` is a custom web component built with LitElement that represents a switch control. It provides a toggle functionality with customizable styling options.

![Animation](public/assets/animation.gif)
Inspiration : [https://youtu.be/S6T6hrc8cQo](https://youtu.be/S6T6hrc8cQo)

## Installation

To use `switch-day-night` in your project, follow these steps:

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Build the project:

   ```
   npm run build
   ```

4. Include the built JavaScript file `switch-day-night.js` in your HTML file:

   ```html
   <script src="<path_to_file>/switch-day-night.js"></script>
   ```

## Usage

Once you have included the `switch-day-night` script in your HTML file, you can use the `<switch-day-night>` element in your markup.

```html
<switch-day-night></switch-day-night>
```

## Properties

The `switch-day-night` component has the following properties that you can set:

- `disabled` (default: false): Determines whether the switch is disabled.
- `defaultChecked` (default: false): Determines the initial checked state of the switch.

## Events

The `switch-day-night` component dispatches the following event:

- `onChange`: Fired when the switch state changes. The event `detail` object contains the `checked` property indicating the new state of the switch.

To listen to the `onChange` event, you can add an event listener to the `<switch-day-night>` element:

```javascript
const mySwitch = document.querySelector("switch-day-night");

mySwitch.addEventListener("onChange", (event) => {
  const isChecked = event.detail.checked;
  // Handle the switch state change
});
```

## Styling

The appearance of the switch can be customized using CSS variables. The following CSS variables are available:

- `--switch-width`: Specifies the width of the switch.
- `--switch-height`: Specifies the height of the switch.
- `--switch-border-radius`: Specifies the border radius of the switch.
- `--switch-padding`: Specifies the padding of the switch.

You can override these CSS variables to achieve the desired styling:

```css
switch-day-night {
  --switch-width: 100px;
  --switch-height: 50px;
  --switch-border-radius: 10px;
  --switch-padding: 8px;
}
```

## Examples

Here's an example of using the `switch-day-night` component with custom styling:

```html
<style>
  switch-day-night {
    --switch-width: 120px;
    --switch-height: 60px;
    --switch-border-radius: 30px;
    --switch-padding: 6px;
  }
</style>

<switch-day-night></switch-day-night>
```

## License

This project is licensed under the [MIT License](LICENSE).
