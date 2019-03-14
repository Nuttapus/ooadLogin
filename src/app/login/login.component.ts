import { Component, OnInit } from '@angular/core';
import axios from '../../../node_modules/axios/dist/axios'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  constructor() { }

  ngOnInit() {
  }

  onSignin() {
    var data = { username: this.username, password: this.password }
    axios.post("http://localhost:4001/login", data).then((res) => {
      var checkUsername = res.data.username
      var checkPassword = res.data.password
      if (checkUsername !== undefined) {
        if (checkPassword === this.password) {
          alert("ข้อมูลถูกต้อง")
        } else {
          alert("กรุณาใส่ password ให้ถูกต้อง")
        }
      } else {
        alert("กรุณาใส่ username ให้ถูกต้อง")
      }
    })
  }
}
