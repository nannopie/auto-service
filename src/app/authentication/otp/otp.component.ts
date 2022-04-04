import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/shared/auto-service';
import { AutoserviceService } from 'src/app/shared/auto-service.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  autoservice: AutoService[] = [];
  auto: AutoService = {} as AutoService;

  tel: number;

  constructor(private service: AutoserviceService,
  ) { }

  ngOnInit(): void {
  }

  async sendOtp() {
    // const tel = "0994394574";
    const otp = "test test 1234";
    var randNumber = Math.floor((Math.random() * 1000000));

     console.log(this.tel);
    //  console.log(this.otp);
    this.autoservice = await this.service.sendOtp(this.tel, randNumber).toPromise();
  }
}
