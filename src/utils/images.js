const modules = import.meta.glob('../assets/**/[0-9][0-9]-*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const map = {}
for (const path in modules) {
  const key = path.replace('../assets/', '')
  map[key] = modules[path]
}

export function resolveImage(relativePath) {
  return map[relativePath]
}
