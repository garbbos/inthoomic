var db = {NAME: "ClientsThoomicDB", VERSION: 1},
clientDB = [],

mostrarCli = function (data) {
    console.log("mostrarCli() " + JSON.stringify(data.href));
},

newClient = function (ev) {
    console.log("newClient() " + ev.id);
    newcli.style.bottom = "20%";
    plus.src = "img/bise.svg";
},

closeClient = function () {
    newcli.style.bottom = "-100%";
},

saveClient = function () {
    var x, cliente = {};

    console.log("saveClient()");

    for (x = 0; x < formnew.elements.length; x++) {

            cliente[formnew.elements[x].name] = formnew.elements[x].value;
            console.log("Element " + x + " save " + formnew.elements[x].value);
    }
    openDB.odb.open(db, cliente, texto, 'add');
    plus.src = "img/plus.svg";
    closeClient();
    getClients();
},

reClients = function (data) {
    var x, id, parrafo, link, totaldb = document.getElementById('totaldb'), mydiv = document.createElement("div");

    if (data) {
        clientDB.push(data);
        console.log("reclients() " + clientDB.length + JSON.stringify(data));
        mydiv.setAttribute("class", "datos colorback");

        link = document.createElement("a");
        link.setAttribute("class", "btn datos");
        link.setAttribute("href", "#");
        link.setAttribute("id", data.name);
        link.innerHTML = data.name;
        parrafo = document.createElement("p");

        for (x in data) {
            if (data.hasOwnProperty(x)) {
                parrafo.innerHTML = data[x];

            }
        }
        link.appendChild(parrafo);
        mydiv.appendChild(link);
        marcobills.appendChild(mydiv);
        totaldb.innerHTML = clientDB.length;
    }
},

getClients = function () {
    clientDB = [];
    openDB.odb.open(db, "", reClients, 'read');
},

getNoBill = function () {
    var no = 0;

    no = Number(localStorage.getItem('nobill'));
    if (no === 'number') {
        no++;
    } else {
        no = 1;
    }
    return no;
},

setNoBill = function (data) {
    if (data === 'number') {
        localStorage.setItem('nobill', data);
    }
};

texto = function (mn) {
    if (mn) {
        msg.innerHTML = mn;
        status.style.opacity = 1;
        setTimeout(function () { status.style.opacity = 0; }, 3000);
        window.console.log(mn);
    }
},

init = function () {
    'use strict';
    console.log('Thoomic.com running...');

    var newcli = document.getElementById('newcli'),
        savecli = document.getElementById('savecli'),
        comment = document.getElementById('comment'),
        massetup = document.getElementById('massetup'),
        masconcept = document.getElementById('masconcept'),
        barrabills = document.getElementById('barrabills'),
        concept = document.getElementById('concept'),
        desc = document.getElementById('desc'),
        qty = document.getElementById('qty'),
        unit = document.getElementById('unit'),
        total = document.getElementById('total'),
        formnew = document.getElementById('formnew'),
        status = document.getElementById('status'),
        msg = document.getElementById('msg'),

        masConcept = function () {
            console.log("masConcept()");
        },

        closePopup = function () {
            popup.style.bottom = "-100%";
        },

        getNow = function () {
            var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), fecha = document.getElementById('fecha');

            fecha.innerHTML = " " + day + "/" + month + "/" + year + " ";
        };

    document.onclick = function (ev) {
        switch (ev.target) {
            case saveForm:
                    ev.stopPropagation();
                    saveClient();
                break;
            case plus:
                    newClient(ev.target);
                break;
            case closecli:
                    closeClient();
                break;
            case savecli:
                    closeClient();
                    saveClient();
                 break;
            case massetup:
                    newClient(ev.target);
                break;
            case moresetup:
                    newClient(ev.target);
                break;
            case masclient:
                    newClient(ev.target);
                break;
            case moreclient:
                    newClient(ev.target);
                break;
            case masconcept:
                    masConcept();
                break;
            default:

        }
    };

    getNow();
    document.getElementById('nobill').innerHTML = getNoBill();
    //getClients();
};

window.onload = function () {
    'use strict';

    init();
};
