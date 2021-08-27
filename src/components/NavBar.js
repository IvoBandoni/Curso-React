import React from "react";
import { BrowserRouter as Link, Switch, Route } from "react-router-dom";
import { Item } from "./Item";

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

const NavBar = () => {

    const tagsEl = document.getElementById('tags');
    const genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]

    var selectedGenre = []

    setGenre()
    function setGenre() {
          tagsEl.innerHTML= '';
        genres.forEach(genre => {
          const t = document.createElement('div');
          t.classList.add('tag');
          t.id=genre.id;
          t.innerText = genre.name;
          t.addEventListener('click', () => {
                if(selectedGenre.length === 0){
                    selectedGenre.push(genre.id);
                }else{
                  if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id,idx) => {
                      if(id === genre.id){
                        selectedGenre.splice(idx,1);
                      }
                    })
                  }else{
                      selectedGenre.push(genre.id);
                  }
                }
                console.log(selectedGenre)
                Item(API_URL + '&with_genres'+encodeURI(selectedGenre.join(',')))
          })
          tagsEl.append(t);
        })
    }
    
    

    return(
        <div id="tags">
            <div className="tag">Action</div>
            <div className="tag">Adventure</div>
            <div className="tag">Drama</div>
            <div className="tag">Comedy</div>
        </div>
    )
}

export default NavBar;