
import * as BlogServices from '../services/BlogServices.js';

export const CreateBlog = async (req, res) => {
    let result = await BlogServices.CreateBlog(req);
    res.status(result.status).json(result);
}

export const GetSingleBlog = async (req, res) => {
    let result = await BlogServices.GetSingleBlog(req);
    res.status(result.status).json(result);

}

export const GetAllBlogs = async (req, res) => {
    let result = await BlogServices.GetAllBlogs(req);
    res.status(result.status).json(result);
}

export const UpdateBlog = async (req, res) => {
    let result = await BlogServices.UpdateBlog(req);
    res.status(result.status).json(result);
}

export const DeleteBlog = async (req, res) => {
    let result = await BlogServices.DeleteBlog(req);
    res.status(result.status).json(result);
}