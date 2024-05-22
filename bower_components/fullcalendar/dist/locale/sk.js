!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, t) {
  !(function () {
    function e(e) {
      return e > 1 && e < 5;
    }
    function r(t, r, a, n) {
      var o = t + " ";
      switch (a) {
        case "s":
          return r || n ? "pár sekúnd" : "pár sekundami";
        case "m":
          return r ? "minúta" : n ? "minútu" : "minútou";
        case "mm":
          return r || n ? o + (e(t) ? "minúty" : "minút") : o + "minútami";
        case "h":
          return r ? "hodina" : n ? "hodinu" : "hodinou";
        case "hh":
          return r || n ? o + (e(t) ? "hodiny" : "hodín") : o + "hodinami";
        case "d":
          return r || n ? "deň" : "dňom";
        case "dd":
          return r || n ? o + (e(t) ? "dni" : "dní") : o + "dňami";
        case "M":
          return r || n ? "mesiac" : "mesiacom";
        case "MM":
          return r || n ? o + (e(t) ? "mesiace" : "mesiacov") : o + "mesiacmi";
        case "y":
          return r || n ? "rok" : "rokom";
        case "yy":
          return r || n ? o + (e(t) ? "roky" : "rokov") : o + "rokmi";
      }
    }
    var a =
        "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
          "_",
        ),
      n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    t.defineLocale("sk", {
      months: a,
      monthsShort: n,
      weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
        "_",
      ),
      weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nedeľu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo štvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[včera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulú nedeľu o] LT";
            case 1:
            case 2:
              return "[minulý] dddd [o] LT";
            case 3:
              return "[minulú stredu o] LT";
            case 4:
            case 5:
              return "[minulý] dddd [o] LT";
            case 6:
              return "[minulú sobotu o] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: r,
        m: r,
        mm: r,
        h: r,
        hh: r,
        d: r,
        dd: r,
        M: r,
        MM: r,
        y: r,
        yy: r,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: { dow: 1, doy: 4 },
    });
  })(),
    e.fullCalendar.datepickerLocale("sk", "sk", {
      closeText: "Zavrieť",
      prevText: "&#x3C;Predchádzajúci",
      nextText: "Nasledujúci&#x3E;",
      currentText: "Dnes",
      monthNames: [
        "január",
        "február",
        "marec",
        "apríl",
        "máj",
        "jún",
        "júl",
        "august",
        "september",
        "október",
        "november",
        "december",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Máj",
        "Jún",
        "Júl",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
      dayNames: [
        "nedeľa",
        "pondelok",
        "utorok",
        "streda",
        "štvrtok",
        "piatok",
        "sobota",
      ],
      dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
      dayNamesMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
      weekHeader: "Ty",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.fullCalendar.locale("sk", {
      buttonText: {
        month: "Mesiac",
        week: "Týždeň",
        day: "Deň",
        list: "Rozvrh",
      },
      allDayText: "Celý deň",
      eventLimitText: function (e) {
        return "+ďalšie: " + e;
      },
      noEventsMessage: "Žiadne akcie na zobrazenie",
    });
});