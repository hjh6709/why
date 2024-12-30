export class CreateUserDTO {
  age;
  name;
  phoneNumber;
  email;
  password;

  constructor(user) {
    this.age = user.age; // 요청에서 전달된 age를 매핑
    this.name = user.name;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.password = user.password;
  }
}