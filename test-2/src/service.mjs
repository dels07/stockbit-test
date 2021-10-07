import axios from "axios";
import dotenv from "dotenv";
import snakecaseKeys from "snakecase-keys";

import { writeLog } from "./repository.mjs";

dotenv.config();

const url = process.env.OMDB_API;
const key = process.env.OMDB_KEY;

export async function search(keyword) {
  if (!keyword) return [];

  const param = `s=${keyword}`;

  const [result] = await Promise.allSettled([
    axios.get(`${url}/?${param}&apikey=${key}`),
    writeLog(url, param),
  ]);

  if (
    result.status === "rejected" ||
    result.value?.status !== 200 ||
    !result.value?.data?.Search?.length
  ) {
    return [];
  }

  const data = result.value.data.Search.map((res) => {
    const newObj = snakecaseKeys(res);
    delete newObj.imdb_id;

    return {
      id: res.imdbID,
      ...newObj,
    };
  });

  return data;
}

export async function detail(titleId) {
  if (!titleId) return {};

  const param = `i=${titleId}`;

  const [result] = await Promise.allSettled([
    axios.get(`${url}/?${param}&apikey=${key}`),
    writeLog(url, param),
  ]);

  if (
    result.status === "rejected" ||
    result.value?.status !== 200 ||
    result.value?.data?.error
  ) {
    return {};
  }

  const data = snakecaseKeys(result.value.data);

  return { id: titleId, ...data };
}
