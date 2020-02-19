import React from 'react';
import classes from './Calendar.module.scss'

const Calendar = () => {

  const months = [
    { month: 'Январь', days: '31' },
    { month: 'Февраль', days: '29' },
    { month: 'Март', days: '31' },
    { month: 'Апрель', days: '30' },
    { month: 'Май', days: '31' },
    { month: 'Июнь', days: '30' },
    { month: 'Июль', days: '31' },
    { month: 'Август', days: '31' },
    { month: 'Сентябрь', days: '30' },
    { month: 'Октябрь', days: '31' },
    { month: 'Ноябрь', days: '30' },
    { month: 'Декабрь', days: '31' }
  ]

  const dates = (days, firstDay) => new Array(days)
    .fill('')
    .map((_, i) => i + firstDay)

  const today = new Date();
  const thisMonthDaysCount = months[today.getMonth()].days;
  const bookingHref = 'https://clients.aihelps.com/110043'
  const FIRST_DAY = 1;
  const DAY_PER_WEEK = 7;

  const getPrevMonth = () => {
    const firstDateOfThisMonth = new Date(today.getFullYear(), today.getMonth(), FIRST_DAY);
    const prevMonthDaysCount = months[today.getMonth() - 1].days;
    const lastWeekDayOfPrevMonth = firstDateOfThisMonth.getDay() - 1;
    const prevMonth = dates(lastWeekDayOfPrevMonth, prevMonthDaysCount - lastWeekDayOfPrevMonth + 1)
    return prevMonth
  }


  const getNextMonth = () => {
    const lastDateOfThisMonth = new Date(today.getFullYear(), today.getMonth(), thisMonthDaysCount)
    const lastWeekDayOfThisMonth = lastDateOfThisMonth.getDay()
    const nextMonth = dates(DAY_PER_WEEK - lastWeekDayOfThisMonth, FIRST_DAY)
    return nextMonth
  }
  
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    .map((item, i) =>
      <div className={classes.week} key={'week' + i}>{item}</div>
    )

  const prevMonth = getPrevMonth().map((date, i) =>
    <a href={bookingHref} tabIndex='-1' key={'prevMonth' + i}>{date}</a>
  )

  const thisMonth = dates(+thisMonthDaysCount, FIRST_DAY).map((date, i) => {
    let cls = classes.past
    let tabIndex = '-1';
    if (date >= today.getDate()) {
      cls = classes.present
      tabIndex = '0';
    }
    return (
      <a href={bookingHref} tabIndex={tabIndex} className={cls} key={'date' + i}>{date}</a>
    )
  })

  const nextMonth = getNextMonth().map((date, i) =>
    <a href={bookingHref} tabIndex='-1' className={classes.future} key={'nextMonth' + i}>{date}</a>
  )

  return (
    <div className={classes.Calendar}>
      <h3 className={classes.month}>{months[today.getMonth()].month}</h3>
      {week}
      {prevMonth}
      {thisMonth}
      {nextMonth}
    </div>
  );
}

export default Calendar;
