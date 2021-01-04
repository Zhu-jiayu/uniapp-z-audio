export function formatSeconds(seconds: number | string): string {

  var result = typeof seconds === "string" ? parseFloat(seconds) : seconds;
  if (isNaN(result)) return ''
  let h: any =
    Math.floor(result / 3600) < 10
      ? "0" + Math.floor(result / 3600)
      : Math.floor(result / 3600);
  let m: any =
    Math.floor((result / 60) % 60) < 10
      ? "0" + Math.floor((result / 60) % 60)
      : Math.floor((result / 60) % 60) + h * 60;
  let s: any =
    Math.floor(result % 60) < 10
      ? "0" + Math.floor(result % 60)
      : Math.floor(result % 60);
  return `${m}:${s}`;
}
