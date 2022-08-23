//   _ __  _ __(_) ___ ___  _ __  ___
//  | '_ \| '__| |/ __/ _ \| '_ \/ __|
//  | |_) | |  | | (_| (_) | | | \__ \
//  | .__/|_|  |_|\___\___/|_| |_|___/
//  |_|

//  an extension that adds the most common 
//  pride flags to all sites, because
//  unicode won't.

//  powered by bad dumb code


window.onload = () => {
    console.log("pricons is running on this page!");
    setInterval(tick, 0);
    window.pricons = {
        version: "v1.0",
        api: [
            {
                changeUpdateRate: function(rate) {
                    window.pricons.internal.updateRate = rate;
                },
                setEnabled: function(enabled) {
                    window.pricons.internal.enabled = enabled;
                }
            }
        ],
        internal: {
            updateCounter:0,
            updateRate:0,
            enabled:true,
            icons: {
                enby: "https://www.prideflags.org/static/search/data/img/nonbinary_pride_flag.svg",
                progress: "https://www.prideflags.org/static/search/data/img/progress_pride_flag.svg",
                agender: "https://www.prideflags.org/static/search/data/img/agender_pride_flag.svg",
                agender9: "https://www.prideflags.org/static/search/data/img/agender_pride_flag_9_stripe.svg",
                agenderDotInfo: "https://www.prideflags.org/static/search/data/img/agender_pride_flag_agender_info.svg",
                aromantic: "https://www.prideflags.org/static/search/data/img/aromantic_pride_flag.svg",
                ase: "https://www.prideflags.org/static/search/data/img/asexual_pride_flag.svg",
                bear: "https://www.prideflags.org/static/search/data/img/bear_pride_flag.svg",
                bigender: "https://www.prideflags.org/static/search/data/img/bigender_pride_flag.svg",
                bigender7: "https://www.prideflags.org/static/search/data/img/bigender_pride_flag_7_stripe.svg",
                bi: "https://www.prideflags.org/static/search/data/img/bisexual_pride_flag.svg",
                bxy: "https://www.prideflags.org/static/search/data/img/bxy_pride_flag.svg",
                demiboy: "https://www.prideflags.org/static/search/data/img/demiboy_pride_flag.svg",
                demigirl: "https://www.prideflags.org/static/search/data/img/demigirl_pride_flag.svg",
                demiromantic: "https://www.prideflags.org/static/search/data/img/demiromantic_pride_flag.svg",
                demisexual: "https://www.prideflags.org/static/search/data/img/demisexual_pride_flag.svg",
                doe: "https://www.prideflags.org/static/search/data/img/doe_pride_flag.svg",
                gay: "https://www.prideflags.org/static/search/data/img/gay_pride_1979.svg",
                phili: "https://www.prideflags.org/static/search/data/img/gay_pride_flag_philadelphia.svg",
                gayuk: "https://www.prideflags.org/static/search/data/img/gay_pride_flag_uk.svg",
                gendercreative: "https://www.prideflags.org/static/search/data/img/gendercreative_pride_flag.svg",
                genderfluid: "https://www.prideflags.org/static/search/data/img/genderfluid_pride_flag.svg",
                genderflux: "https://www.prideflags.org/static/search/data/img/genderflux_pride_flag.svg",
                genderqueer: "https://www.prideflags.org/static/search/data/img/genderqueer_pride_flag.svg",
                gxrl: "https://www.prideflags.org/static/search/data/img/gxrl_pride_flag.svg",
                intersex: "https://www.prideflags.org/static/search/data/img/intersex_pride_flag.svg",
                natalie: "https://www.prideflags.org/static/search/data/img/bigender_pride_flag.svg",
                lesbianfem: "https://www.prideflags.org/static/search/data/img/lesbian_pride_flag_labrys.svg",
                lesbianpride: "https://www.prideflags.org/static/search/data/img/lesbian_pride_flag_rainbow.svg",
                lesbiankiss: "https://www.prideflags.org/static/search/data/img/lipstick_lesbian_pride_flag_with_kiss.svg",
                lesbian: "https://www.prideflags.org/static/search/data/img/lipstick_lesbian_pride_flag_without_kiss.svg",
                littlefluid: "https://www.prideflags.org/static/search/data/img/littlefluid_pride_flag.svg",
                neutrois: "https://www.prideflags.org/static/search/data/img/neutrois_pride_flag.svg",
                enbypride: "https://www.prideflags.org/static/search/data/img/nonbinary_pride_flag_transrants.svg",
                nxnbinary: "https://www.prideflags.org/static/search/data/img/nxnbinary_pride_flag.svg",
                nxnbinarygreen: "https://www.prideflags.org/static/search/data/img/nxnbinary_pride_flag_green.svg",
                nxnbinarypride: "https://www.prideflags.org/static/search/data/img/nxnbinary_pride_flag_purple.svg",
                pangenderwhite: "https://www.prideflags.org/static/search/data/img/pangender_pride_flag_white_center.svg",
                pangenderyellow: "https://www.prideflags.org/static/search/data/img/pangender_pride_flag_yellow_center.svg",
                pan: "https://www.prideflags.org/static/search/data/img/pansexual_pride_flag.svg",
                pocket: "https://www.prideflags.org/static/search/data/img/pocket_gender_pride_flag.svg",
                pocketpride: "https://www.prideflags.org/static/search/data/img/pocket_gender_pride_flag_sleepygender.svg",
                poly: "https://www.prideflags.org/static/search/data/img/polysexual_pride_flag.svg",
                transby: "https://www.prideflags.org/static/search/data/img/new_trans_nonbinary_bbipoc_flag.svg",
                intertrans: "https://www.prideflags.org/static/search/data/img/trans_intersex_pride_flag.svg",
                newprideflag: "https://www.prideflags.org/static/search/data/img/new_queer_trans_pride_flag.svg",
                trans: "https://www.prideflags.org/static/search/data/img/transgender_pride_flag.svg",
                isrealtrans: "https://www.prideflags.org/static/search/data/img/transgender_pride_flag_israel.svg",
                transpride: "https://www.prideflags.org/static/search/data/img/transgender_pride_flag_jennifer.svg",
            }
        }
    }
}

//  this runs every frame.

function tick() {
    if (!pricons.internal.enabled) { return; }
    pricons.internal.updateCounter++;
    if (pricons.internal.updateCounter > pricons.internal.updateRate) {
        pricons.internal.updateCounter = 0;
        var nodes = document.getElementsByTagName("*");
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].children.length == 0) {
                for (var name in pricons.internal.icons) {
                    if (!nodes[i].querySelector("script") && !isContentEditable(nodes[i])) {
                        if (nodes[i].innerHTML.includes(":" + name + ":")) {
                            nodes[i].innerHTML = nodes[i].innerHTML.split(":" + name + ":").join("<img src='" + pricons.internal.icons[name] + "' style='height:1em;'>");
                        }
                    }
                }
            }
        }
    }
}

function isContentEditable(node) {
    if (node.isContentEditable) {
        return true;
    }
    if (node.parent && isContentEditable(node.parent)) {
        return true;
    }
    return false;
}

function fixElement(node, name) {
    if (node.data.includes(':' + name + ':')) {
        console.log(node.data);
        node.data = node.data.split(':' + name + ':').join(`<img src="${prideFlags[name]}" style="height:1em;border-radius:1px;">`);
    }
}