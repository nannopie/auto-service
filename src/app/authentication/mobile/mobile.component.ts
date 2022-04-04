import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutoService } from 'src/app/shared/auto-service';
import { AutoserviceService } from 'src/app/shared/auto-service.service';

import { ErrorMessage } from 'src/app/shared/error-message';
import { Sweet } from 'src/app/shared/sweet';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Output() resultEvent = new EventEmitter<any>();
  autoservice: AutoService[] = [];
  // auto: AutoService = {} as AutoService;

  phone: string;
  statusUpdate: boolean = false;

  constructor(private service: AutoserviceService,
  ) { }

  ngOnInit(): void {
    // this.checkMobile;
  }

  // async mobile() {
  //   try {
  //     if (this.phone == '' || this.phone == null) throw new Error("กรุณากรอกหมายเลขโทรศัพท์");

  //     if (this.phone.length < 10) throw new Error("หมายเลขของคุณไม่ครบ");

  //     const result = await this.service.findMobile().toPromise();

  //     if (result.phone != null) throw new Error("มีหมายเลขนี้อยู่แล้ว");

  //     // if (this.autoservice != null) {
  //     //   this.autoservice.forEach(element => {
  //     //     if (element.phone == this.phone) throw new Error("มีหมายเลขนี้อยู่แล้ว");
  //     //   });
  //     // }

  //     // const result = await this.service.findMobile().toPromise();

  //     // if (result) {
  //     //   if (result.phone == this.phone) throw new Error("มีหมายเลขนี้อยู่แล้ว");
  //     // }

  //     // await this.service.checkMobile(this.phone).toPromise();
  //     // this.resultEvent.emit();
  //     // Sweet.successAlert();
  //   }
  //   catch (ex) {
  //     ErrorMessage.alert(ex);
  //   }
  // }
}
