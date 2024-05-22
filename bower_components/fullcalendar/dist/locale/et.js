!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, a) {
  !(function () {
    function e(e, a, t, u) {
      var n = {
        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
        m: ["ühe minuti", "üks minut"],
        mm: [e + " minuti", e + " minutit"],
        h: ["ühe tunni", "tund aega", "üks tund"],
        hh: [e + " tunni", e + " tundi"],
        d: ["ühe päeva", "üks päev"],
        M: ["kuu aja", "kuu aega", "üks kuu"],
        MM: [e + " kuu", e + " kuud"],
        y: ["ühe aasta", "aasta", "üks aasta"],
        yy: [e + " aasta", e + " aastat"],
      };
      return a ? (n[t][2] ? n[t][2] : n[t][1]) : u ? n[t][0] : n[t][1];
    }
    a.defineLocale("et", {
      months:
        "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
          "_",
        ),
      monthsShort:
        "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
      weekdays:
        "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
          "_",
        ),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[Täna,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[Järgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s pärast",
        past: "%s tagasi",
        s: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: "%d päeva",
        M: e,
        MM: e,
        y: e,
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  })(),
    e.fullCalendar.datepickerLocale("et", "et", {
      closeText: "Sulge",
      prevText: "Eelnev",
      nextText: "Järgnev",
      currentText: "Täna",
      monthNames: [
        "Jaanuar",
        "Veebruar",
        "Märts",
        "Aprill",
        "Mai",
        "Juuni",
        "Juuli",
        "August",
        "September",
        "Oktoober",
        "November",
        "Detsember",
      ],
      monthNamesShort: [
        "Jaan",
        "Veebr",
        "Märts",
        "Apr",
        "Mai",
        "Juuni",
        "Juuli",
        "Aug",
        "Sept",
        "Okt",
        "Nov",
        "Dets",
      ],
      dayNames: [
        "Pühapäev",
        "Esmaspäev",
        "Teisipäev",
        "Kolmapäev",
        "Neljapäev",
        "Reede",
        "Laupäev",
      ],
      dayNamesShort: [
        "Pühap",
        "Esmasp",
        "Teisip",
        "Kolmap",
        "Neljap",
        "Reede",
        "Laup",
      ],
      dayNamesMin: ["P", "E", "T", "K", "N", "R", "L"],
      weekHeader: "näd",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.fullCalendar.locale("et", {
      buttonText: {
        month: "Kuu",
        week: "Nädal",
        day: "Päev",
        list: "Päevakord",
      },
      allDayText: "Kogu päev",
      eventLimitText: function (e) {
        return "+ veel " + e;
      },
      noEventsMessage: "Kuvamiseks puuduvad sündmused",
    });
});
