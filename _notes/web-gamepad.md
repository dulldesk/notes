---
title: Web Gamepad API
date: 2024-09-07
---

```js
await navigator.getGamepads()
window.addEventListener('gamepadconnected', ...)
```

- [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API)
- [gamepad tester demo](https://gamepad-demo.glitch.me/)
- [vibration](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator) (GamepadHapticActuator object)

<div id="gamepads" style="white-space:pre; font-family:monospace"></div>
<button id="vibrate" style="display: none">vibrate</button>

<script>
function formatFlat(d, p='') {
  return d instanceof Array && d[0] instanceof Object
    ? `${d[0].__proto__.toString()} * ${d.length}`
    : d instanceof Object && !(d instanceof Array) && !(d instanceof Function)
      ? format(d, p + '  ').trim() : d;
}
function format(data, p='') {
  if (data instanceof Array) return data.length ? `[\n${data.map(d => d ? format(d, p + '  ') : `  ${d}`).join(',\n')}\n]` : '[]'
  else if (!(data instanceof Object)) return `${p}${data}`
  return `${p}{\n${p}${Object.keys(data.__proto__).map(i => `  ${i}: ${formatFlat(data[i], p)}`).join(`,\n${p}`)}\n${p}}`
}
function update() {
  document.getElementById('gamepads').textContent = format(navigator.getGamepads())
  document.getElementById('vibrate').style.display = ''
}
async function vibrate() {
  (await navigator.getGamepads()).forEach(g => g?.vibrationActuator?.playEffect(g.vibrationActuator.effects[0], { startDelay: 0, duration: 200, weakMagnitude: 1.0, strongMagnitude: 1.0 }
  ))
}

if (navigator.getGamepads) {
  document.getElementById('gamepads').textContent = 'detecting gamepads... if one is connected, press a button on it'
  document.getElementById('vibrate').addEventListener('click', vibrate)
  window.addEventListener('gamepadconnected', update)
}
</script>
