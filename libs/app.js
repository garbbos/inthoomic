var db = {NAME: "ClientsThoomicDB", VERSION: 1},
    clientDB = [],
    newcli = document.getElementById('newcli'),
    savecli = document.getElementById('savecli'),
    comment = document.getElementById('comment'),
    massetup = document.getElementById('massetup'),
    masconcept = document.getElementById('masconcept'),
    barrabills = document.getElementById('barrabills'),
    concept = document.getElementById('concept'),
    desc = document.getElementById('description'),
    qty = document.getElementById('quantity'),
    price = document.getElementById('unit'),
    total = document.getElementById('total'),
    formnew = document.getElementById('formnew'),
    status = document.getElementById('status'),
    msg = document.getElementById('msg'),
    formulario = document.getElementById('introform'),

    validar = function (data) {
        'use strict';
        var oso = document.getElementById('oso'), resultado = document.getElementById('resultado');

        console.log("validar" + data.elements[0].name);

        if (data.elements[0].value) {
            qty.innerHTML = data.elements[0].value;

            resultado.innerHTML = data.elements[0].value * data.elements[1].value;
        }
    },

    mostrarCli = function (data) {
        'use strict';
        console.log("mostrarCli() " + JSON.stringify(data.href));
    },

    newClient = function (ev) {
        'use strict';
        console.log("newClient() " + ev.id);
        newcli.style.bottom = "20%";
        plus.src = "img/bise.svg";
    },

    closeClient = function () {
        'use strict';
        newcli.style.bottom = "-100%";
    },

    saveClient = function () {
        'use strict';
        var x, cliente = {};

        console.log("saveClient()");

        for (x = 0; x < formnew.elements.length; x = +1) {

            cliente[formnew.elements[x].name] = formnew.elements[x].value;
            console.log("Element " + x + " save " + formnew.elements[x].value);
        }
        openDB.odb.open(db, cliente, texto, 'add');
        plus.src = "img/plus.svg";
        closeClient();
        getClients();
    },

    reClients = function (data) {
        'use strict';
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
        'use strict';
        clientDB = [];
        openDB.odb.open(db, "", reClients, 'read');
    },

    getNoBill = function () {
        'use strict';
        var no = 0;

        no = Number(localStorage.getItem('nobill'));
        if (no === 'number') {
            no = no + 1;
        } else {
            no = 1;
        }
        return no;
    },

    setNoBill = function (data) {
        'use strict';
        if (data === 'number') {
            localStorage.setItem('nobill', data);
        }
    },

    texto = function (mn) {
        'use strict';
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

        var masConcept = function () {
            console.log("masConcept()");
        };

        var closePopup = function () {
            popup.style.bottom = "-100%";
        };

        var getNow = function () {
            var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), fecha = document.getElementById('fecha');

            fecha.innerHTML = " " + day + "/" + month + "/" + year + " ";
        };

        
        document.getElementById('nobill').innerHTML = getNoBill();
        //getClients();
    };

window.onload = function () {
    'use strict';

    init();
};
