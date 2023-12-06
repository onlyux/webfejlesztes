let eredmeny = 0;

function quiz() {

    if (document.getElementById("i_d").checked) {
        eredmeny++;
    }

    if (document.getElementById("pi").checked) {
        eredmeny++;
    }

    if (document.getElementById("datum").value == "2021-11-06") {
        eredmeny++;
    }

    if (document.getElementById("heimerdinger_kor").value == 307) {
        eredmeny++;
    }

    if (document.getElementById("st").checked) {
        eredmeny++;
    }

    document.getElementById("quiz_eredmeny").innerText = (`Az eredményed: ${eredmeny}/5`);

    eredmeny = 0;
};

$(document).ready(function () {
    $("#kritika_form").validate({
        rules: {
            elso_skala: {
                required: true,
                max: 5
            },
            masodik_skala: {
                required: true,
                max: 5
            },
            harmadik_skala: {
                required: true,
                max: 5
            },
            negyedik_skala: {
                required: true,
                max: 5
            },
            otodik_skala: {
                required: true,
                max: 5
            },
            hatodik_skala: {
                required: true,
                max: 5
            },
            hetedik_skala: {
                required: true,
                max: 5
            },
            nyolcadik_skala: {
                required: true,
                max: 5
            },
            kilencedik_skala: {
                required: true,
                max: 5
            },
            kiemeles: "required",
            kedvenc_karakter: "required",
            kedvenc_karakter_miert: "required",
            ajanlas: "required"
        },

        messages: {
            elso_skala: " Kérlek, válassz egy opciót! ",
            masodik_skala: " Kérlek, válassz egy opciót! ",
            harmadik_skala: " Kérlek, válassz egy opciót! ",
            negyedik_skala: " Kérlek, válassz egy opciót! ",
            otodik_skala: " Kérlek, válassz egy opciót! ",
            hatodik_skala: " Kérlek, válassz egy opciót! ",
            hetedik_skala: " Kérlek, válassz egy opciót! ",
            nyolcadik_skala: " Kérlek, válassz egy opciót! ",
            kilencedik_skala: " Kérlek, válassz egy opciót! ",
            kiemeles: " Kérlek, töltsd ki a MEZŐT! ",
            kedvenc_karakter: " Kérlek, válassz egy karakter! ",
            kedvenc_karakter_miert: " Kérlek, töltsd ki a MEZŐT! ",
            ajanlas: " Kérlek, válassz egy opciót! "
        },
    });
});