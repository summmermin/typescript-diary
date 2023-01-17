interface SummerInf {
    name: string
    job?: string
    pet: string[]
    id: number
}

class Summer implements SummerInf {
    public name = 'summer'
    public pet = ['dog', 'cat']
    public id = 703

    public idAdd(){
        this.id++
    }
}

const happy = new Summer()
console.log(happy.pet[0])
happy.idAdd()