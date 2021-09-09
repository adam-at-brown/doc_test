export const filterColors = colors => {
  Object.filter = (obj, predicate) =>
    Object.assign(
      ...Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .map(key => ({ [key]: obj[key] }))
    )

  return (
    Object.filter(colors, color => {
      return color.indexOf("#") !== -1
    }) ?? []
  )
}

const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const luminance = color => {
  const { r, g, b } = color
  const a = [r, g, b].map(function (v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

const ratio = (color1, color2) => {
  return color1 > color2
    ? (color2 + 0.05) / (color1 + 0.05)
    : (color1 + 0.05) / (color2 + 0.05)
}

const result = ratio => {
  return {
    large: {
      aa: ratio < 1 / 3,
      aaa: ratio < 1 / 4.5,
    },
    small: {
      aa: ratio < 1 / 4.5,
      aaa: ratio < 1 / 7,
    },
  }
}

export const compareColors = (color1, color2) => {
  const c1 = luminance(hexToRgb(color1))
  const c2 = luminance(hexToRgb(color2))
  return result(ratio(c1, c2))
}
