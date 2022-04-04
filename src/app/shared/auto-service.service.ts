import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apisportbook88 } from './api-sportbook88';
import { AutoService } from './auto-service';


@Injectable({
  providedIn: 'root'
})
export class AutoserviceService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  isTblLoading = true;
  dataChange: BehaviorSubject<AutoService[]> = new BehaviorSubject<AutoService[]>([]);

  constructor(private httpClient: HttpClient) { }

  get data(): AutoService[] {
    return this.dataChange.value;
  }

  api = "http://localhost:90/api"
  apis = "https://topup-sportbook88.askmebet.io/v0.1/partner/member"
  otps = "https://www.thsms.com/api/rest?";
  otp = "https://www.thsms.com/api/rest?username=signa&password=Nileeye1992&method=send&from=SMSOTP&";

  findAllMobile(): Observable<AutoService[]> {
    return this.httpClient.get<AutoService[]>(this.api + '/findAllMobile.php');
  }

  findMobile(phone: string): Observable<AutoService> {
    return this.httpClient.get<AutoService>(this.otp + '/findMobile.php' + phone);
  }

  checkMobile(phone: string): Observable<AutoService[]> {
    const apiParams = new HttpParams()
      .set('phone', phone)
    return this.httpClient.get<AutoService[]>(this.api + '/mobile.php');
  }

  mobile(phone: AutoService): Observable<AutoService> {
    return this.httpClient.put<AutoService>(this.otp + '/mobile.php', phone);
  }

  sendOtp(tel: number, otp: number): Observable<AutoService[]> {
    const apiParams = new HttpParams()
      .set('tel', tel)
      .set('otp', otp);
    return this.httpClient.get<AutoService[]>(this.otp + apiParams);
  }

  saveOtp(otp: string): Observable<AutoService[]> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const param = new HttpParams()
      .set('otp', otp);
    return this.httpClient.post<AutoService[]>(this.api + '/otp.php', param.toString(), options);
  }

  saveUser(fname: string, lname: string, phone: string, bank: string,
    bank_name: string, username: string, password: string): Observable<AutoService[]> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const param = new HttpParams()
      .set('fname', fname)
      .set('lname', lname)
      .set('phone', phone)
      .set('bank', bank)
      .set('bank_name', bank_name)
      .set('username', username)
      .set('password', password);
    return this.httpClient.post<AutoService[]>(this.api + '/insert.php', param.toString(), options);
  }

  test(): Observable<AutoService[]> {
    return this.httpClient.get<AutoService[]>(this.api + '/findAllMobile.php');
  }

  testApi(memberLoginName : string, memberLoginPass: string, phoneNo: string, contact: string, signature: string): Observable<Apisportbook88[]> {
    const apiParams = new HttpParams()
      .set('memberLoginName', memberLoginName)
      .set('memberLoginPass', memberLoginPass)
      .set('phoneNo', phoneNo)
      .set('contact', contact)
      .set('signature', signature)
    return this.httpClient.get<Apisportbook88[]>(this.api + "/create" + apiParams);
  }

  //   show() {
  //     this.httpClient.get<AutoService[]>(this.url).subscribe(
  //       (data) => {
  //         this.isTblLoading = false;
  //         this.dataChange.next(data);
  //       },
  //       (error: HttpErrorResponse) => {
  //         this.isTblLoading = false;
  //         console.log(error.name + " " + error.message);
  //       }
  //     );
  //   }

  //   findByDate(start_date: Date, end_date: Date): Observable<Report[]> {
  //     const param = new HttpParams()
  //       .set('start_date', start_date ? DateUtil.toDbDate(start_date) : '')
  //       .set('end_date', end_date ? DateUtil.toDbDate(end_date) : '');
  //     return this.httpClient.get<Report[]>(this.url + param);
  // }

  //   async dataSourceFindByDate(start_date: Date, end_date: Date) {
  //     const param = new HttpParams()
  //       .set('start_date', start_date ? DateUtil.toDbDate(start_date) : '')
  //       .set('end_date', end_date ? DateUtil.toDbDate(end_date) : '');
  //     this.isTblLoading = true;
  //     const data = await this.httpClient.get<Report[]>(this.url + param).toPromise();
  //     this.isTblLoading = false;
  //     this.dataChange.next(data);
  //   }
}
