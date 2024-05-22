!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("jquery"), require("moment")))
      : e(jQuery, moment);
})(function (e, t) {
  !(function () {
    function e(e, t) {
      var d = e.split("_");
      return t % 10 == 1 && t % 100 != 11
        ? d[0]
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
          ? d[1]
          : d[2];
    }
    function d(t, d, a) {
      var _ = {
        mm: d ? "минута_минуты_минут" : "минуту_минуты_минут",
        hh: "час_часа_часов",
        dd: "день_дня_дней",
        MM: "месяц_месяца_месяцев",
        yy: "год_года_лет",
      };
      return "m" === a ? (d ? "минута" : "минуту") : t + " " + e(_[a], +t);
    }
    var a = [
      /^янв/i,
      /^фев/i,
      /^мар/i,
      /^апр/i,
      /^ма[йя]/i,
      /^июн/i,
      /^июл/i,
      /^авг/i,
      /^сен/i,
      /^окт/i,
      /^ноя/i,
      /^дек/i,
    ];
    t.defineLocale("ru", {
      months: {
        format:
          "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
            "_",
          ),
        standalone:
          "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
            "_",
          ),
      },
      monthsShort: {
        format:
          "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
            "_",
          ),
        standalone:
          "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
            "_",
          ),
      },
      weekdays: {
        standalone:
          "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
            "_",
          ),
        format:
          "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
            "_",
          ),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
      },
      weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
      weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      monthsRegex:
        /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsShortRegex:
        /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsStrictRegex:
        /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
      monthsShortStrictRegex:
        /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., HH:mm",
        LLLL: "dddd, D MMMM YYYY г., HH:mm",
      },
      calendar: {
        sameDay: "[Сегодня в] LT",
        nextDay: "[Завтра в] LT",
        lastDay: "[Вчера в] LT",
        nextWeek: function (e) {
          if (e.week() === this.week())
            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
          switch (this.day()) {
            case 0:
              return "[В следующее] dddd [в] LT";
            case 1:
            case 2:
            case 4:
              return "[В следующий] dddd [в] LT";
            case 3:
            case 5:
            case 6:
              return "[В следующую] dddd [в] LT";
          }
        },
        lastWeek: function (e) {
          if (e.week() === this.week())
            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
          switch (this.day()) {
            case 0:
              return "[В прошлое] dddd [в] LT";
            case 1:
            case 2:
            case 4:
              return "[В прошлый] dddd [в] LT";
            case 3:
            case 5:
            case 6:
              return "[В прошлую] dddd [в] LT";
          }
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "через %s",
        past: "%s назад",
        s: "несколько секунд",
        m: d,
        mm: d,
        h: "час",
        hh: d,
        d: "день",
        dd: d,
        M: "месяц",
        MM: d,
        y: "год",
        yy: d,
      },
      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM: function (e) {
        return /^(дня|вечера)$/.test(e);
      },
      meridiem: function (e, t, d) {
        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function (e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
            return e + "-й";
          case "D":
            return e + "-го";
          case "w":
          case "W":
            return e + "-я";
          default:
            return e;
        }
      },
      week: { dow: 1, doy: 7 },
    });
  })(),
    e.fullCalendar.datepickerLocale("ru", "ru", {
      closeText: "Закрыть",
      prevText: "&#x3C;Пред",
      nextText: "След&#x3E;",
      currentText: "Сегодня",
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      monthNamesShort: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],
      dayNames: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
      ],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.fullCalendar.locale("ru", {
      buttonText: {
        month: "Месяц",
        week: "Неделя",
        day: "День",
        list: "Повестка дня",
      },
      allDayText: "Весь день",
      eventLimitText: function (e) {
        return "+ ещё " + e;
      },
      noEventsMessage: "Нет событий для отображения",
    });
});
