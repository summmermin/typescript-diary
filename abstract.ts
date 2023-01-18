abstract class Person {
    abstract name: string;

    display(): void {
        console.log(this.name)
    }
}

class People extends Person {
    name: string;
    pCode: number;

    constructor(name: string, pCode: number) {
        super(); //꼭 super() 불러야해
        // 추상 클래스를 구현하는 클래스는 super()생성자에서 호출해야 합니다.
        this.pCode = pCode;
        this.name = name;
    }
}

const p: Person = new People('summer',789)
p.display() //'summer'