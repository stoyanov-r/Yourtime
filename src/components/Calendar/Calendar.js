import React, { useState } from 'react';

import classes from './Calendar.module.scss';
import SliderButton from '../UI/SliderButton/SliderButton';

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
];

const dates = (days, firstDay) => new Array(days)
  .fill('')
  .map((_, i) => i + firstDay);

const today = new Date();
const bookingHref = 'https://clients.aihelps.com/110043';
const FIRST_DAY = 1;
const DAY_PER_WEEK = 7;

const getWeekDay = (weekDay) => {
  if (weekDay > 6) {
    return 1;
  };
  if (weekDay < 0) {
    return 6;
  };
  return weekDay
};

const getMonth = (month) => {
  if (month > 11) {
    return 0;
  };
  if (month < 0) {
    return 11;
  };
  return month;
};

const getNextMonth = (currentYear, currentMonth, thisMonthDaysCount) => {
  const lastDateOfThisMonth = new Date(currentYear, currentMonth, thisMonthDaysCount);
  const lastWeekDayOfThisMonth = getWeekDay(lastDateOfThisMonth.getDay());
  const nextMonth = dates(DAY_PER_WEEK - lastWeekDayOfThisMonth, FIRST_DAY);
  return nextMonth;
};


const getPrevMonth = (currentYear, currentMonth) => {
  const firstDateOfThisMonth = new Date(currentYear, currentMonth, FIRST_DAY);
  const prevMonthDaysCount = months[getMonth(currentMonth)].days;
  const lastWeekDayOfPrevMonth = getWeekDay(firstDateOfThisMonth.getDay() - 1);
  const prevMonth = dates(lastWeekDayOfPrevMonth === DAY_PER_WEEK ? 0 : lastWeekDayOfPrevMonth, prevMonthDaysCount - lastWeekDayOfPrevMonth + 1);
  return prevMonth;
};

const dateClickHandler = evt => {
  evt.preventDefault();
};

const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  .map((item, i) =>
    <div className={classes.week} key={'week' + i}>{item}</div>
  );

const Calendar = () => {

  const [currentDate, setCurrentDate] = useState(today);
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const thisMonthDaysCount = months[currentMonth].days;

  const prevMonth = getPrevMonth(currentYear, currentMonth)
    .map((date, i) =>
      <a
        href={bookingHref}
        onClick={dateClickHandler} tabIndex='-1'
        key={'prevMonth' + i}
      >{date}</a>
    );

  const getClasses = (date) => {
    let cls = classes.past;
    if (date >= currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      cls = classes.present;
    } else if (currentMonth > today.getMonth() && currentYear >= today.getFullYear()) {
      cls = classes.future;
    } else if (currentMonth <= today.getMonth() && currentYear > today.getFullYear()) {
      cls = classes.future;
    } else if (currentMonth < today.getMonth() && currentYear <= today.getFullYear()) {
      cls = classes.past;
    }
    return cls;
  };

  const thisMonth = dates(+thisMonthDaysCount, FIRST_DAY)
    .map((date, i) => {
      const cls = getClasses(date);
      return (
        <a
          href={bookingHref}
          onClick={cls === classes.past ? dateClickHandler : null}
          tabIndex={cls === classes.past ? -1 : 0}
          className={cls}
          key={'date' + i}
        >{date}</a>
      );
    });

  const nextMonth = getNextMonth(currentYear, currentMonth, thisMonthDaysCount)
    .map((date, i) =>
      <a
        href={bookingHref}
        className={classes.nextMonth}
        key={'nextMonth' + i}
      >{date}</a>
    );

  const changeMonthToPrev = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, currentDay));
  };

  const changeMonthToNext = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, currentDay));
  };

  return (
    <div className={classes.Calendar}>
      <div className={classes.previous}><SliderButton text='previous' onClick={changeMonthToPrev} /></div>
      <h3 className={classes.month}>{months[currentMonth].month + ' - ' + currentYear}</h3>
      <div className={classes.next}><SliderButton text='next' onClick={changeMonthToNext} /></div>
      {week}
      {prevMonth}
      {thisMonth}
      {nextMonth}
    </div>
  );
}

export default Calendar;
