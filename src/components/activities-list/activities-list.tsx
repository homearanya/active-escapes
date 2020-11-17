import React from 'react'
import { Link } from 'gatsby'

import { Reference } from '../../types'

interface ActivitiesListData {
  activity: Reference[]
  subActivity: Reference[] | null
}

interface ActiviyIntroProps {
  data: ActivitiesListData
}

const ActivitiesList = ({
  data: { activity, subActivity },
}: ActiviyIntroProps) => (
  <ul className="ico-list">
    {activity.map(({ id, frontmatter }) => {
      const { activityName, icon, code } = frontmatter
      return (
        <li key={id} className="pop-opener">
          <Link to={`/activity/${code}/`}>
            <span className={icon}></span>
          </Link>
          <div className="popup">{activityName}</div>
        </li>
      )
    })}
    {subActivity
      ? subActivity
          .filter(
            (e) =>
              !activity.find(
                (item) => e.frontmatter.code === item.frontmatter.code,
              ),
          )
          .map(({ id, frontmatter }) => {
            const { title, icon } = frontmatter
            return (
              <li key={id} className="pop-opener">
                <span className={icon}></span>
                <div className="popup">{title}</div>
              </li>
            )
          })
      : null}
  </ul>
)

export default ActivitiesList
