export function gmailComposeHref(to) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`
}
