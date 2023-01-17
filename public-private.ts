class Summer{
    public name:string;
    id:string;
}
const x=new Summer();
x.name='summer';
x.id='123'

class Winter{
    private name:string;
    age:number;
}
const y=new Winter()
// y.name 은 프라이빗이라 호출되지 않음
y.age=25;