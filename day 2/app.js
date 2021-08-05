

const obj = {
    name: "leo",
    getName: function () {
        return this.name;
    },
    setName(name) {
        this.name = name;
    },
    getDynamicFunction() {
        const newFunction = function () {
            return 5;
        }

        return newFunction;
    },
    reset() {
        // sheamowme xolme key -s tipi rom funqcia ar gaxado stringi :)
        for (let key in this) {
            this[key] = "";
        }
    }
};

const name = obj.getName();
console.log(name);

obj.setName("lua");
console.log(obj.getName());

obj.setName = 5;
console.log(obj.setName);

const newFunction = obj.getDynamicFunction();
console.log(newFunction);

console.log(newFunction());

delete obj.name;
console.log(obj);

// Object.keys() აბრუნებს ობიექტის ყველა პროპერტის
const keys = Object.keys(obj);
console.log(keys);

const values = Object.values(obj);
console.log(values);

const arr = [];
for (let a of arr) {
    // yvela elementi gvaq
}

for (let a of keys) {
    if (obj[a] instanceof Function) {
        // მაგალითად: a = 'setName'
        // მაშინ: obj[a] = obj['setName'] = function;
        // e.i obj[a]() = function(), anu gamovidzaxot funqcia
        console.log(a, obj[a]());
    } else if (typeof obj[a] === "number") {
        // typeof obj[a] -> აბრუნებს obj[a] მნიშვნელობის ტიპს 
        // ზუსტად იგივენაირად შეგიძლია შეამოწმო ტიპი ასე: 
        // if obj[a] instanceof String || Number || Object || Array 
        console.log(obj[a]);
    }

}

// let a of array -> gamoiyeneba masivze iteraciistvis 
// let a in obj -> gamoiyeneba obieqtis proerptiebze iteraciistvis 
for (let key in obj) {
    console.log(key);
}


const dataToSend = [
    {
        item: "iphone 10",
        price: "2500$",
    },
    {
        item: "Asus Vivobook",
        price: "2000L"
    }
];


// gadagvyavs obieqti json formatshi 
const jsonObject = JSON.stringify(dataToSend);
console.log(jsonObject);

// gavagzavnot jsonObject serverze

// gardmovqmnat json obieqtad
const object = JSON.parse(jsonObject);
console.log(object);

// ----------------------------------

class Parent {
    constructor() {
        console.log('parenti sheiqmna');
    }

    about() {
        console.log("me var mshobeli");
    }
}

class Person extends Parent {
    constructor() {
        super();
        // nebismier funqciashi shegvidzlia shevqmnat propertiebi
        // magram recommendirebulia rom isini eweros constructorshi()
        this.name = "leo";
        this.age = 26;
        console.log("instanci sheiqmna")
    }

    init() {
        // shevqmnat propertiebi 
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    about() {
        console.log("me var leo")
    }
}

const leo = new Person();
leo.init();
leo.setName('leo');
console.log(leo.getName());
leo.about();
