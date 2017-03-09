import { Pipe } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortByPipe {
  transform(array: Array<any>, args: string): Array<string> {
    if(args === 'private'){
      var temp = array.filter((item) => {
        return item.private === true;
      })
      return temp;
    }
    array.sort((a: any, b: any) => {
      if(args === 'name'){
         var a = a.name.toLowerCase(), b = b.name.toLowerCase();
      }else{
        var a = a[args], b = b[args];
      }
      if(a > b) {
        if(args === 'name'){
          return 1
        }
        return -1;
      }else if(a < b) {
         if(args === 'name'){
          return -1
        }
        return 1;
      }else{
        return 0;
      }
    });
    return array;
   }
}

@Pipe({
  name: 'accountType'
})
export class SortByAccountType{
  transform(array: Array<any>, args: any): Array<string> {
    if(args){
      var temp = array.filter((item) => {
        if(args.type === 'personal'){
          return item.owner.login === args.currentUser;
        }else{
          return item.owner.type === 'Organization';
        }
      })
      return temp;
    }
    return array;
  }
}