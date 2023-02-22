import mls from './mlsToTime';
export default function setTimer(refs, delta = 0) {
  const data = mls(delta);
  const dataDays =
    data.days.length > 2
      ? `${data.days}`.padStart(3, '0')
      : `${data.days}`.padStart(2, '0');

  const dataHours = `${data.hours}`.padStart(2, '0');
  const dataMinutes = `${data.minutes}`.padStart(2, '0');
  const dataSeconds = `${data.seconds}`.padStart(2, '0');
  refs.dataDays.textContent = dataDays;
  refs.dataHours.textContent = dataHours;
  refs.dataMinutes.textContent = dataMinutes;
  refs.dataSeconds.textContent = dataSeconds;
}
