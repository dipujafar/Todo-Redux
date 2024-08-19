import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    tagTypes:["Todo"],
    endpoints: (builder) => ({
        getPost: builder.query({
            query: (priority)=>{
                const params  = new URLSearchParams();

                if(priority){
                    params.append("priority", priority)
                }

               return{ 
                url: `/products`,
                method: "GET",
                params: params
            }
            },
            providesTags: ["Todo"]
        }),
        addTodo: builder.mutation({
            query: (data)=>({
                url: "/products",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Todo"]
        })
    })
});

export const {useGetPostQuery, useAddTodoMutation} = baseApi;
   