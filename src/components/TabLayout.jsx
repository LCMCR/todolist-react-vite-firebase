/* eslint-disable react/prop-types */
import Input from "./Input/Index";

const TabLayout = ({ children, uid }) => {
  return (
    <>
      <Input uid={uid} />
      {children}
    </>
  )
}

export default TabLayout;
