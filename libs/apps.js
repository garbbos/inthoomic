window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var formulario = document.getElementById('introform'),
    qty = document.getElementById('quantity'),
    price = document.getElementById('price'),
    total = document.getElementById('total'),
    status = document.getElementById('status'),

    texto = function (mn) {
        if (mn) {
            msg.innerHTML = mn;
            status.style.opacity = 1;
            setTimeout(function () { status.style.opacity = 0; }, 3000);
            window.console.log(mn);
        }
    },

    loadInput = function (item, data) {
        if (item.innerHTML.length < 7) {
            item.innerHTML = "";
            item.innerHTML += data.value ;
        } else {
            data.style.background = "orange";
            data.value = item.innerHTML;
            texto("Exceeded maximum value");
        }
    },

    totalConcept = function () {
        if (formulario.cantidad.value && formulario.precio.value) {
            total.innerHTML = formulario.cantidad.value * formulario.precio.value;
        } else {
            texto("Cantidad " + (formulario.cantidad.value || 0) + ", Precio " + (formulario.precio.value || 0));
        }
    },

    getNow  = function () {
        var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), fecha = document.getElementById('fecha');

        fecha.innerHTML = " " + day + "/" + month + "/" + year + " ";
    };

    console.log("Thoomic... DOMContentLoaded");



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


        case 'moresetup':
                newClient(ev.target);
            break;
        case masclient:
                newClient(ev.target);
            break;
        case moreclient:
                newClient(ev.target);
            break;

        default:

        }
    };

    formulario.oninput = function (ev) {
        console.log("Event " + ev.target.name + " " + qty.innerHTML);
        switch (ev.target.name) {
            case 'cantidad':
                loadInput(qty, ev.target);
                break;
            case 'precio':
                loadInput(price, ev.target);
                break;
        }
    };

    formulario.onclick = function (ev) {
        console.log("Click event " + ev.target.name);

        switch (ev.target.name) {
            case 'button':
                totalConcept();
                break;
            default:

        }
    };

    formulario.precio.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 13:
                totalConcept();
                break;
            default:

        }
    });

    formulario.cantidad.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 13:
                totalConcept();
                break;
            default:

        }
    });

    getNow();
});
