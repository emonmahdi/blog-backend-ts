/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { type Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json(data);
};

export default sendResponse;
