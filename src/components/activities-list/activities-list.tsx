import React from 'react'
import { Link } from 'gatsby'

import { Reference } from '../../types'

interface ActivitiesListData {
  activity: { name: Reference; featured: number }[]
  subActivity: Reference[] | null
}

interface ActiviyIntroProps {
  data: ActivitiesListData
}

const ActivitiesList = ({
  data: { activity, subActivity },
}: ActiviyIntroProps) => (
  <ul className="ico-list">
    {activity.map(({ name: { id, frontmatter } }) => {
      const { activityName, icon, code } = frontmatter
      console.log({ frontmatter })
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
                (item) => e.frontmatter.code === item.name.frontmatter.code,
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
