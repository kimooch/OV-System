!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, t) {
  !(function () {
    var e = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠",
      },
      a = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0",
      };
    t.defineLocale("ar-sa", {
      months:
        "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
          "_",
        ),
      monthsShort:
        "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
          "_",
        ),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
        "_",
      ),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm",
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return "م" === e;
      },
      meridiem: function (e, t, a) {
        return e < 12 ? "ص" : "م";
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات",
      },
      preparse: function (e) {
        return e
          .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return a[e];
          })
          .replace(/،/g, ",");
      },
      postformat: function (t) {
        return t
          .replace(/\d/g, function (t) {
            return e[t];
          })
          .replace(/,/g, "،");
      },
      week: { dow: 0, doy: 6 },
    });
  })(),
    e.fullCalendar.datepickerLocale("ar-sa", "ar", {
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
    e.fullCalendar.locale("ar-sa", {
      buttonText: { month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة" },
      allDayText: "اليوم كله",
      eventLimitText: "أخرى",
      noEventsMessage: "أي أحداث لعرض",
    });
});
