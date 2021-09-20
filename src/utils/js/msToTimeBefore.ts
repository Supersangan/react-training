import { getNumeralForm } from './getNumeralForm';

export function msToTimeBefore(ms: number) {
  const seconds = parseInt((ms / 1000).toFixed(1));
  const minutes = parseInt((ms / (1000 * 60)).toFixed(1));
  const hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));
  const days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));

  let time: string;

  if (seconds < 60) {
    time = seconds + ' ' + getNumeralForm('секунду', 'секунды', 'секунд', seconds);
  } else if (minutes < 60) {
    time = minutes + ' ' + getNumeralForm('минуту', 'минуты', 'минут', minutes);
  } else if (hours < 24) {
    time = hours + ' ' + getNumeralForm('час', 'часа', 'часов', hours);
  } else {
    time = days + ' ' + getNumeralForm('день', 'дня', 'дней', days);
  }

  return time;
}
