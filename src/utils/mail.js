export function openGmailCompose({ to, subject = '', body = '' }) {
  const url =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function gmailComposeHref(to) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`
}
