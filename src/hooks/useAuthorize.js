import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authSelector } from "../redux/selectors"
import { useEffect } from 'react';




const useAuthorize = () => {
    const navigate = useNavigate();
    const { isAuthenticated} = useSelector(authSelector);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }else{}
    }
    ,[isAuthenticated,navigate])


    
}
export default useAuthorize;