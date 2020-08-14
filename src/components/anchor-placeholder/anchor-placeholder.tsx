import React from 'react'

interface AnchorPlaceholderProps {
  anchorPlaceholderId: string
}
const AnchorPlaceholder = ({ anchorPlaceholderId }: AnchorPlaceholderProps) => (
  <span id={anchorPlaceholderId} className="anchor-placeholder" />
)

export default AnchorPlaceholder
