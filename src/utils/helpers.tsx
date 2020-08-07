import React from 'react'
import { Link } from 'gatsby'

export const addDays = (date: Date, days: number): Date => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

export const textTruncate = (text: string, num: number): string => {
  if (num >= text.length) return text
  let result = ''
  const words = text.split(' ')

  let i = 0
  while (i < words.length) {
    if (result.length + words[i].length + 1 > num) {
      break
    } else {
      result += ` ${words[i]}`
    }
    i++
  }
  if (result[result.length - 1] === '.') {
    result += '..'
  } else {
    result += '...'
  }
  return result
}

export const ProcessText = (text: string): JSX.Element => {
  const linkStart = text.indexOf('<a ')
  if (linkStart === -1) {
    return <>{text}</>
  }
  const preLinkText = text.slice(0, linkStart)
  const startHref = text.indexOf('href="')
  if (startHref === -1) {
    return <>{text}</>
  }
  const endLink = text.slice(startHref + 6).indexOf('"')
  if (endLink === -1) {
    return <>{text}</>
  }
  const theLink = text.slice(startHref + 6, startHref + 6 + endLink)
  const startContent = text.indexOf('>')
  if (startContent === -1) {
    return <>{text}</>
  }
  const endContent = text.indexOf('</a>')
  if (endContent === -1) {
    return <>{text}</>
  }
  const theContent = text.slice(startContent + 1, endContent)
  const theRestText = text.slice(endContent + 4)
  return (
    <>
      {preLinkText}
      <Link to={theLink}>{theContent}</Link>
      {ProcessText(theRestText)}
    </>
  )
}

type SocialSharers = {
  facebook: string
  twitter: string
  linkedin: string
  pinterest: string
}

export const socialSharers = (
  fullUrl: string,
  title: string,
  shortDescription: string,
): SocialSharers => ({
  facebook: encodeURI(
    `https://www.facebook.com/sharer.php?u=${fullUrl}&p[title]=${title}`,
  ),
  twitter: encodeURI(
    `https://twitter.com/intent/tweet?url=${fullUrl}&text=${title}`,
  ),
  linkedin: encodeURI(
    `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${title}&summary=${shortDescription}&source={}`,
  ),
  pinterest: encodeURI(
    `http://pinterest.com/pin/create/button/?url=${fullUrl}&description=${title}`,
  ),
})
