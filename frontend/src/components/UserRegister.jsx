import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../features/user/userSlice';

const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (userInfo) {
            navigate('/'); // Navigate to home on successful registration
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(register({ name, email, password }));
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-sm bg-white">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
                {message && <p className="text-red-500 mb-4">{message}</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading && <p className="mb-4">Loading...</p>}
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already registered?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className="text-blue-500 cursor-pointer hover:underline"
                    >
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default UserRegister;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../features/user/userSlice';

// const UserRegister = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { userInfo, loading, error } = useSelector((state) => state.user);

//     useEffect(() => {
//         if (userInfo) {
//             navigate('/');
//         }
//     }, [navigate, userInfo]);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setMessage('Passwords do not match');
//         } else {
//             dispatch(register({ name, email, password }));
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center bg-cyan-950 h-screen">
//             <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-sm bg-white">
//                 <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
//                 {message && <p className="text-red-500 mb-4">{message}</p>}
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 {loading && <p className="mb-4">Loading...</p>}
//                 <form onSubmit={submitHandler} className="space-y-4">
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     />
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
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserRegister;
