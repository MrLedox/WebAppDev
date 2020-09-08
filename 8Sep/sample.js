let arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let arr2 = [1,2,3,4,"bla",{a:10}]

for (let i=0; i < arr2.length; i++){
    console.log(i, arr[i], "third arg")
}

let obj = {
    a: 10, b : {
        c: "bla"
    },
    c: 50
}

for (let element of arr2){
    console.log(element)
}

let x = 0;
let y = 0;
while(x <= 0){
    console.log(x++)
    console.log(++y)
}

var sentinel = -1;
while(sentinel){
    console.log(sentinel)
    sentinel++
}

seninel = 10;
if(sentinel == "10") {
    console.log("inside the if ==")
}else if (sentinel === 10) {
    console.log("inside the if ===")
} else {
    console.log("in the else")
}

Interface Animal {
    void talk()
}

class Dog extends Animal {
    public void talk(){

    }
    public void dogTalkBecauseOfNoReason(){

    }
}

dog = new Dog()

function executeComunicate (duck) {
    duck.dogTalkBecauseOfNoReason()
}

executeComunicate(dog)