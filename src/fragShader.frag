precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float time, amp, freq, colorSeparation, moving;
vec2 lookup (vec2 offset) {
  return mod(
    uv + amp * vec2(
        cos(freq*(uv.x+offset.x)+time/4000.0),
        sin(freq*(uv.y+offset.x)+time/7000.0))
      + vec2( moving * time/10000.0, 0.0),
    vec2(1.1));
}

void main() {
  vec3 col =  mix(vec3(
    texture2D(t, lookup(vec2(colorSeparation))).r,
    texture2D(t, lookup(vec2(-colorSeparation))).g,
    texture2D(t, lookup(vec2(1.0))).b),  vec3(1.0), 0.1);
  gl_FragColor = vec4(col, 1.0);
}