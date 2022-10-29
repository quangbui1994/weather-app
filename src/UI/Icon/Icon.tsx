interface IconProps {
  iconName: string
  size: number
}

const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <div>
    <i className={`icon ion-ios-${iconName}`} style={{ fontSize: `${size}rem` }}></i>
  </div>
)

export default Icon
