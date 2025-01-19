// "use client"

// import { useEffect, useState } from "react";

// export default function FetchPostPage() {
//     const [posts, setPosts] = useState([]); // Explicitly typing posts as an array of any
//     const [error, setError] = useState(""); 
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("/api/external/")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("Data from API:", data); // Log the response to inspect it

//                 if (data.success) {
//                     setPosts(data.data); // Corrected from setPost to setPosts
//                 } else {
//                     setError(data.message); // Fixed typo from "massage" to "message"
//                 }
//             })
//             .catch((error) => {
//                 setError("An unexpected error occurred");
//             })
//             .finally(() => setLoading(false));
//     }, []);
//     return(
//         <div>
//             <h1> Posts </h1>
//             <ul>
//                 {posts.map((post: { id: number; title: string; body: string }) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// import { useEffect, useState } from "react";

// export default function FetchPostPage() {
//     const [posts, setPosts] = useState([]); // State for posts data
//     const [error, setError] = useState(""); // State for error message
//     const [loading, setLoading] = useState(true); // State for loading status

//     useEffect(() => {
//         // Fetch data from the API
//         fetch("/api/external/")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("Data from API:", data); // Log the response to inspect it

//                 // Check if the API response contains the expected data
//                 if (data && data.success && Array.isArray(data.data)) {
//                     setPosts(data.data); // Set the posts state with fetched data
//                 } else {
//                     setError("Failed to fetch posts. Data is malformed.");
//                 }
//             })
//             .catch((error) => {
//                 setError("An unexpected error occurred: " + error.message); // Improved error message
//             })
//             .finally(() => setLoading(false)); // Stop loading once the data has been fetched
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Posts</h1>
                
//                 {/* Loading State */}
//                 {loading && (
//                     <div className="text-center text-xl text-gray-600">Loading...</div>
//                 )}
                
//                 {/* Error State */}
//                 {error && (
//                     <div className="text-center text-xl text-red-500 mb-6">{error}</div>
//                 )}

//                 {/* Posts Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Map over posts and display each one */}
//                     {posts.length > 0 ? (
//                         posts.map((post) => (
//                             <div
//                                 key={post.id}
//                                 className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transition transform hover:scale-105"
//                             >
//                                 <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//                                 <p className="mt-4 text-gray-600">{post.body}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="text-center text-xl text-gray-500">No posts available.</div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client'

import { useEffect, useState } from "react";

export default function FetchPostPage() {
    const [posts, setPosts] = useState([]); // State for posts data
    const [error, setError] = useState(""); // State for error message
    const [loading, setLoading] = useState(true); // State for loading status

    useEffect(() => {
        fetch("/api/external/")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data from API:", data); // Log the response to inspect it

                if (data.success) {
                    setPosts(data.data); // Set posts state with fetched data
                } else {
                    setError(data.message); // Display error message if fetch fails
                }
            })
            .catch((error) => {
                setError("An unexpected error occurred");
            })
            .finally(() => setLoading(false)); // Set loading to false once the data is fetched
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-600 to-black py-12 px-4  sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className=" font-serif mb-4 px-4 border-2 text-2xl text-center justify-center rounded-lg shadow-sm bg-black text-white animate-pulse">My Posts</h1>

                {/* Error Handling */}
                {error && (
                    <div className="text-center text-xl text-red-500 mb-6">{error}</div>
                )}

                {/* Loading State */}
                {loading ? (
                    <div className="text-center text-xl text-gray-600">Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through the posts and display each post */}
                        {posts.map((post: { id: number; title: string; body: string }) => (
                            <div
                                key={post.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transition transform hover:scale-105"
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                                <p className="mt-4 text-gray-600">{post.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


