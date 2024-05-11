import { NextFunction, Request, Response } from "express";
import { verify, decode } from "jsonwebtoken";

const config = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : "";

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, config);
    req.user = decode(token, { complete: true })?.payload;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export const studentGuard = (req: any, res: Response, next: NextFunction) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, config);
    req.user = decode(token, { complete: true })?.payload;
    if (req.user.role === "STUDENT")
      return res.status(401).send("UNAUTHORIZED");
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export const adminOnlyGuard = (req: any, res: Response, next: NextFunction) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, config);
    req.user = decode(token, { complete: true })?.payload;
    if (req.user.role !== "ADMIN") return res.status(401).send("UNAUTHORIZED");
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
