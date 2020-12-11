import React, { useReducer } from 'react'

import { ImageSharp } from '../../types'
import { processText } from '../../utils/helpers'
import UniversalLink from '../universal-link'
import Image from '../image'

interface State {
  maxWidth: number
  widths: number[]
  totalMeasurements: number
}

interface Action {
  type: string
  payload: {
    index: number
    width: number
  }
}
const reducer = (state: State, action: Action) => {
  const { maxWidth, widths, totalMeasurements } = state
  const { type, payload } = action
  const { index, width } = payload
  switch (type) {
    case 'add':
      if (!widths[index] || width > widths[index]) {
        widths[index] = width
        return {
          maxWidth: width > maxWidth ? width : maxWidth,
          widths,
          totalMeasurements: width ? totalMeasurements + 1 : totalMeasurements,
        }
      }
      return state
    default:
      throw state
  }
}

export interface TaylorMadeCardInterface {
  image: ImageSharp
  title: string
  subTitle?: string
  description?: string
  descriptionInParagraphs?: string[]
  link?: {
    href: string
    text: string
  }
  link2?: {
    href: string
    text: string
  }
}

interface TaylorMadeCardProps {
  data: TaylorMadeCardInterface
  first: boolean
  last: boolean
}

const TaylorMadeCard = ({
  data: {
    image,
    title,
    subTitle,
    description,
    descriptionInParagraphs,
    link,
    link2,
  },
  first,
  last,
}: TaylorMadeCardProps) => {
  const initialState: State = {
    maxWidth: 0,
    widths: [0, 0],
    totalMeasurements: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateWidths = (index: number, div: HTMLDivElement) =>
    div.clientWidth &&
    div.clientWidth > state.widths[index] &&
    dispatch({
      type: 'add',
      payload: { index, width: div.clientWidth },
    })
  return (
    <article
      className={`taylor-made-card__wrapper${first ? ' first' : ''}${
        last ? ' last' : ''
      }`}
    >
      <div className="taylor-made-card__img-wrap">
        {image && image.childImageSharp ? (
          <Image image={image} alt={title} />
        ) : null}
      </div>
      <div className="taylor-made-card__textblock">
        {title && <h3 className="taylor-made-card__title">{title}</h3>}
        {subTitle && <p className="taylor-made-card__subTitle">{subTitle}</p>}

        {description && (
          <p className="taylor-made-card__description">
            {processText(description)}
          </p>
        )}
        {descriptionInParagraphs &&
          descriptionInParagraphs.map((paragraph) => (
            <p className="taylor-made-card__description">
              {processText(paragraph)}
            </p>
          ))}
        <div className="taylor-made-card__buttons-wrapper">
          {link && (
            <div
              ref={(div) => div && updateWidths(0, div)}
              style={
                state.totalMeasurements >= 2
                  ? { display: 'flex', width: `${state.maxWidth}px` }
                  : {}
              }
            >
              <UniversalLink
                href={link.href}
                className="btn btn-default featured-explore-button"
                style={{ flex: '1 0 auto' }}
              >
                {link.text}
              </UniversalLink>
            </div>
          )}
          {link2 && (
            <div
              ref={(div) => div && updateWidths(1, div)}
              style={
                state.totalMeasurements >= 2
                  ? { display: 'flex', width: `${state.maxWidth}px` }
                  : {}
              }
            >
              <UniversalLink
                href={link2.href}
                className="btn btn-default featured-explore-button featured-explore-button--extra"
                style={{ flex: '1 0 auto' }}
              >
                {link2.text}
              </UniversalLink>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
export default TaylorMadeCard
