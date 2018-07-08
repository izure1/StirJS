#version 300 es
 
// 프래그먼트 쉐이더는 기본 정밀도를 가지고 있지 않으므로 선언을 해야합니다.
// mediump은 기본값으로 적당합니다. "중간 정도 정밀도"를 의미합니다.
precision mediump float;
 
// 프래그먼트 쉐이더(fragment shader)에서 출력을 선언 해야합니다.
in vec4 v_color;
out vec4 outColor;
 
void main() {
  outColor = v_color;
}