import React from 'react'

import IconRafting from '../../../img/icons/icon-rafting.inline.svg'
import Feature from './feature'

const FeatureBlock = () => {
  return (
    <div className="feature-block">
      <div className="holder">
        <ul>
          <Feature
            link="/activity/hiking/"
            icon={<span className="icon-hiking" />}
            text="Hiking"
          />
          <Feature
            link="/activity/mountainbiking/"
            icon={<i className="ico-mountain-biking ux"></i>}
            text="Mountain Biking"
          />
          <Feature
            link="/activity/retreats/"
            icon={<span className="icon-culture"></span>}
            text="Retreats"
          />
          <Feature
            link="/activity/nature/"
            icon={<span className="glyphicon glyphicon-leaf"></span>}
            text="Nature"
          />
          <Feature
            link="/activity/family/"
            icon={<span className="icon-family"></span>}
            text="Family"
          />
          <Feature
            link="/activity/groups/"
            icon={<span className="icon-group-large"></span>}
            text="Groups"
          />
          <Feature
            link="/activity/rafting/"
            icon={<IconRafting className="icon" />}
            text="Rafting"
          />
          <Feature
            link="/running/"
            icon={<i className="ico-running ux"></i>}
            text="Running"
          />
          <Feature
            link="/activity/horseriding/"
            icon={<i className="ico-horse-riding ux"></i>}
            text="Horse Riding"
          />
        </ul>
      </div>
    </div>
  )
}

export default FeatureBlock
