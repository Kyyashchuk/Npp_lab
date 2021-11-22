import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): number | string {
    let res, resl: number | string;
    let a, b: number;
    a=59594;
    b=514654;
    if(a>b){
      res = a;
      resl = "a";
    }
    else if(b>a){
      res = b;
      resl = "b";
    }
    else{
      res = "Два числа рівні між собою"
    }
    return "Найбільше значення дорівнює значенню &#34;" + resl + '&#34;, тобто дорівнює <b><u><em>' + res + '</em></u></b>';
  }

  getNumbers(): number {
    const a = 4;
    const b = 225;
    const c = a * b;
    return c;
  }

  getString(): string {
    const name = 'Katia';
    const last_name = 'Kyyashchuk';
    const full_name = name + ' ' + last_name;
    return full_name;
  }

  getArrays(): number[] {
    const list: number[] = [-1, 2, 5, 10, 15, 17, -20];
    return list;
  }

  getEnums(): number {
    enum Color {Red = 1, Blue, Gray, Black, Green, Yellow};
    const c: Color = Color.Black;
    return c;
  }

  getMultitypeArrays(): (string | number)[] {
    const MultArr: (string | number)[] = ["message", 1, 8, "message2"];
    return MultArr;
  }

  getMultitypeValues(): string | number {
  let i: number = 1;
  let MultArr1, MultArr: string | number = "message";
  MultArr1 = MultArr;
  MultArr = 1;
    return MultArr1 + ', ' + MultArr;
  }

}
