const API = "https://api.themoviedb.org/3";

export function get(path) {
    
      return  fetch( API + path, {
            headers: {
                Authorization:
                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjdlMDQxMDk2MTg5Mjc2YzU1NTU0YjJmY2I0YTc2YiIsInN1YiI6IjYxMWQ1N2IyMTUxYzVjMDA1YzczYjQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UJSduR7AbkDsxmrFYu2njGuUelzA1oKITM85lYdyRxo",
                 "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then(result => result.json())   
}