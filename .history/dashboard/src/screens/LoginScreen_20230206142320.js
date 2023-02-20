import React from 'react';

const Login = () => {
    window.scrollTo(0, 0);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    return (
        <>
            <div
                className="card shadow mx-auto"
                style={{ maxWidth: '380px', marginTop: '100px' }}
            >
                <div className="card-body">
                    <h4 className="card-title mb-4 text-center"> Đăng nhập</h4>
                    <form className="Login">
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div className="mb-3 ">
                            <button type="submit" className=" text-white">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Login;
