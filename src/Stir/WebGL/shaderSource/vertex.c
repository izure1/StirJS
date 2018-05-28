#version 300 es
 
// attribute는 버텍스 쉐이더에 대한 입력(in)입니다.
// 버퍼로 부터 받은 데이터입니다.
in vec4 a_position;
 
// 모든 쉐이더는 main 함수를 가지고 있습니다.
void main() {
 
  // gl_Position는 버텍스 쉐이더가 설정을 담당하는 내장 변수입니다.
  gl_Position = a_position;
}