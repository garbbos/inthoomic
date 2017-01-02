window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var limite,
    veces = 0,
    vectorbill = {},
    newbill = [],
    formulario = document.getElementById('introform'),
    currency = document.getElementById('currency'),
    nobill = document.getElementById('nobill'),
    timestamp = document.getElementById('timestamp'),
    hora = document.getElementById('hora'),
    description = document.getElementById('description'),
    qty = document.getElementById('quantity'),
    price = document.getElementById('price'),
    total = document.getElementById('total'),
    subtotal = document.getElementById('subtotal'),
    status = document.getElementById('status'),

    texto = function (mn) {
        if (mn) {
            msg.innerHTML = mn;
            status.style.opacity = 1;
            setTimeout(function () { status.style.opacity = 0; }, 3000);
            window.console.log(mn);
        }
    },

    borrarForm = function () {
        formulario.cantidad.value = "";
        formulario.cantidad.style.background = "#ffffff";
        formulario.precio.value = "";
        formulario.precio.style.background = "#ffffff";
        formulario.descripcion.value = "";
        formulario.descripcion.focus();
    },

    loadInput = function (myinput, value) {
        if (myinput.value > value) {
            myinput.style.background = "orange";
            texto("Exceeded maximum value");
            myinput.value = limite;
        } else {
            limite = myinput.value;
        }
    },

    totalConcept = function () {
        function addRow() {
            var mytotal, mydiv, spandesc, spantime, spanqty, spanprice, spantotal, cuerpo = document.getElementById('cuerpo');

            veces += 1;
            if (veces < 9) {
                mydiv = document.createElement("div");
                mydiv.setAttribute("class", "bodybill");
                spantime = document.createElement("span");
                spantime.setAttribute("class", "italica");
                spantime.innerHTML = hora.innerHTML;
                mydiv.appendChild(spantime);

                spandesc = document.createElement("span");
                spandesc.setAttribute("class", "items");
                spandesc.innerHTML = formulario.descripcion.value;
                mydiv.appendChild(spandesc);
                spanqty = document.createElement("span");
                spanqty.setAttribute("class", "items");
                spanqty.innerHTML = formulario.cantidad.value;
                mydiv.appendChild(spanqty);
                spanprice = document.createElement("span");
                spanprice.setAttribute("class", "items");
                spanprice.innerHTML = formulario.precio.value;
                mydiv.appendChild(spanprice);
                spantotal = document.createElement("span");
                spantotal.setAttribute("class", "items");
                spantotal.innerHTML =formulario.precio.value * formulario.cantidad.value;
                mydiv.appendChild(spantotal);

                cuerpo.appendChild(mydiv);

                if (subtotal.innerHTML === "0") {
                    subtotal.innerHTML = spantotal.innerHTML;
                } else {
                    subtotal.innerHTML = Number(subtotal.innerHTML) + Number(spantotal.innerHTML);
                }
                borrarForm();
            } else {
                texto("Invoice complete, add another sheet");
            }
        }

        if (formulario.cantidad.value && formulario.precio.value) {
            addRow();
        } else {
            texto("Cantidad " + (formulario.cantidad.value || 0) + ", Precio " + (formulario.precio.value || 0));
        }
    },

    totalizarBill = function () {
        console.log("Totalizar function...");
        if (formulario.cantidad.value && formulario.precio.value) {
            localStorage.setItem('nobill', (nobill.innerHTML || "0000001"));
        }
    },

    getNow  = function () {
        var d, m, s, date = new Date(), day = date.getDate(), month = (date.getMonth() + 1), year = date.getFullYear(), fecha = document.getElementById('fecha');

        function formatea(data) {
            if (data || "00") {
                if (data < 10) {
                    return ("0" + data);
                } else {
                    return data;
                }
            }
        }

        function setHora() {
            date = new Date();
            d = formatea(date.getHours());
            m = formatea(date.getMinutes());
            s = formatea(date.getSeconds());

            hora.innerHTML = d + ":" + date.getMinutes() + ":" + s;
        }

        setInterval(function () { setHora(); }, 1000);
        fecha.innerHTML = " " + day + "/" + month + "/" + year + " ";
    };

    console.log("Thoomic... DOMContentLoaded");

    document.onclick = function (ev) {
        switch (ev.target) {
        case saveForm:
                ev.stopPropagation();
                saveClient();
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
        switch (ev.target.name) {
            case 'cantidad':
                loadInput(formulario.cantidad, 9999);
                break;
            case 'precio':
                loadInput(formulario.precio, 9999999);
                break;
        }
    };

    formulario.onclick = function (ev) {
        console.log("Click event " + ev.target.name);

        switch (ev.target.name) {
            case 'button':
                totalConcept();
                break;
            case 'totalizar':
                totalizarBill();
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


    currency.addEventListener('change', function () {
        localStorage.setItem('currency', currency.selectedIndex);
        texto("Currency " + currency.options[currency.selectedIndex].value);
    });

    currency.selectedIndex = localStorage.getItem('currency');

    nobill.innerHTML = localStorage.getItem('nobill');

    getNow();
});
