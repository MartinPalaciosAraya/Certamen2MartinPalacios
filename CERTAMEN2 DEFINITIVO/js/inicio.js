define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    $('#button').on('click', function (event) {
        if ($('#form').attr('style') == 'display: none;') {
            $('#form').show();
            $('#textoantecedentes').hide();
        }
        else {
            $('#textoantecedentes').show();
            $('form').hide();
        }
    });
    $('#motivos').on('click', function (event) {
        if ($('#datosclinicos').attr('style') == 'display: none;') {
            $('#datosclinicos').show();
        }
        else {
            $('#datosclinicos').hide();
        }
    });
    function ValidarRut(valor) {
        var tmp = valor.split('-');
        var digito = tmp[1];
        var rut = tmp[0];
        if (digito == 'K')
            digito = 'k';
        var M = 0, S = 1;
        for (; rut; rut = Math.floor(rut / 10))
            S = (S + rut % 10 * (9 - M++ % 6)) % 11;
        console.log(S ? S - 1 : 'k');
        return S ? S - 1 : 'k';
    }
    (function () {
        var nombreCompleto = document.getElementById("nombrecompleto");
        var telefono = document.getElementById("telefono");
        var rut = document.getElementById("rut");
        var email = document.getElementById("email");
        telefono.maxLength = "9";
        rut.pattern = "^[0-9]{8}-[0-9Kk]{1}$";
        var campos = document.getElementById("campos");
        console.log(nombreCompleto.value);
        // obtener los formularios 
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    if (nombreCompleto.value == "") {
                        campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                    }
                    if (rut.value == "") {
                        campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                    }
                    if (ValidarRut(rut.value) > 1) {
                        campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Rut no válido";
                    }
                    event.preventDefault();
                    event.stopPropagation();
                }
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }, false);
        });
    })();
    $("#reg").on('change', function () {
        $("#city").empty();
        if ($(this).val() === "Antofagasta") {
            $("#city").append('<option value="Antofagasta">Antofagasta</option>');
            $("#city").append('<option value="Calama">Calama</option>');
        }
        if ($(this).val() === "Tarapaca") {
            $("#city").append('<option value="Iquique">Iquique</option>');
            $("#city").append('<option value="Arica">Arica</option>');
        }
        if ($(this).val() === "Santiago") {
            $("#city").append('<option value="Pudahuel">Pudahuel</option>');
            $("#city").append('<option value="Chicureo">Chicureo</option>');
        }
    });
});
