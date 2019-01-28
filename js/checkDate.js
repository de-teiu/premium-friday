/**
 * 今日がプレミアムフライデーかどうかを判別する
 */
function isPremiumFriday() {
  var lastFriday = getLastFriday();
  var today = new Date();
  return compare(lastFriday,today);
}

/** 最終日取得 */
function getLastDay(){
  var dt = new Date();
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
}

/** 当月の最終金曜日を取得 */
function getLastFriday(){
  var day = getLastDay();

  while(day.getDay()!=5){
    day.setDate(day.getDate()-1);
  }
  return day;
}

/** 日付の同一チェック */
function compare(date1,date2){
  var year1 = date1.getFullYear();
  var month1 = date1.getMonth();
  var day1 = date1.getDate();
  var year2 = date2.getFullYear();
  var month2 = date2.getMonth();
  var day2 = date2.getDate();
  return (year1 === year2 && month1 === month2 && day1 === day2);
}
