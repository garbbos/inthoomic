var init = function () {
    'use strict';
    console.log('Thoomic.com running...');

    var clientDB = [],
        btnnew = document.getElementById('btnnew'),
        newcli = document.getElementById('newcli'),
        savecli = document.getElementById('savecli'),
        comment = document.getElementById('comment'),
        about = document.getElementById('about'),
        popup = document.getElementById('popup'),
        massetup = document.getElementById('massetup'),
        masconcept = document.getElementById('masconcept'),
        barrabills = document.getElementById('barrabills'),
        bodybills = document.getElementById('bodybills'),
        marcobills = document.getElementById('marcobills'),
        masclient = document.getElementById('masclient'),
        concept = document.getElementById('concept'),
        desc = document.getElementById('desc'),
        qty = document.getElementById('qty'),
        unit = document.getElementById('unit'),
        total = document.getElementById('total'),
        displayAbout = function () {
            popup.style.bottom = "45%";
        },
        newClient = function (ev) {
            console.log("newClient() " + ev.id);
            newcli.style.bottom = "20%";
        },
        masConcept = function () {
            console.log("masConcept()");
        },
        saveClient = function () {
            console.log("saveClient()");
            closeClient();
        },
        closeClient = function () {
            newcli.style.bottom = "-100%";
        },
        closePopup = function () {
            popup.style.bottom = "-100%";
        },

        getNow = function () {
            var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), fecha = document.getElementById('fecha');

            fecha.innerHTML = " " + day + "/" + month + "/" + year + " ";
        },

        setCli = function (data) {
            var mydiv = document.createElement("div"), link = document.createElement("a");

            mydiv.setAttribute("class", "datos colorback");

            link.setAttribute("href", "#");
            link.setAttribute("id", "concept");
            link.setAttribute("class", "btn datos");
            link.innerHTML = data;

            mydiv.appendChild(link);
            marcobills.appendChild(mydiv);
        },

        setDetails = function (data) {
            var x, mydiv = document.createElement("div"), link = document.createElement("a");

            for (x in data) {
                if (data.hasOwnProperty(x)) {
                    mydiv.setAttribute("class", "tablaitem");
                    link.setAttribute("href", "#");
                    link.setAttribute("id", x);
                    link.innerHTML = data[x];
                    mydiv.appendChild(link);
                }
            }

            marcobills.appendChild(mydiv);
        },

        reclients = function (data) {

            if (data.name) {
                clientDB.push(data);
                console.log("reclients() " + clientDB.length);

                setCli(data.name);
                setDetails(data);
            } else {
                setCli("There is no clients, add it.");
            }
        },

        getClients = function () {
            var num = 0, totaldb = document.getElementById('totaldb'), db = {NAME: "CliThoomicDB", VERSION: 1};

            clientDB = [];
        	openDB.odb.open(db, "", reclients, 'read');

            num = clientDB.length - 1;
            if (num >= 0) {
                totaldb.innerHTML = num;
            }
        };

        getNow();
        getClients();

    document.onclick = function (ev) {
        switch (ev.target) {
            case saveForm:
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
            case about:
                    console.log('about()');
                    displayAbout();
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
                closeClient();
                closePopup();
        }
    };
};

window.onload = function () {
    'use strict';


    init();
};
