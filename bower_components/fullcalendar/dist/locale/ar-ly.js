!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, t) {
  !(function () {
    var e = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0",
      },
      d = function (e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : 2 === e
              ? 2
              : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                  ? 4
                  : 5;
      },
      r = {
        s: [
          "أقل من ثانية",
          "ثانية واحدة",
          ["ثانيتان", "ثانيتين"],
          "%d ثوان",
          "%d ثانية",
          "%d ثانية",
        ],
        m: [
          "أقل من دقيقة",
          "دقيقة واحدة",
          ["دقيقتان", "دقيقتين"],
          "%d دقائق",
          "%d دقيقة",
          "%d دقيقة",
        ],
        h: [
          "أقل من ساعة",
          "ساعة واحدة",
          ["ساعتان", "ساعتين"],
          "%d ساعات",
          "%d ساعة",
          "%d ساعة",
        ],
        d: [
          "أقل من يوم",
          "يوم واحد",
          ["يومان", "يومين"],
          "%d أيام",
          "%d يومًا",
          "%d يوم",
        ],
        M: [
          "أقل من شهر",
          "شهر واحد",
          ["شهران", "شهرين"],
          "%d أشهر",
          "%d شهرا",
          "%d شهر",
        ],
        y: [
          "أقل من عام",
          "عام واحد",
          ["عامان", "عامين"],
          "%d أعوام",
          "%d عامًا",
          "%d عام",
        ],
      },
      a = function (e) {
        return function (t, a, n, m) {
          var o = d(t),
            s = r[e][d(t)];
          return 2 === o && (s = s[a ? 0 : 1]), s.replace(/%d/i, t);
        };
      },
      n = [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];
    t.defineLocale("ar-ly", {
      months: n,
      monthsShort: n,
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
        "_",
      ),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm",
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return "م" === e;
      },
      meridiem: function (e, t, d) {
        return e < 12 ? "ص" : "م";
      },
      calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: a("s"),
        m: a("m"),
        mm: a("m"),
        h: a("h"),
        hh: a("h"),
        d: a("d"),
        dd: a("d"),
        M: a("M"),
        MM: a("M"),
        y: a("y"),
        yy: a("y"),
      },
      preparse: function (e) {
        return e.replace(/\u200f/g, "").replace(/،/g, ",");
      },
      postformat: function (t) {
        return t
          .replace(/\d/g, function (t) {
            return e[t];
          })
          .replace(/,/g, "،");
      },
      week: { dow: 6, doy: 12 },
    });
  })(),
    e.fullCalendar.datepickerLocale("ar-ly", "ar", {
      closeText: "إغلاق",
      prevText: "&#x3C;السابق",
      nextText: "التالي&#x3E;",
      currentText: "اليوم",
      monthNames: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      monthNamesShort: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      dayNames: [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ],
      dayNamesShort: [
        "أحد",
        "اثنين",
        "ثلاثاء",
        "أربعاء",
        "خميس",
        "جمعة",
        "سبت",
      ],
      dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
      weekHeader: "أسبوع",
      dateFormat: "dd/mm/yy",
      firstDay: 0,
      isRTL: !0,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.fullCalendar.locale("ar-ly", {
      buttonText: { month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة" },
      allDayText: "اليوم كله",
      eventLimitText: "أخرى",
      noEventsMessage: "أي أحداث لعرض",
    });
});
