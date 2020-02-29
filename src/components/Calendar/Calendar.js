import React, { useState } from 'react';
import classes from './Calendar.module.scss'
import SliderButton from '../UI/SliderButton/SliderButton';

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
  const [currentDate, setCurrentDate] = useState(today);
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const thisMonthDaysCount = months[currentMonth].days;
  const bookingHref = 'https://clients.aihelps.com/110043';
  const FIRST_DAY = 1;
  const DAY_PER_WEEK = 7;


  const getWeekDay = (weekDay) => {
    if (weekDay > 6) {
      return 1
    }
    if (weekDay < 0) {
      return 6
    }
    return weekDay
  }

  const getMonth = (month) => {
    if (month > 11) {
      return 0;
    };
    if (month < 0)  {
      return 11;
    };
    return month;
  };

  const getPrevMonth = () => {
    const firstDateOfThisMonth = new Date(currentYear, currentMonth, FIRST_DAY);
    const prevMonthDaysCount = months[getMonth(currentMonth)].days ;
    const lastWeekDayOfPrevMonth = getWeekDay(firstDateOfThisMonth.getDay() - 1);
    console.log(firstDateOfThisMonth.getDay());
    const prevMonth = dates(lastWeekDayOfPrevMonth === DAY_PER_WEEK ? 0 : lastWeekDayOfPrevMonth, prevMonthDaysCount - lastWeekDayOfPrevMonth + 1)
    return prevMonth
  }

  const getNextMonth = () => {
    const lastDateOfThisMonth = new Date(currentYear, currentMonth, thisMonthDaysCount)
    const lastWeekDayOfThisMonth = getWeekDay(lastDateOfThisMonth.getDay());
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

  const dateClickHandler = evt => {
    evt.preventDefault();
  }
  const thisMonth = dates(+thisMonthDaysCount, FIRST_DAY).map((date, i) => {
    let cls = classes.past
    let tabIndex = '-1';
    if (date >= currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()){
      cls = classes.present
      tabIndex = '0';
    } else if (currentMonth > today.getMonth() && currentYear >= today.getFullYear()) {
      cls = classes.future;
      tabIndex = '0';
    } else if (currentMonth <= today.getMonth() && currentYear > today.getFullYear()) {
      cls = classes.future;
      tabIndex = '0';
    } else if (currentMonth < today.getMonth() && currentYear <= today.getFullYear()){
      cls = classes.past;
      tabIndex = '-1';
    } 
    return (
      <a href={bookingHref} onClick={cls === classes.past ? dateClickHandler : null} tabIndex={tabIndex} className={cls} key={'date' + i}>{date}</a>
    )
  })

  const nextMonth = getNextMonth().map((date, i) =>
    <a href={bookingHref} tabIndex='-1' className={classes.nextMonth} key={'nextMonth' + i}>{date}</a>
  )

  const changeMonthToPrev = () => {
    setCurrentDate(new Date(currentYear, currentMonth -1, currentDay))
    console.log(currentDate);
  }

  const changeMonthToNext = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, currentDay))
    console.log(currentDate);
  }

  return (
    <div className={classes.Calendar}>
      <div className={classes.previous}><SliderButton text='previous' onClick={changeMonthToPrev}/></div>
      <h3 className={classes.month}>{months[currentMonth].month + ' - ' + currentYear}</h3>
      <div className={classes.next}><SliderButton text='next' onClick={changeMonthToNext}/></div>
      {week}
      {prevMonth}
      {thisMonth}
      {nextMonth}
    </div>
  );
}

export default Calendar;
