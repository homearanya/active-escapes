import React from 'react'
import RecentPosts from './recent-posts'
import Tags, { TagsProps } from './tags'
import SubscribeForm from './subscribe-form'

const BlogSidebar = ({ tags }: TagsProps) => {
  return (
    <aside id="sidebar" className="col-sm-4 col-md-3 sidebar">
      <div className="sidebar-holder">
        <div className="accordion">
          <RecentPosts />
          <Tags tags={tags} />
          <SubscribeForm />
        </div>
      </div>
    </aside>
  )
}

export default BlogSidebar
