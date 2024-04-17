import { useLocation } from 'react-router-dom'

const useActive = (path) => {

    const pathname = useLocation().pathname

  return path === pathname ? "text-blue-600" : ""
}

export default useActive