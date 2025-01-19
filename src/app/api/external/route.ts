// // 

// import { NextResponse } from "next/server";

// const define_api = "https://jsonplaceholder.typicode.com/posts";

// async function GET() {
//     try {
//         const response = await fetch(define_api);
        
//         if (!response.ok) {
//             return NextResponse.json(
//                 { success: false, message: "Failed to fetch data" },
//                 {
//                     status: response.status,
//                 }
//             );
//         }
        
//         const data = await response.json();
//         return NextResponse.json({
//             success: true,
//             data,
//         });
//     } catch (error: any) {
//         return NextResponse.json(
//             {
//                 success: false,
//                 message: "An error occurred while fetching data", // Fixed typo here
//                 error: error.message, // Proper error message
//             },
//             {
//                 status: 500, // Returning an internal server error status by default
//             }
//         );
//     }
// }

// export { GET };

import { NextResponse } from 'next/server';

const EXTERNAL_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function GET() {
    try {
        const response = await fetch(EXTERNAL_API_URL);

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Failed to fetch data" },
                {
                    status: response.status,
                }
                );
        }

        const data = await response.json();

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "An error occurred",
            error: error.message,
        });
    }
}

