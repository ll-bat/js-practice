

const baseUrl = "https://free.currconv.com/api/v7/currencies?apiKey=";
const MY_TOKEN = "4c341edf56ebf375df9d";
const fullUrl = baseUrl + MY_TOKEN;

const convertUrl = fullUrl + "&compact=ultra&q=";

function getDataFromApi(url) {
    return new Promise(next => {
        fetch(url)
            .then(res => res.json())
            .then(res => next(res));
    })
}

getDataFromApi(fullUrl)
    .then(res => {
        const { results } = res;
        const valutes = Object.keys(results);
        initValutes(valutes);
    })

function initValutes(valutes) {
    valutes.length = 50;

    const rowDiv = document.createElement('div');
    $(rowDiv).addClass('row justify-content-center mt-5');

    const col1 = document.createElement('div');
    $(col1).addClass('col-5');

    const col2 = document.createElement('div');
    $(col2).addClass('col-5');

    rowDiv.append(col1);
    rowDiv.append(col2);


    const fromSelect = createSelect(valutes);
    const toSelect = createSelect(valutes);

    col1.append(fromSelect)
    col2.append(toSelect)


    const newRow = document.createElement('div');
    $(newRow).addClass('row justify-content-center mt-5');

    const newCol1 = document.createElement('div');
    $(newCol1).addClass('col-5');

    const newCol2 = document.createElement('div');
    $(newCol2).addClass('col-5');

    newRow.append(newCol1, newCol2);

    const input = document.createElement('input');
    $(input).attr('type', 'number');
    $(input).addClass('form-control').attr('placeholder', 'Enter quantity')


    const btn = document.createElement('button');
    $(btn).addClass('btn btn-primary').text('Convert');


    $(btn).on('click', e => {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        const qnt = input.value;
        
        const toConvertUrl = convertUrl + fromValue + "_" + toValue;
        const targetUrl = toConvertUrl.replace('currencies', 'convert');

        getDataFromApi(targetUrl)
            .then(res => {
                const keys = Object.keys(res);
                const values = Object.values(res);
                const valuteCourse = keys[0];
                const valuteValue = values[0];

                input.value = Number(qnt) * Number(valuteValue);
            })
    })

    newCol2.append(btn);

    newCol1.append(input);

    document.body.append(rowDiv, newRow)
}

function createSelect(options) {
    const select = document.createElement('select');

    options.forEach(valute => {
        const option = new Option(valute, valute);
        select.append(option);
    })

    $(select).addClass('form-control')

    return select;
}

