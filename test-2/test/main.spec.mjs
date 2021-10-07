import supertest from 'supertest';

import app from '../src/main.mjs';
import * as service from '../src/service.mjs';

let request;

describe('GET /', () => {
  beforeEach(() => {
    request = supertest(app);
  });

  it('should be able to complete request', async () => {
    const res = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.text).toBeDefined();
  });
});

describe('GET /search', () => {
  beforeEach(() => {
    request = supertest(app);
  });

  it('should be able to complete request', async () => {
    const mockResult = [
      {
        id: "tt0371746",
        title: "Iron Man",
        year: "2008",
        type: "movie",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
      },
    ];
    const spyService = jest.spyOn(service, 'search').mockResolvedValue(mockResult);

    const res = await request.get('/search?keyword=iron+man');

    expect(spyService).toBeCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockResult);
  });
});

describe('GET /detail', () => {
  beforeEach(() => {
    request = supertest(app);
  });

  it('should be able to complete request', async () => {
    const mockResult = {
        id: "tt0371746",
        title: "Iron Man",
        year: "2008",
        rated: "PG-13",
        released: "02 May 2008",
        runtime: "126 min",
        genre: "Action, Adventure, Sci-Fi",
        director: "Jon Favreau",
        writer: "Mark Fergus, Hawk Ostby, Art Marcum",
        actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
        country: "United States, Canada",
        awards: "Nominated for 2 Oscars. 21 wins & 73 nominations total",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
        ratings: [
          {
            source: "Internet Movie Database",
            value: "7.9/10",
          },
          {
            source: "Rotten Tomatoes",
            value: "94%",
          },
          {
            source: "Metacritic",
            value: "79/100",
          },
        ],
        metascore: "79",
        imdb_rating: "7.9",
        imdb_votes: "982,983",
        imdb_id: "tt0371746",
        type: "movie",
        dvd: "30 Sep 2008",
        box_office: "$319,034,126",
        production: "Paramount, Marvel Enterprises",
        website: "N/A",
        response: "True",
      };
    const spyService = jest.spyOn(service, 'detail').mockResolvedValue(mockResult);

    const res = await request.get('/detail/tt0371746');

    expect(spyService).toBeCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockResult);
  });
});
