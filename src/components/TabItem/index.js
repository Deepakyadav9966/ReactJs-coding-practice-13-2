// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onChangeTabId, isActive} = props
  const {tabId, displayText} = eachItem
  const onClickTabId = () => {
    onChangeTabId(tabId)
  }
  const TabItemClassName = isActive ? 'change-style' : ''
  return (
    <li className="TabItem-name">
      <button
        type="button"
        className={`tab-btn ${TabItemClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
