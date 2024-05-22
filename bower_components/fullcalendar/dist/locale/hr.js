!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, a) {
  !(function () {
    function e(e, a, t) {
      var n = e + " ";
      switch (t) {
        case "m":
          return a ? "jedna minuta" : "jedne minute";
        case "mm":
          return (n +=
            1 === e
              ? "minuta"
              : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
        case "h":
          return a ? "jedan sat" : "jednog sata";
        case "hh":
          return (n +=
            1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
        case "dd":
          return (n += 1 === e ? "dan" : "dana");
        case "MM":
          return (n +=
            1 === e
              ? "mjesec"
              : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
        case "yy":
          return (n +=
            1 === e
              ? "godina"
              : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
      }
    }
    a.defineLocale("hr", {
      months: {
        format:
          "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
            "_",
          ),
        standalone:
          "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
            "_",
          ),
      },
      monthsShort:
        "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[jučer u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
              return "[prošlu] dddd [u] LT";
            case 6:
              return "[prošle] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prošli] dddd [u] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: "dan",
        dd: e,
        M: "mjesec",
        MM: e,
        y: "godinu",
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 7 },
    });
  })(),
    e.fullCalendar.datepickerLocale("hr", "hr", {
      closeText: "Zatvori",
      prevText: "&#x3C;",
      nextText: "&#x3E;",
      currentText: "Danas",
      monthNames: [
        "Siječanj",
        "Veljača",
        "Ožujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac",
      ],
      monthNamesShort: [
        "Sij",
        "Velj",
        "Ožu",
        "Tra",
        "Svi",
        "Lip",
        "Srp",
        "Kol",
        "Ruj",
        "Lis",
        "Stu",
        "Pro",
      ],
      dayNames: [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "Četvrtak",
        "Petak",
        "Subota",
      ],
      dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
      dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
      weekHeader: "Tje",
      dateFormat: "dd.mm.yy.",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.fullCalendar.locale("hr", {
      buttonText: {
        prev: "Prijašnji",
        next: "Sljedeći",
        month: "Mjesec",
        week: "Tjedan",
        day: "Dan",
        list: "Raspored",
      },
      allDayText: "Cijeli dan",
      eventLimitText: function (e) {
        return "+ još " + e;
      },
      noEventsMessage: "Nema događaja za prikaz",
    });
});
