import { FaGoogle } from "react-icons/fa";
import UseAuth from '../../hooks/UseAuth.jsx';
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic.jsx";

const SocialLogin = ({from}) => {
    const {googleSignIn} = UseAuth();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();

    const handleGoogleSignIn = () =>{
        console.log(from)
        googleSignIn()
        .then(res=>{
            const userInfo ={
                name: res.user.displayName,
                email: res.user.email
            };

            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate(from);
            })
        })
        .catch(err => console.error(err))

    }
    return (
        <div>
    <div className="border-t-2 border-black my-2"></div>
    <div className="flex justify-center">
        <button onClick={handleGoogleSignIn} className="btn flex items-center gap-2">
            <FaGoogle></FaGoogle>
            Continue With Google
        </button>
    </div>
</div>

    );
};

export default SocialLogin;