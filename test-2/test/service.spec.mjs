import axios from "axios";
import snakecaseKeys from "snakecase-keys";

import * as service from "../src/service.mjs";
import * as repo from "../src/repository.mjs";

describe("search", () => {
  it("should return empty array on empty keyword", async () => {
    const keyword = "";

    const result = await service.search(keyword);

    expect(result).toEqual([]);
  });

  it("should return empty array on empty results", async () => {
    const keyword = "foo bar";
    const mockAxiosResult = {
      status: 200,
      data: {
        Search: [],
      },
    };

    const spyAxios = jest
      .spyOn(axios, "get")
      .mockResolvedValue(mockAxiosResult);
    const spyRepo = jest.spyOn(repo, "writeLog").mockResolvedValue({ id: 1 });

    const result = await service.search(keyword);

    expect(result).toEqual([]);
    expect(spyAxios).toBeCalled();
    expect(spyRepo).toBeCalled();
  });

  it("should return array on found results", async () => {
    const keyword = "iron man";
    const mockAxiosResult = {
      status: 200,
      data: {
        Search: [
          {
            Title: "Iron Man",
            Year: "2008",
            imdbID: "tt0371746",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
          },
        ],
      },
    };
    const mockResult = snakecaseKeys(mockAxiosResult.data.Search[0]);
    mockResult.id = mockResult.imdb_id;
    delete mockResult.imdb_id;

    const spyAxios = jest
      .spyOn(axios, "get")
      .mockResolvedValue(mockAxiosResult);
    const spyRepo = jest.spyOn(repo, "writeLog").mockResolvedValue({ id: 1 });

    const result = await service.search(keyword);

    expect(result).toEqual([mockResult]);
    expect(spyAxios).toBeCalled();
    expect(spyRepo).toBeCalled();
  });
});

describe("detail", () => {
  it("should return empty object on empty titleId", async () => {
    const titleId = "";

    const result = await service.detail(titleId);

    expect(result).toEqual({});
  });

  it("should return empty object on empty result", async () => {
    const titleId = "tt0123456";
    const mockAxiosResult = {
      status: 200,
      data: {
        id: "tt012345",
        response: "False",
        error: "Incorrect IMDb ID.",
      },
    };

    const spyAxios = jest
      .spyOn(axios, "get")
      .mockResolvedValue(mockAxiosResult);
    const spyRepo = jest.spyOn(repo, "writeLog").mockResolvedValue({ id: 1 });

    const result = await service.detail(titleId);

    expect(result).toEqual({});
    expect(spyAxios).toBeCalled();
    expect(spyRepo).toBeCalled();
  });

  it("should return object on found result", async () => {
    const titleId = "tt0371746";
    const mockAxiosResult = {
      status: 200,
      data: {
        Title: "Iron Man",
        Year: "2008",
        Rated: "PG-13",
        Released: "02 May 2008",
        Runtime: "126 min",
        Genre: "Action, Adventure, Sci-Fi",
        Director: "Jon Favreau",
        Writer: "Mark Fergus, Hawk Ostby, Art Marcum",
        Actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        Plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
        Country: "United States, Canada",
        Awards: "Nominated for 2 Oscars. 21 wins & 73 nominations total",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.9/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "94%",
          },
          {
            Source: "Metacritic",
            Value: "79/100",
          },
        ],
        Metascore: "79",
        imdbRating: "7.9",
        imdbVotes: "982,983",
        imdbID: "tt0371746",
        Type: "movie",
        DVD: "30 Sep 2008",
        BoxOffice: "$319,034,126",
        Production: "Paramount, Marvel Enterprises",
        Website: "N/A",
        Response: "True",
      },
    };
    const mockResult = snakecaseKeys(mockAxiosResult.data);
    mockResult.id = mockResult.imdb_id;

    const spyAxios = jest
      .spyOn(axios, "get")
      .mockResolvedValue(mockAxiosResult);
    const spyRepo = jest.spyOn(repo, "writeLog").mockResolvedValue({ id: 1 });

    const result = await service.detail(titleId);

    expect(result).toEqual(mockResult);
    expect(spyAxios).toBeCalled();
    expect(spyRepo).toBeCalled();
  });
});
