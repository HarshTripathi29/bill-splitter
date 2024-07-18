import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/user/userSlice';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard'); // Navigate to dashboard on successful login
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="p-6 border border-cyan-100 rounded-lg shadow-md w-full max-w-sm bg-cyan-950">
                <h1 className="text-2xl font-bold text-gray-50 mb-4">Sign In</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading && <p className="mb-4">Loading...</p>}
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border bg-cyan-950 border-cyan-100 rounded focus:outline-none focus:border-cyan-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border bg-cyan-950 border-cyan-100 rounded focus:outline-none focus:border-cyan-500"
                    />
                    <button
                        type="submit"
                        className="w-full px-3 py-2 bg-cyan-800 border-cyan-100 text-white rounded hover:bg-emerald-500 focus:outline-none"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center text-cyan-100">
                    Not registered?{' '}
                    <span
                        onClick={() => navigate('/register')}
                        className="text-red-500 cursor-pointer hover:underline"
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default UserLogin;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../features/user/userSlice';

// const UserLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { userInfo, loading, error } = useSelector((state) => state.user);

//     useEffect(() => {
//         if (userInfo) {
//             navigate('/dashboard'); // Navigate to dashboard on successful login
//         }
//     }, [navigate, userInfo]);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(login({ email, password }));
//     };

//     return (
//         <div className="flex flex-col items-center justify-center bg-cyan-950 h-screen">
//             <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-sm bg-white">
//                 <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h1>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 {loading && <p className="mb-4">Loading...</p>}
//                 <form onSubmit={submitHandler} className="space-y-4">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
//                     >
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserLogin;
