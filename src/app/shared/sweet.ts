/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
export type ErrorType = 'Unknow' | 'String' | 'HttpErrorResponse'
  | 'ObjectWithMessage' | 'ObjectWithMessageObject' | 'NULL';
export class Sweet {
  private object: HttpErrorResponse | string | any;
  private type: ErrorType;
  constructor(error: HttpErrorResponse | string | any) {
    this.object = error;
    if (error) {
      if (error instanceof HttpErrorResponse) {
        this.type = 'HttpErrorResponse';
      } else if (typeof (error) === 'string') {
        this.type = 'String';
      } else if (error.message) {
        if (typeof (error.message) === 'string') {
          this.type = 'ObjectWithMessage';
        } else {
          this.type = 'ObjectWithMessageObject';
        }

      }
    } else {
      this.type = 'NULL';
    }
  }
  get message(): string {
    switch (this.type) {
      case 'String':
        return (this.object as string);
        break;
      case 'HttpErrorResponse':
        {
          const res = this.object as HttpErrorResponse;
          return (res.error && res.error.message) || res.message || 'Unknow Error';
        }
        break;
      case 'ObjectWithMessage':
        return this.object.message;
        break;
      case 'ObjectWithMessageObject':
        return JSON.stringify(this.object.message);
        break;
      case 'NULL':
        return null;
      default:
        if (this.object && this.object.toString) {
          return this.object.toString();
        }
        break;
    }
    return 'Unknow Error';
  }
  static parseError(error: any): string {
    return new Sweet(error).message;
  }
  static alert(error: any): void {
    const message = Sweet.parseError(error);
    this.errorAlert(message);
  }

  static successAlert(message: string = '') {
    Swal.fire({
      position: 'center',
      icon: 'success',
      text: 'บันทึกเรียบร้อย ' + message,
      showConfirmButton: true,
      timer: 1200
    })
  }

  static successAlertClose(message: string = '') {
    Swal.fire({
      position: 'center',
      icon: 'success',
      text: 'บันทึกเรียบร้อย ' + message,
      showConfirmButton: true
    })
  }

  static errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  static returnConfirm() {
    return Swal.fire({
      title: 'Are you sure?',
      text: "กรุณายืนยันอีกครั้ง",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => { return result; });
  }



}
