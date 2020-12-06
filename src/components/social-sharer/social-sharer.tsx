import React from 'react'

import { socialSharers } from '../../utils/helpers'

export interface SocialSharerData {
  siteUrl: string
  tourLink: string
  tourName: string
  shortDescription: string
  emailLink?: string
}
interface SocialSharerProps {
  data: SocialSharerData
}
const SocialSharer = ({
  data: { siteUrl, tourLink, tourName, shortDescription, emailLink },
}: SocialSharerProps) => {
  const fullUrl = `${siteUrl}${tourLink}`
  const { facebook, twitter, linkedin, pinterest } = socialSharers(
    fullUrl,
    tourName,
    shortDescription,
  )

  return (
    <ul className="social-networks">
      <li>
        <a href={twitter} target="_blank" rel="noreferrer">
          <span className="icon-twitter"></span>
        </a>
        <br />
      </li>
      <li>
        <a href={facebook} target="_blank" rel="noreferrer">
          <span className="icon-facebook"></span>
        </a>
        <br />
      </li>
      <li>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <span className="icon-linkedin"></span>
        </a>
        <br />
      </li>
      <li>
        <a href={pinterest} target="_blank" rel="noreferrer">
          <span className="icon-pin"></span>
        </a>
        <br />
      </li>
      {emailLink && (
        <li className="social-networks__email">
          <a href={emailLink} rel="noreferrer">
            <span className="icon-email"></span>
          </a>
          <br />
        </li>
      )}
    </ul>
  )
}
export default SocialSharer
