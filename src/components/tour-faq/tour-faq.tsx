import React, { useState } from 'react'

import FAQBlock, { FAQBlockData } from './faq-block'

export interface TourFaqData {
  faq: FAQBlockData[]
}

interface TourFaqProps {
  data: TourFaqData
}

const TourFaq = ({ data: { faq } }: TourFaqProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  return (
    <div className="row">
      <div className="col-md-6">
        <ol className="detail-accordion">
          {faq.map(({ question, answer }, i) => {
            const active = i === activeTab
            return (
              <li
                key={i}
                className={`faq ${active ? ' active' : ''}`}
                onClick={() =>
                  setActiveTab((prevActiveTab) =>
                    prevActiveTab === i ? null : i,
                  )
                }
              >
                <FAQBlock data={{ question, answer }} active={active} />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default TourFaq
