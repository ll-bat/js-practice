
const dom = document;

function elt(el, className = '') {
    const elm = dom.createElement(el);
    if (className) 
        elm.className = className;
    return elm;
}

const table = elt("table", "table table-striped m-2");

const thead = elt('thead');
const firstTr = elt('tr');



["id", "name", "surname", "age"].forEach(column => {
    const th = elt('th');
    th.innerText = column;
    th.width = "50px"
    firstTr.append(th);
})
thead.append(firstTr);




const secondTr = elt('tr');
["id", "name", "surname", "age"].forEach(column => {
    const th = elt('th');
    const input = elt("input", 'form-control');

    input.addEventListener('input', e => {
        inputChangeHandler(column, input.value);
    })

    th.append(input)
    secondTr.append(th);
})
thead.append(secondTr);



const currentFilerValues = {
    id: "",
    name: "",
    surname: "",
    age: "",
}


const inputChangeHandler = (column, value) => {
    currentFilerValues[column] = value;

    const filteredStudents = [];

    students.forEach(student => {  // 1 leo bzishvili 28
        let isOk = true;
        ['id', 'name', 'surname', 'age'].forEach(filterColumn => {
            const studentColumn = student[filterColumn].toString();
            const enteredColumnValue = currentFilerValues[filterColumn];
            if (studentColumn.indexOf(enteredColumnValue) > -1) {
                // ok
            } else {
                isOk = false;
            }
        })

        if (isOk) {
            filteredStudents.push(student);
        }
    })

    tbody.innerHTML = "";
    filteredStudents.forEach(student => {
        const tr = elt('tr');
        ['id', 'name', 'surname', 'age'].forEach(column => {
            const td = elt('td');
            td.innerText = student[column];
            tr.append(td);
        })
        tbody.append(tr);
    })
}


const students = [
    {
        id: 1, 
        name: "leo",
        surname: "bzishvili",
        age: 28
    }, 
    {
        id: 2, 
        name: "lua",
        surname: "shataka",
        age: 28
    },
    {
        id: 3, 
        name: "murza",
        surname: "murza",
        age: 26
    },
]

const tbody = elt("tbody");
students.forEach(student => {
    const tr = elt('tr');
    ["id", "name", "surname", "age"].forEach(column => {
        const td = elt('td');
        td.innerText = student[column];
        tr.append(td);
    })
    tbody.append(tr);
})

table.append(thead);
table.append(tbody);
dom.body.append(table);


/**
 *
 *  <table>
 *      <thead>
 *          <tr>
 *              <th> Id </th>
 *              <th> Name </th>
 *              <th> Age </th>
 *          <tr>
 *              
 *          </tr>
 *      </thead>
 *
 *      <tbody>
 *          <tr>
 *              <td> 1 </td>
 *              <td> leo </td>
 *              <td> 23 </td>
 *          </tr>
 *          <tr>
 *              <td> 2 </td>
 *              <td> lua </td>
 *              <td> 21 </td>
 *          </tr>
 *      </tbody>
 */