#version 300 es
 
// attribute는 버텍스 쉐이더에 대한 입력(in)입니다.
// 버퍼로 부터 받은 데이터입니다.
in vec3 a_position;
in vec4 a_color;

uniform mat4 u_vTranslate;
uniform vec2 u_vRotate;

uniform mat4 u_pMatrix;
uniform mat4 u_vMatrix;

out vec4 v_color;
 
void main() {

  // rotate
  gl_Position = vec4(
    a_position.x * u_vRotate.y + a_position.y * u_vRotate.x,
    a_position.y * u_vRotate.y - a_position.x * u_vRotate.x,
    a_position.z,
    1.0
  );

  // 3d perspective
  gl_Position = u_pMatrix * u_vMatrix * u_vTranslate * gl_Position;

  v_color = a_color;

}