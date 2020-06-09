function subsOffsetApply(str, offset) {
  let time = str.substring(0, 29).split(" --> ");
  let left = str.substring(29, str.length + 1);
  str = `${getStr(time[0], offset)} --> ${getStr(time[1], offset)}${left}`;
  return str.includes("Invalid offset") ? "Invalid offset" : str;
}

const getStr = (time, offset) => {
  time = time.split(":");
  let hours = +time[0];
  let minutes = +time[1];
  let seconds = +time[2].split(",")[0];
  let ms = +time[2].split(",")[1];
  offset = ms + seconds * 1000 + minutes * 60000 + hours * 3600000 + offset;
  if (offset < 0 || offset >= 360000000) {
    return "Invalid offset";
  }
  ms = offset % 1000;
  offset = Math.floor(offset / 1000);
  seconds = offset % 60;
  offset = Math.floor(offset / 60);
  minutes = offset % 60;
  hours = Math.floor(offset / 60);

  hours = hours >= 10 ? hours : "0" + hours;
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  ms = ms >= 10 ? (ms >= 100 ? ms : "0" + ms) : "00" + ms;
  return `${hours}:${minutes}:${seconds},${ms}`;
};
