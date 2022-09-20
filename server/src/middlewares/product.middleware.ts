import {Request, NextFunction, Response } from "express";
import { IProduct } from "@/components/products/product";
import { ErrorHandler } from "./error.middleware";

const isValidProduct =  async (req: Request, res: Response, next: NextFunction) => {
    const product: IProduct = req.body
        if (
          product.title &&
          product.description &&
          product.details &&
          product.pricing.originalPrice &&
          product.category &&
          product.countInStock 
        ) next()
        next(new ErrorHandler(404, 'missing required product fields'))
    };

export {isValidProduct}