import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoService } from 'src/app/shared/auto-service';
import { AutoserviceService } from 'src/app/shared/auto-service.service';
import { ErrorMessage } from 'src/app/shared/error-message';
import { Sweet } from 'src/app/shared/sweet';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Output() resultEvent = new EventEmitter<any>();
  // @Input() autoservice: AutoService = {} as AutoService;
  // @Input() statusUpdate: boolean = false;
  // auto: AutoService = {} as AutoService;
  auto: AutoService[] = [];
  fname: string;
  lname: string;
  phone: string;
  bank: string;
  bank_name: string;
  username: string;
  password: string;

  constructor(private service: AutoserviceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.auto = await this.service.findAllMobile().toPromise();
    // this.auto = await this.service.test().toPromise();
    console.log('test' + this.auto);
  }

  async save() {
    try {

      if (this.phone == '' || this.phone == null) throw new Error("กรุณากรอกหมายเลขโทรศัพท์");

      if (this.phone.length < 10) throw new Error("หมายเลขของคุณไม่ครบ");

      const h = await this.service.findAllMobile().toPromise();
      if (h) {
        if (h == null) throw new Error("555555");
      }

      // await this.service.save(thisphone).toPromise();
      this.resultEvent.emit();
    }
    catch (ex) {
      ErrorMessage.alert(ex);
    }
  }

  async test() {
  }

  async testSave(fname: string, lname: string, phone: string, bank: string, bank_name: string,
    username: string, password: string) {
    try {
      // this.phone.replace("-", "");
      // this.phone.replace("_", "");
      // this.phone.replace("+", "");
      // this.phone.replace("-", "");
      // this.phone.replace("*", "");
      // this.phone.replace("/", "");
      // this.phone.replace("\\", "");
      // this.phone.replace("|", "");
      // this.phone.replace("(", "");
      // this.phone.replace(")", "");

      if (this.phone == '' || this.phone == null) throw new Error("กรุณากรอกหมายเลขโทรศัพท์");

      if (this.phone.length < 10) throw new Error("หมายเลขของคุณไม่ครบ");

      // const h = await this.service.testsave(fname, lname, phone, bank, bank_name, username, password).toPromise();
      await this.service.saveUser(fname, lname, phone, bank, bank_name, username, password).toPromise();
      // if (!h) {
      //   Sweet.successAlert();
      // }
      // else {
      //   Sweet.errorAlert('หมายเลขนี้มีอยู่แล้ว')
      // }
    }

    catch (ex) {
      ErrorMessage.alert(ex);
    }
  }

}
